import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import './Facilities.css';

// Import equipment images
import splicerImage from '../assets/Speciality Fiber Fusion Splicer.jpeg';
import cleaverImage from '../assets/Angle fibre cleaver.jpeg';
import recoaterImage from '../assets/Optical fibre Recoater.jpeg';
import afgImage from '../assets/Dual channel Arbitrary Function Generator.jpeg';
import powerImage from '../assets/Triple Channel DC Power.jpeg';
import oscImage from '../assets/2-channel Digital oscilloscope.jpeg';

export default function Facilities() {
  const facilities = [
    {
      title: "Speciality Fiber Fusion Splicer",
      make: "Fujikura",
      partNo: "FSM100P+",
      desc: "Speciality Fiber Fusion Splicer has been designed for splicing Silica-based optical fibres such as PANDA, LMA, SMF, Multi-mode, PCF etc., have variety of splice modes pre-installed and new splice modes can be edited as per requirement. This device comes with splice protector sleeve heater with temperature control.",
      image: splicerImage
    },
    {
      title: "Angle Fibre Cleaver",
      make: "Fujikura",
      partNo: "CT-111",
      desc: "Angle fibre cleaver has been designed for silica fibres for giving straight and angle cleave up to 15 degrees with an option to adjust cleave tension, blade speed etc., to achieve good quality cleaved end-face especially for PM- and PANDA fibres that have stress rods running parallel to core.",
      image: cleaverImage
    },
    {
      title: "Optical Fibre Recoater",
      make: "Fujikura",
      partNo: "FSR 116",
      desc: "Optical fibre recoater has been designed for recoating optical fibres using UV curable material. The optical fibre recoater can recoat the splicing point with UV curable material with varying length of recoating from 4 mm upto 40 mm. With adjustable UV-curing time, the recoated section can be matched with the polymer of optical fibre adjacent to splice point.",
      image: recoaterImage
    },
    {
      title: "Dual Channel Arbitrary Function Generator",
      make: "Tektronix",
      partNo: "AFG1022",
      desc: "Dual channel Arbitrary Function generator provides variety waveform generation such as sine, square, ramp etc, with frequency range of 1µHz to 25 MHz and supporting up to 40 nano-second pulse widths. Outputs peak to peak voltage from 1mV to 10 V.",
      image: afgImage
    },
    {
      title: "Triple Channel DC Power Supply",
      make: "Keithley",
      partNo: "2231A-30-3",
      desc: "Triple Channel DC Power Supply can output a total of 195 W of power with two channels output 30V and 3A each while third channel output is 5V and 3A. Each output of the is fully programmable and can be turned on and off independently from the other channels.",
      image: powerImage
    },
    {
      title: "2-Channel Digital Oscilloscope",
      make: "Rigol",
      partNo: "DS2102A",
      desc: "2-channel Digital oscilloscope can cover up to 100 MHz with 2G Sa/s real-time sampling. Vertical sensitivity of 500 µV/div to 10 V/div, suitable for analysing small signal artifacts. Horizontal sensitivity of 5 ns/div to 1000s/div with selectable input impedance of 1MΩ to 50 Ω.",
      image: oscImage
    }
  ];

  return (
    <div className="section animate-fade-in" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
          <Link 
            to="/research" 
            style={{ 
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', 
              width: '40px', height: '40px', 
              background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb', 
              borderRadius: '50%', textDecoration: 'none', 
              transition: 'all 0.2s' 
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(37, 99, 235, 0.2)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(37, 99, 235, 0.1)'; }}
          >
            <X size={24} />
          </Link>
          <h1 className="section-title" style={{ margin: 0 }}>Laboratory Facilities</h1>
        </div>
        <p className="lead-text" style={{ marginBottom: '40px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          NMIRPL is equipped with world-class infrastructure to support cutting-edge photonics research.
        </p>

        <div className="facilities-grid">
          {facilities.map((fac, idx) => (
            <div key={idx} className="glass-panel facility-card">
              <div className="facility-image-wrapper">
                <img src={fac.image} alt={fac.title} className="facility-image" />
              </div>
              <div className="facility-content">
                <div className="facility-badge-row">
                  <span className="facility-badge make">{fac.make}</span>
                  <span className="facility-badge part">PN: {fac.partNo}</span>
                </div>
                <h3 className="facility-title">{fac.title}</h3>
                <p className="facility-desc">{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
