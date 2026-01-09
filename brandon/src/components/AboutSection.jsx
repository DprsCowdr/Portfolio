import { Check } from 'lucide-react';

export const AboutSection = () => {
    const aboutItems = [
       
        {
            title: "Technical Skills",
            description: (
                <>
                    Has Knowledgeable Skills in <span className="skill-highlight">HTML</span>, <span className="skill-highlight">CSS</span>, <span className="skill-highlight">PHP</span>, <span className="skill-highlight">C++</span>. Minor experience with <span className="skill-highlight">Arduino</span> and <span className="skill-highlight">networking basics</span>. Always eager to learn new frameworks and tools.
                </>
            )
        }, {
            title: "Soft Skills",
            description: "Excellent communication, teamwork, and time management skills. Adaptable and quick learner."
        },
        
        {
            title: "Characteristics",
            description: "Strong Willingness to Contribute and Solve complex problems into manageable solutions."
        },
       ,
        {
            title: "Hobbies",
            description: "Business,Thrifting ,  watching Documentaries, and staying updated with industry trends."
        }, {
            title: "Education",
            description: "Currently pursuing a degree in Information Technology, at Camarines Sur Polytechnic Colleges."
        },
        {
            title: "Goals",
            description: "To become a Successful IT Professional and contribute to meaningful projects that make a positive impact."
        }
    ];

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-grid">
                    {/* Left Side - Title & Description */}
                    <div className="about-intro-block">
                        <p className="about-subtitle">Get to know me</p>
                        <h2 className="about-main-title">
                            <span className="text-glow">About Me</span>
                        </h2>
                        <p className="about-intro-text">
               Hi! I’m Brandon Caritos, an aspiring IT intern with a strong eagerness to learn and explore new technologies. I am motivated to step outside my comfort zone to continuously develop my skills and grow both personally and professionally.
                        </p>
                    </div>

                    {/* Right Side - Features Grid */}
                    <div className="about-features">
                        {aboutItems.map((item, index) => (
                            <div key={index} className="about-feature-item">
                                <div className="about-feature-header">
                                    <Check className="about-check-icon" size={20} />
                                    <h3 className="about-feature-title">{item.title}</h3>
                                </div>
                                <p className="about-feature-text">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
