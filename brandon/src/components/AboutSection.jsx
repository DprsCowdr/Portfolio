export const AboutSection = () => {
    const technicalSkills = [
        "E-commerce operations & platform management",
        "Pre-sales demos & proof-of-concept builds",
        "Web development (React, Node.js, PHP)",
        "Integration scripting and connectors",
        "Testing, QA and UAT support"
    ];

    const professionalSkills = [
        "Client-facing communication & demos",
        "Requirements capture and scoping",
        "Cross-team coordination (sales, engineering, ops)",
        "Prioritization and pragmatic decision-making",
        "Technical documentation and handoffs"
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
                        <p className="about-focus-lead">I make sales wins easier. I build quick demos, stitch simple integrations, test customer setups, and write clear tech notes so proposals actually ship. Hands-on with troubleshooting and light scripting — learning React, Node, PHP, and MySQL — I keep things practical and demo-ready.</p>

                        <div className="about-focus-list skills-grid">
                            <div className="skills-column">
                                <h4 className="skills-column-title">Technical skills</h4>
                                {technicalSkills.map((s, i) => (
                                    <div key={s} className="about-focus-item">
                                        <span aria-hidden="true">{i + 1}.</span>
                                        <span className="focus-text">{s}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="skills-column">
                                <h4 className="skills-column-title">Delivery & professional skills</h4>
                                {professionalSkills.map((s, i) => (
                                    <div key={s} className="about-focus-item">
                                        <span aria-hidden="true">{i + 1}.</span>
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
