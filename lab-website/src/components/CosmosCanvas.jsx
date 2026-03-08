import { useEffect, useRef } from 'react';

export default function CosmosCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animFrameId;

        let bgGradient = null;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            bgGradient = ctx.createRadialGradient(
                canvas.width * 0.5, canvas.height * 0.35, 0,
                canvas.width * 0.5, canvas.height * 0.5, Math.max(canvas.width, canvas.height) * 0.85
            );
            bgGradient.addColorStop(0, '#04061a');
            bgGradient.addColorStop(0.6, '#010208');
            bgGradient.addColorStop(1, '#000000');
        };
        resize();
        window.addEventListener('resize', resize);

        // --- Stars ---
        const stars = Array.from({ length: 700 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.6 + 0.3,
            alpha: Math.random(),
            speed: Math.random() * 0.005 + 0.002,
            dir: Math.random() > 0.5 ? 1 : -1,
        }));

        // --- Nebula blobs ---
        const nebulae = [
            { x: canvas.width * 0.2, y: canvas.height * 0.35, rx: 550, ry: 320, r: 130, g: 40, b: 240, a: 0.35, drift: 0.11 },
            { x: canvas.width * 0.75, y: canvas.height * 0.55, rx: 600, ry: 350, r: 30, g: 60, b: 220, a: 0.30, drift: -0.08 },
            { x: canvas.width * 0.5, y: canvas.height * 0.15, rx: 500, ry: 280, r: 240, g: 50, b: 130, a: 0.28, drift: 0.06 },
            { x: canvas.width * 0.88, y: canvas.height * 0.82, rx: 530, ry: 310, r: 30, g: 210, b: 220, a: 0.25, drift: -0.05 },
        ];

        // --- Comets ---
        const createComet = () => ({
            x: Math.random() * canvas.width,
            y: -30,
            angle: Math.PI / 4 + (Math.random() - 0.5) * 0.5,
            speed: Math.random() * 6 + 5,
            length: Math.random() * 140 + 80,
            alpha: Math.random() * 0.6 + 0.4,
            width: Math.random() * 1.5 + 0.8,
            active: true,
        });

        let comets = [createComet()];
        let cometTimer = 0;
        let lastTime = performance.now();

        const loop = (now) => {
            const dt = now - lastTime;
            lastTime = now;
            animFrameId = requestAnimationFrame(loop);

            // Deep space background
            if (bgGradient) {
                ctx.fillStyle = bgGradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            // Draw nebulae
            nebulae.forEach((n) => {
                const t = now * 0.001;
                const cx = n.x + Math.sin(t * 0.3 + n.drift * 10) * 80;
                const cy = n.y + Math.cos(t * 0.25 + n.drift * 10) * 50;
                const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, n.rx);
                grad.addColorStop(0, `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})`);
                grad.addColorStop(0.5, `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a * 0.5})`);
                grad.addColorStop(1, `rgba(${n.r}, ${n.g}, ${n.b}, 0)`);

                ctx.save();
                ctx.scale(1, n.ry / n.rx);
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(cx, cy * (n.rx / n.ry), n.rx, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });

            // Draw stars (twinkling)
            stars.forEach((s) => {
                s.alpha += s.speed * s.dir;
                if (s.alpha > 1 || s.alpha < 0.05) s.dir *= -1;
                ctx.globalAlpha = Math.max(0, Math.min(1, s.alpha));
                ctx.fillStyle = '#fff';
                // Use fillRect instead of arc for better performance with 700+ elements
                ctx.fillRect(s.x - s.r, s.y - s.r, s.r * 2, s.r * 2);
            });
            ctx.globalAlpha = 1;

            // Spawn comets
            cometTimer += dt;
            const spawnInterval = 2500 + Math.random() * 3000;
            if (cometTimer > spawnInterval) {
                comets.push(createComet());
                cometTimer = 0;
            }

            // Draw comets
            comets = comets.filter((c) => c.active);
            comets.forEach((c) => {
                const vx = Math.cos(c.angle) * c.speed;
                const vy = Math.sin(c.angle) * c.speed;
                const tailX = c.x - vx * c.length / c.speed;
                const tailY = c.y - vy * c.length / c.speed;

                const grad = ctx.createLinearGradient(tailX, tailY, c.x, c.y);
                grad.addColorStop(0, 'rgba(180, 220, 255, 0)');
                grad.addColorStop(1, `rgba(220, 240, 255, ${c.alpha})`);

                ctx.strokeStyle = grad;
                ctx.lineWidth = c.width;
                ctx.beginPath();
                ctx.moveTo(tailX, tailY);
                ctx.lineTo(c.x, c.y);
                ctx.stroke();

                // Bright head glow
                const glow = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, 6);
                glow.addColorStop(0, `rgba(255,255,255,${c.alpha})`);
                glow.addColorStop(1, 'rgba(180,220,255,0)');
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(c.x, c.y, 6, 0, Math.PI * 2);
                ctx.fill();

                c.x += vx;
                c.y += vy;
                if (c.y > canvas.height + 60 || c.x < -60 || c.x > canvas.width + 60) {
                    c.active = false;
                }
            });
        };

        animFrameId = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(animFrameId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                display: 'block',
            }}
        />
    );
}
