import profileImage from '../assets/profile.jpg';
import resumePDF from '../assets/Brandon_Resume.pdf';
import { useState } from 'react';

export const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id="hero" className="hero-section">
                <div className="hero-container">
                    <div className="hero-image-container">
                        <img 
                            src={profileImage} 
                            alt="Brandon Caritos" 
                            className="hero-image"
                        />
                    </div>
                    <div className="hero-text">
                        <p className="hero-greeting">Hello I am</p>
                        <h1 className="hero-title">
                            <span className="text-glow">Brandon Caritos</span>
                        </h1>
                        <p className="hero-role">Aspiring IT Professional / Developer</p>
                        <div className="flex gap-4 mt-6 items-center">
                            <a href="#contact" className="hero-btn hero-btn-secondary" aria-label="Contact me">Contact Me</a>
                            <button onClick={() => setIsModalOpen(true)} className="hero-btn hero-btn-primary" aria-label="View resume">
                                View Resume
                            </button>
                        </div>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <span>Scroll</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M19 12l-7 7-7-7"/>
                    </svg>
                </div>
            </section>

            {/* Resume Modal */}
            {isModalOpen && (
                <div
                    style={{
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0,0,0,0.55)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10000,
                        padding: '1rem',
                    }}
                >
                    <div
                        style={{
                            background: 'var(--card, #0b1220)',
                            borderRadius: '12px',
                            boxShadow: '0 10px 30px rgba(2,6,23,0.6)',
                            width: 'min(1100px, 96%)',
                            maxHeight: '90vh',
                            overflow: 'hidden',
                            position: 'relative',
                        }}
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            aria-label="Close resume"
                            style={{
                                position: 'absolute',
                                right: '12px',
                                top: '12px',
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--foreground, #fff)',
                                cursor: 'pointer',
                                padding: '6px',
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--foreground, #fff)', marginBottom: '0.5rem' }}>My Resume</div>
                            <div style={{ flex: '1 1 auto' }}>
                                <iframe
                                    src={resumePDF}
                                    style={{ width: '100%', height: '70vh', border: '1px solid var(--border, rgba(255,255,255,0.06))', borderRadius: '6px', background: 'var(--card)'}}
                                    title="Resume Preview"
                                ></iframe>
                            </div>

                            <div style={{ marginTop: '0.75rem', textAlign: 'center' }}>
                                <a href={resumePDF} download style={{ display: 'inline-block', background: 'var(--primary, #1f6feb)', color: 'var(--primary-foreground, #fff)', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};