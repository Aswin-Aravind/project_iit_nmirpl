import { useEffect, useRef } from 'react';

export default function PremiumWhiteCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animFrameId;

        let bgGradient = null;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // A subtle, premium light gradient
            bgGradient = ctx.createRadialGradient(
                canvas.width * 0.5, canvas.height * 0.5, 0,
                canvas.width * 0.5, canvas.height * 0.5, Math.max(canvas.width, canvas.height)
            );
            bgGradient.addColorStop(0, '#ffffff');
            bgGradient.addColorStop(1, '#e2e8f0');
        };
        resize();
        window.addEventListener('resize', resize);

        // --- 3D Floating Particles ---
        const particleCount = 120;
        const particles = Array.from({ length: particleCount }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * 2 + 0.5, // Used for depth processing (parallax + size)
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            r: Math.random() * 3 + 1,
            color: `rgba(179, 27, 27, ${Math.random() * 0.3 + 0.1})` // Red accent
        }));

        const maxDistance = 150;

        let lastTime = performance.now();

        const loop = (now) => {
            const dt = now - lastTime;
            lastTime = now;
            animFrameId = requestAnimationFrame(loop);

            // Background
            if (bgGradient) {
                ctx.fillStyle = bgGradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            // Draw subtle animated glowing waves or blobs for 3d effect
            const t = now * 0.0005;
            ctx.globalCompositeOperation = 'source-over';
            
            // Move particles
            particles.forEach((p) => {
                p.x += p.vx * p.z;
                p.y += p.vy * p.z;

                // Bounce off edges smoothly
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            });

            // Draw Connections (Mesh)
            ctx.lineWidth = 1;
            for (let i = 0; i < particleCount; i++) {
                for (let j = i + 1; j < particleCount; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance) {
                        const alpha = (1 - dist / maxDistance) * 0.2;
                        ctx.strokeStyle = `rgba(179, 27, 27, ${alpha})`;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            // Draw Particles
            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r * p.z, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });
            
            // Add some "laser" accent lines scanning slowly through the background
            const laserY = (Math.sin(t * 0.5) * 0.5 + 0.5) * canvas.height;
            const laserGrad = ctx.createLinearGradient(0, laserY - 50, 0, laserY + 50);
            laserGrad.addColorStop(0, 'rgba(179, 27, 27, 0)');
            laserGrad.addColorStop(0.5, 'rgba(179, 27, 27, 0.05)');
            laserGrad.addColorStop(1, 'rgba(179, 27, 27, 0)');
            
            ctx.fillStyle = laserGrad;
            ctx.fillRect(0, laserY - 50, canvas.width, 100);

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
