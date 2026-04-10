import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from '../assets/Gayathri_1.jpg';
import img2 from '../assets/Gayathri_2.jpg';
import img3 from '../assets/Gayathri_3.jpg';
import img4 from '../assets/Gayathri_4.jpg';
import img5 from '../assets/Gayathri_5.jpg';
import imgGroup from '../assets/Gayathri_group.jpg';
import opcLogo from '../assets/OPC LOGO (1).jpg';

const images = [opcLogo, imgGroup, img1, img2, img3, img4, img5];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '40px auto', overflow: 'hidden', borderRadius: '16px', boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}>
      <div 
        style={{ 
          display: 'flex', 
          transition: 'transform 0.5s ease-in-out', 
          transform: `translateX(-${currentIndex * 100}%)` 
        }}
      >
        {images.map((src, idx) => (
          <img 
            key={idx} 
            src={src} 
            alt={`Lab Activity ${idx + 1}`} 
            style={{ width: '100%', height: '400px', objectFit: 'contain', background: 'rgba(0,0,0,0.02)', flexShrink: 0 }} 
          />
        ))}
      </div>

      <button 
        onClick={prevSlide}
        style={{
          position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.7)', border: 'none', borderRadius: '50%', padding: '8px', cursor: 'pointer', transition: 'background 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.9)'}
        onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.7)'}
      >
        <ChevronLeft size={24} color="#0f172a" />
      </button>

      <button 
        onClick={nextSlide}
        style={{
          position: 'absolute', top: '50%', right: '16px', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.7)', border: 'none', borderRadius: '50%', padding: '8px', cursor: 'pointer', transition: 'background 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.9)'}
        onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.7)'}
      >
        <ChevronRight size={24} color="#0f172a" />
      </button>

      {/* Indicators */}
      <div style={{ position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
        {images.map((_, idx) => (
          <button 
            key={idx} 
            onClick={() => setCurrentIndex(idx)}
            style={{
              width: '10px', height: '10px', borderRadius: '50%', border: 'none', cursor: 'pointer',
              background: currentIndex === idx ? '#fff' : 'rgba(255,255,255,0.5)',
              transition: 'background 0.3s'
            }}
          />
        ))}
      </div>
    </div>
  );
}
