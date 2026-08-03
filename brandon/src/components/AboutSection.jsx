export const AboutSection = () => {
    const technicalSkills = [
        "E-commerce & sales ops",
        "Pre-sales demos & PoCs",
        "Web development",
        "Testing & QA",
        "Integration & automation"
    ];

    const softSkills = [
        "Client communication",
        "Requirements capture",
        "Cross-team coordination",
        "Prioritization",
        "Documentation & handoffs"
    ];

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-grid">
                    <div className="about-intro-block">
                        <h2 className="about-main-title">
                            <span className="text-glow">What I Bring</span>
                        </h2>
                    </div>

                    <div className="about-focus-card">
                        <h3 className="about-focus-title">Technical sales & delivery</h3>
                        <p className="about-focus-lead">I make sales wins easier. I build quick demos, stitch simple integrations, test customer setups, and write clear tech notes so proposals actually ship. Hands-on with troubleshooting and light scripting.</p>

                        <div className="about-focus-list skills-grid">
                            <div className="skills-column">
                                <h4 className="skills-column-title">Technical skills</h4>
                                {technicalSkills.map((s, i) => (
                                    <div key={s} className="about-focus-item">
                                        <span aria-hidden="true" className="focus-num">{String(i + 1).padStart(2,'0')}</span>
                                        <span className="focus-text">{s}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="skills-column">
                                <h4 className="skills-column-title">Soft skills</h4>
                                {softSkills.map((s, i) => (
                                    <div key={s} className="about-focus-item">
                                        <span aria-hidden="true" className="focus-num">{String(i + 1).padStart(2,'0')}</span>
                                        <span className="focus-text">{s}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
