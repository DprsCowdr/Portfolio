import profileImage from '../assets/profile.jpg';

export const HeroSection = () => {
    return (
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
                    <a href="#contact" className="hero-btn">Contact Me Plz</a>
                </div>
            </div>
            <div className="scroll-indicator">
                <span>Scroll</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
            </div>
        </section>
    );
};