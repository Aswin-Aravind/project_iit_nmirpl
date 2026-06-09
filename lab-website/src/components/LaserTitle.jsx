import { useState, useEffect, useRef } from 'react';
import './LaserTitle.css';

const WRITE_MS = 60;    // ms between each letter (slightly faster)
const HOLD_MS = 5000;   // ms full title stays visible after writing
const FADE_MS = 800;    // ms for fade-out

export default function LaserTitle({ text, className = '' }) {
    const chars = text.split('');
    const total = chars.length;

    const [revealed, setRevealed] = useState(0);
    const [phase, setPhase] = useState('writing'); // 'writing', 'holding', 'fading'
    const [dotX, setDotX] = useState(0);
    const [dotY, setDotY] = useState(0);

    const containerRef = useRef(null);
    const charRefs = useRef([]);
    const runIdRef = useRef(0);

    useEffect(() => {
        runIdRef.current += 1;
        const myRunId = runIdRef.current;
        const isAlive = () => runIdRef.current === myRunId;

        const run = async () => {
            while (isAlive()) {
                // --- PHASE: WRITING ---
                setPhase('writing');
                setRevealed(0);
                await new Promise(r => setTimeout(r, 100));

                for (let i = 0; i < total; i++) {
                    if (!isAlive()) return;

                    // Position laser dot on the current char
                    const el = charRefs.current[i];
                    if (el && containerRef.current) {
                        const containerRect = containerRef.current.getBoundingClientRect();
                        const charRect = el.getBoundingClientRect();
                        setDotX(charRect.left - containerRect.left + charRect.width / 2);
                        setDotY(charRect.top - containerRect.top + charRect.height / 2);
                    }

                    setRevealed(i + 1);
                    await new Promise(r => setTimeout(r, WRITE_MS));
                }

                if (!isAlive()) return;

                // --- PHASE: HOLDING ---
                setPhase('holding');
                await new Promise(r => setTimeout(r, HOLD_MS));

                if (!isAlive()) return;

                // --- PHASE: FADING ---
                setPhase('fading');
                await new Promise(r => setTimeout(r, FADE_MS));
            }
        };

        run();
        return () => { runIdRef.current += 1; };
    }, [total]);

    const showDot = phase === 'writing' && revealed < total;

    return (
        <span ref={containerRef} className={`laser-title-container ${className} phase-${phase}`}>
            {showDot && (
                <span className="laser-dot" style={{ left: dotX, top: dotY }} />
            )}
            {chars.map((ch, i) => (
                <span
                    key={i}
                    ref={el => (charRefs.current[i] = el)}
                    className={`laser-char ${i < revealed ? 'visible' : 'hidden'} ${ch === '\n' ? 'line-break' : ''}`}
                >
                    {ch === '\n' ? <br /> : ch}
                </span>
            ))}
        </span>
    );
}
