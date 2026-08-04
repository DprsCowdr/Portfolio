import { BadgeCheck, BriefcaseBusiness, Code2, GraduationCap, Store, Wrench } from 'lucide-react';
import reshell1 from '../assets/reshell1.jpg';
import reshell2 from '../assets/reshell2.jpg';
import reshell3 from '../assets/reshell3.jpg';
import reshell4 from '../assets/reshell4.jpg';
import packet0 from '../assets/packet0.jpeg';
import packet1 from '../assets/packet1.jpeg';
import packet2 from '../assets/packet2.jpg';
import packet3 from '../assets/packet3.jpg';
import packet4 from '../assets/packet4.jpeg';
import perfect1 from '../assets/perfect1.png';
import perfect2 from '../assets/perfect2.png';
import perfectsmile from '../assets/perfectsmile.png';
import tech from '../assets/tech.png';

const journeySteps = [
  {
    title: 'ReShell',
    label: 'Business Foundation',
    date: '2022 - 2026',
    description: 'Built and operated an e-commerce business, managing 600+ sold items, customer support, and daily operations.',
    icon: Store,
    position: 'step-reshall',
    images: [reshell1, reshell2, reshell3, reshell4]
  },
  {
    title: 'BSIT',
    label: 'Education',
    date: '2022 - 2026',
    description: 'Bachelor of Science in Information Technology at Camarines Sur Polytechnic College.',
    icon: GraduationCap,
    position: 'step-degree'
  },
  {
    title: 'Perfect Smile',
    label: 'Capstone Project',
    date: '2025 - 2026',
    description: 'Built a full-stack clinic management system with role-based access, SMS alerts, and queue management.',
    icon: Code2,
    position: 'step-capstone',
    images: [perfect1, perfect2, perfectsmile]
  },
  {
    title: 'Packetworx',
    label: 'Technical Internship',
    date: '2026',
    description: 'Supported technical sales, IoT hardware, client requirements, UAT, UI/UX review, and QA testing.',
    icon: Wrench,
    position: 'step-packetworx',
    images: [packet0, packet1, packet2, packet3, packet4]
  },
  {
    title: 'Google IT Support',
    label: 'Professional Certificate',
    date: '2026',
    description: 'Completed the Google IT Support Professional Certificate to strengthen core IT support skills.',
    icon: BadgeCheck,
    position: 'step-certificate',
    images: [tech]
  },
  {
    title: 'Next Step',
    label: 'Open to Opportunities',
    date: 'Now',
    description: 'Ready to contribute in Technical Salesm, IT support, web development, Plz hire me :>> .',
    icon: BriefcaseBusiness,
    position: 'step-next'
  }
];

export const ExperienceSection = () => (
  <section id="experience" className="career-section">
    <div className="career-container">
      <div className="career-header">
        <p className="career-subtitle">Career Journey</p>
        <h2 className="career-title"><span className="text-glow">Built Step by Step</span></h2>
        <p className="career-intro">My Current path from operating a business to supporting real IT systems - now ready for the next opportunity.</p>
      </div>

      <div className="career-map-shell">
        <svg className="career-road" viewBox="0 0 1200 960" preserveAspectRatio="none" aria-hidden="true">
          <path className="career-road-base" d="M -100 600 C 100 600, 100 420, 300 420 C 500 420, 450 680, 650 680 C 850 680, 800 380, 1000 380 C 1150 380, 1150 420, 1300 420" />
          <path className="career-road-dash" d="M -100 600 C 100 600, 100 420, 300 420 C 500 420, 450 680, 650 680 C 850 680, 800 380, 1000 380 C 1150 380, 1150 420, 1300 420" />
        </svg>

        <ol className="career-steps">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li className={`career-step ${step.position}`} key={step.title}>
                <div className="career-step-line" aria-hidden="true" />
                <div className="career-step-pin"><Icon size={22} strokeWidth={1.7} /></div>
                <article className="career-step-card">
                  <p className="career-step-date">{step.date}</p>
                  <h3>{step.title}</h3>
                  <p className="career-step-label"><span>0{index + 1}</span>{step.label}</p>
                  <p className="career-step-description">{step.description}</p>
                  {step.images ? (
                    <div className="career-step-slideshow" aria-hidden="true">
                      {step.images.map((src, i) => (
                        <img
                          key={src}
                          src={src}
                          alt={`${step.title} preview ${i + 1}`}
                          className="career-step-slide"
                          style={{ animationDelay: `${i * 4}s` }}
                        />
                      ))}
                    </div>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  </section>
);
