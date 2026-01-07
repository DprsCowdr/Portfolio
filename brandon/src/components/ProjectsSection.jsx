import { ExternalLink, Github } from 'lucide-react';
import perfectSmileImg from '../assets/perfectsmile.png';
import aquaflowImg from '../assets/aquaflow.png';
import pabibopassImg from '../assets/pabibopass.png';

export const ProjectsSection = () => {
    const projects = [
        {
            title: "Perfect Smile Dental Clinic Management System",
            role: "Programmer | Capstone Project",
            date: "Feb. 2024",
            description: "A web-based clinic management system for handling appointments, patient records, and services. Features include appointment booking, queue management, automated SMS/email notifications, and an interactive 3D dental chart with role-based access control.",
            image: perfectSmileImg,
            techStack: ["PHP", "CodeIgniter 4", "MySQL", "Tailwind", "JavaScript"],
            liveLink: "https://perfectsmile.clinic",
            githubLink: "https://github.com/DprsCowdr/Capstone_PerfectSmile"
        },
        {
            title: "Aquaflow – Water Delivery Management System",
            role: "Programmer",
            date: "Feb. 2024",
            description: "A water delivery platform with order management, inventory control, and real-time delivery tracking. Built with live GPS tracking, turn-by-turn navigation using Mapbox APIs, role-based access control, and RESTful APIs.",
            image: aquaflowImg,
            techStack: ["PHP", "CodeIgniter 4", "MySQL", "JavaScript", "Mapbox GL JS", "Bootstrap"],
            liveLink: "#",
            githubLink: "https://github.com/DprsCowdr/Aquaflow"
        },
        {
            title: "PabiboPass – Chrome Password Manager Extension",
            role: "Programmer",
            date: "Nov. 2023",
            description: "A secure Chrome extension for storing, generating, and autofilling credentials with master password protection. Features intelligent autofill, login detection for major platforms, and one-click credential injection.",
            image: pabibopassImg,
            techStack: ["JavaScript", "Chrome Extension APIs", "HTML", "CSS"],
            liveLink: "#",
            githubLink: "https://github.com/DprsCowdr/PabiboPass"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <div className="projects-header">
                    <p className="projects-subtitle">My Work</p>
                    <h2 className="projects-title">
                        <span className="text-glow">Featured Projects</span>
                    </h2>
                    <p className="projects-intro">
                        Here are some of the projects I've worked on. Each project helped me grow as a developer and learn new technologies.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image-wrapper">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="project-image"
                                />
                                <div className="project-overlay">
                                    <a href={project.liveLink} className="project-link" title="Live Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.githubLink} className="project-link" title="Source Code">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-meta">
                                    <span className="project-role">{project.role}</span>
                                    <span className="project-date">{project.date}</span>
                                </div>
                                <h3 className="project-name">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech-stack">
                                    {project.techStack.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
