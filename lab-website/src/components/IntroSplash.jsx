import React, { useEffect, useRef, useState } from 'react';
import './IntroSplash.css';
import logoSrc from '../assets/logo_cropped.png';

// Exact horizontal slices for each letter column (percentages 0 to 1)
const COLUMNS = [
    { start: 0.0, end: 0.084 },    // N, NEAR
    { start: 0.084, end: 0.286 },  // M, MID-
    { start: 0.286, end: 0.458 },  // I, INFRA
    { start: 0.458, end: 0.617 },  // R, RED
    { start: 0.617, end: 0.788 },  // P, PHOTONICS
    { start: 0.788, end: 0.935 },  // L, LABORATORY
    { start: 0.935, end: 1.0 },    // Laser Burst
];

export default function IntroSplash({ onComplete }) {
    const canvasRef = useRef(null);
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: true });
        
        const img = new Image();
        img.src = logoSrc;

        let rafId;
        let cancelled = false;
        let startTime = null;

        img.onload = () => {
            if (cancelled) return;
            
            // Calculate canvas resolution based on the contained CSS width (90vw, max 1200px)
            const boxWidth = Math.min(window.innerWidth * 0.9, 1200);
            const aspect = img.naturalHeight / img.naturalWidth;
            const boxHeight = boxWidth * aspect;
            
            // Device pixel ratio (DPR) handles Retina blurriness
            const dpr = window.devicePixelRatio || 1;
            canvas.width = boxWidth * dpr;
            canvas.height = boxHeight * dpr;
            
            // Scale and optimize canvas for high-res drawing
            ctx.scale(dpr, dpr);
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';

            const draw = (time) => {
                if (cancelled) return;
                if (!startTime) startTime = time;
                const elapsed = time - startTime; // in ms

                ctx.clearRect(0, 0, boxWidth, boxHeight);

                // 1. Draw the sweeping laser beam (draws from 150ms to 900ms, and stays visible)
                const lineStart = 150;
                const lineDuration = 750;
                let lineProgress = Math.max(0, Math.min(1, (elapsed - lineStart) / lineDuration));
                const lineEase = 1 - Math.pow(1 - lineProgress, 3); // easeOutCubic
                
                if (lineEase > 0) {
                    const currentX = boxWidth * lineEase;
                    const currentY = boxHeight * 0.6575; // Exact vertical position of the red laser line

                    ctx.save();
                    ctx.strokeStyle = '#ff3300';
                    ctx.lineWidth = 2.5;
                    ctx.shadowColor = '#ff3300';
                    ctx.shadowBlur = 8;
                    ctx.beginPath();
                    ctx.moveTo(0, currentY);
                    ctx.lineTo(currentX, currentY);
                    ctx.stroke();
                    ctx.restore();

                    // Draw the bright laser dot/burst at the tip during sweep
                    if (lineProgress > 0 && lineProgress < 1) {
                        ctx.save();
                        ctx.fillStyle = '#ffffff';
                        ctx.shadowColor = '#ff3300';
                        ctx.shadowBlur = 12;
                        ctx.beginPath();
                        ctx.arc(currentX, currentY, 4, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.restore();
                    }
                }

                // 2. Letters appearing sequentially (Slower Stagger + Longer Fade)
                const letterBaseStart = 800;
                const letterStagger = 150; // More delay between letters
                const letterFadeDuration = 450; // Butter smooth slow fade

                for (let i = 0; i < COLUMNS.length; i++) {
                    const colStart = letterBaseStart + i * letterStagger;
                    let progress = Math.max(0, Math.min(1, (elapsed - colStart) / letterFadeDuration));
                    
                    if (progress > 0) {
                        ctx.save();
                        // Non-linear alpha looks more organic and premium
                        ctx.globalAlpha = Math.pow(progress, 1.3);
                        
                        const col = COLUMNS[i];
                        const x = col.start * boxWidth;
                        const w = (col.end - col.start) * boxWidth;
                        
                        // Clip rendering to exactly this column's bounding box
                        ctx.beginPath();
                        ctx.rect(x, 0, w, boxHeight);
                        ctx.clip();
                        
                        // Draw full image, but it's clipped to the column and faded
                        ctx.drawImage(img, 0, 0, boxWidth, boxHeight);
                        ctx.restore();
                    }
                }

                // Phase 4: Sequence completes around 2150ms. Hold until 2700ms.
                if (elapsed >= 2700 && phase < 4) {
                    setPhase(4); // Start background fade and shrink
                }
                
                // Phase 5: Handover to navbar at 3500ms.
                if (elapsed >= 3500 && phase < 5) {
                    setPhase(5);
                    setTimeout(onComplete, 0);
                    return; 
                }

                rafId = requestAnimationFrame(draw);
            };

            rafId = requestAnimationFrame(draw);
        };

        return () => {
            cancelled = true;
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [onComplete, phase]);

    if (phase === 5) return null;

    return (
        <div className={`spl-overlay ${phase >= 4 ? 'spl-fade-out' : ''}`}>
            {/* The wrapper handles the positioning, scaling, and shrinking */}
            <div className={`spl-logo-box ${phase >= 4 ? 'spl-shrink' : ''}`}>
                <canvas ref={canvasRef} className="spl-canvas" />
            </div>
        </div>
    );
}
