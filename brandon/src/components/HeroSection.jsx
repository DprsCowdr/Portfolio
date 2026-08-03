import resumePDF from '../assets/Brandon_Resume.pdf';
import { useState } from 'react';

export const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id="hero" className="hero-section">
                <div className="hero-container">
                        <div className="hero-text">
                        {/* About summary integrated into the hero for a concise intro */}
                        <p className="hero-greeting">Hello, I'm Brandon</p>
                        <h1 className="hero-title">
                            <span className="text-glow">Brandon Caritos</span>
                        </h1>
                        <p className="hero-role">IT Professional / Developer</p>

                        <div className="hero-about-copy">
                          <p>
                            I’m an aspiring IT professional with hands-on experience in technical sales support, system testing, technical documentation, and web development. I enjoy turning real requirements into organized, dependable solutions.
                          </p>
                          <p style={{ marginTop: '0.75rem' }}>
                            My work combines the practical side of IT — supporting hardware, reviewing systems, and coordinating information — with a growing interest in building thoughtful web experiences. I bring the ownership of an e-commerce operator and the curiosity of a lifelong learner to every project.
                          </p>
                          <a href="#about" className="hero-learnmore">Get to know my skills</a>
                        </div>

                        <div className="hero-actions">
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
                <div className="resume-backdrop" role="dialog" aria-modal="true" aria-label="Resume preview">
                    <div className="resume-modal">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            aria-label="Close resume"
                            className="resume-close-btn"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div className="resume-modal-inner">
                            <div className="resume-modal-title">My Resume</div>
                            <div className="resume-frame-wrap">
                                <iframe
                                    src={resumePDF}
                                    className="resume-frame"
                                    title="Resume Preview"
                                ></iframe>
                            </div>

                            <div className="resume-actions">
                                <a href={resumePDF} download className="resume-download-btn">
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
