import { useState, useRef } from 'react';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, AlertCircle, Linkedin, Facebook, Instagram, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const result = await emailjs.send(
                'service_e55o53k',
                'template_85l5rlt',
                {
                    name: formData.name,
                    email: formData.email,
                    title: formData.subject,
                    time: new Date().toLocaleString(),
                    message: formData.message,
                },
                {
                    publicKey: 'NIT9_nzxLoujhlMUx',
                }
            );

            if (result.status === 200) {
                setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon :)' });
                setFormData({ name: '', email: '', subject: '', message: '' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' });
            console.error('EmailJS Error:', error.text || error);
        } finally {
            setIsLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: <Mail size={20} />,
            label: "Email",
            value: "doncaritos@gmail.com",
            href: "mailto:doncaritos@gmail.com"
        },
        {
            icon: <Phone size={20} />,
            label: "Phone",
            value: "+63 915 054 0702",
            href: "tel:+639150540702"
        },
        {
            icon: <MapPin size={20} />,
            label: "Location",
            value: "Camarines Sur, Philippines",
            href: null
        }
    ];

    const socialLinks = [
        {
            icon: <Linkedin size={22} />,
            href: "https://www.linkedin.com/in/brandon-caritos-824023372/",
            label: "LinkedIn"
        },
        {
            icon: <Facebook size={22} />,
            href: "https://facebook.com/doncrts",
            label: "Facebook"
        },
        {
            icon: <Instagram size={22} />,
            href: "https://instagram.com/doncrtss",
            label: "Instagram"
        },
        {
            icon: <Github size={22} />,
            href: "https://github.com/DprsCowdr",
            label: "GitHub"
        }
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-header">
                    <p className="contact-subtitle">Get In Touch</p>
                    <h2 className="contact-title">
                        <span className="text-glow">Contact Me!</span>
                    </h2>
                    <p className="contact-intro">
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </p>
                </div>

                <div className="contact-content">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h3 className="contact-info-title">Let's talk about everything!</h3>
                        <p className="contact-info-text">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                        
                        <div className="contact-info-list">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="contact-info-item">
                                    <div className="contact-info-icon">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="contact-info-label">{item.label}</p>
                                        {item.href ? (
                                            <a href={item.href} className="contact-info-value">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="contact-info-value">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="social-links">
                            <p className="social-links-label">Follow Me</p>
                            <div className="social-links-list">
                                {socialLinks.map((social, index) => (
                                    <a 
                                        key={index} 
                                        href={social.href} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="form-input"
                                placeholder="Subject Inquiry"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="form-input form-textarea"
                                placeholder="Feel Free To Message Me..."
                            />
                        </div>

                        {status.message && (
                            <div className={`form-status ${status.type}`}>
                                {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                                <span>{status.message}</span>
                            </div>
                        )}

                        <button 
                            type="submit" 
                            className="form-submit"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 size={18} className="spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send size={18} />
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
