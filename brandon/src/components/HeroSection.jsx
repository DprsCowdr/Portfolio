import profileImage from '../assets/profile.jpg';
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
                        <p className="hero-role">Aspiring Web Developer</p>
                        <div className="flex gap-4 mt-6">
                            <a href="#contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">Contact Me</a>
                            <button onClick={() => setIsModalOpen(true)} className="border border-border bg-background text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors">View Resume</button>
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
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-card rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] relative">
                        <div className="flex justify-between items-center p-4 border-b border-border">
                            <h2 className="text-xl font-semibold text-foreground">My Resume</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                        <div className="p-4">
                            <iframe
                                src="/resume.pdf"
                                className="w-full h-[70vh] border rounded"
                                title="Resume Preview"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};