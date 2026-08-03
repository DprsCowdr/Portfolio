import { BadgeCheck, BriefcaseBusiness, Code2, GraduationCap, Store, Wrench } from 'lucide-react';

const journeySteps = [
  {
    title: 'ReShell',
    label: 'Business Foundation',
    date: '2022 - 2026',
    description: 'Built and operated an e-commerce business, managing 600+ sold items, customer support, and daily operations.',
    icon: Store,
    position: 'step-reshall'
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
    position: 'step-capstone'
  },
  {
    title: 'Packetworx',
    label: 'Technical Internship',
    date: '2026',
    description: 'Supported technical sales, IoT hardware, client requirements, UAT, UI/UX review, and QA testing.',
    icon: Wrench,
    position: 'step-packetworx'
  },
  {
    title: 'Google IT Support',
    label: 'Professional Certificate',
    date: '2026',
    description: 'Completed the Google IT Support Professional Certificate to strengthen core IT support skills.',
    icon: BadgeCheck,
    position: 'step-certificate'
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
        <p className="career-intro">A practical path from operating a business to supporting real IT systems - now ready for the next opportunity.</p>
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
                  <p className="career-step-label"><span>0{index + 1}</span> <span className="label-text">{step.label}</span></p>
                  <p className="career-step-description">{step.description}</p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  </section>
);
