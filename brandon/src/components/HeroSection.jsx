import resumePDF from '../assets/Brandon_Resume.pdf';
import { useState } from 'react';

export const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id="hero" className="hero-section">
                <div className="hero-container">
                    <div className="hero-profile-sheet" aria-label="Professional profile highlights">
                        <p className="profile-sheet-label">Professional Profile</p>
                        <div className="profile-sheet-monogram" aria-hidden="true">BC</div>
                        <p className="profile-sheet-summary">Technical support, systems testing, and web development.</p>
                        <div className="profile-sheet-rule" />
                        <dl className="profile-sheet-stats">
                            <div>
                                <dt>Experience</dt>
                                <dd>Technical & Sales Intern</dd>
                            </div>
                            <div>
                                <dt>Focus</dt>
                                <dd>Support, QA, and Development</dd>
                            </div>
                            <div>
                                <dt>Based in</dt>
                                <dd>Camarines Sur, Philippines</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="hero-text">
                        <p className="hero-greeting">Hello I am</p>
                        <h1 className="hero-title">
                            <span className="text-glow">Brandon Caritos</span>
                        </h1>
                        <p className="hero-role">IT Professional / Developer</p>
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
