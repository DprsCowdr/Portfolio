export const AboutSection = () => {
    const focusAreas = [
        "Technical sales support",
        "System testing & QA",
        "Web development",
        "Hardware troubleshooting",
        "Project documentation",
        "Networking basics"
    ];

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-grid">
                    <div className="about-intro-block">
                        <p className="about-subtitle">Get to know me</p>
                        <h2 className="about-main-title">
                            <span className="text-glow">About Me</span>
                        </h2>
                        <p className="about-intro-text">
                            I’m an aspiring IT professional with hands-on experience in technical sales support, system testing, technical documentation, and web development. I enjoy turning real requirements into organized, dependable solutions.
                        </p>
                        <p className="about-intro-text about-intro-text-secondary">
                            My work combines the practical side of IT - supporting hardware, reviewing systems, and coordinating information - with a growing interest in building thoughtful web experiences. I bring the ownership of an e-commerce operator and the curiosity of a lifelong learner to every project.
                        </p>
                    </div>

                    <div className="about-focus-card">
                        <p className="about-focus-label">What I Bring</p>
                        <h3 className="about-focus-title">Practical support with a builder's mindset.</h3>
                        <div className="about-focus-list">
                            {focusAreas.map((area, index) => (
                                <span key={area} className="about-focus-item">
                                    <span aria-hidden="true">0{index + 1}</span>{area}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
