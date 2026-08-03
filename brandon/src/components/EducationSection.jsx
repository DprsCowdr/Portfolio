const credentials = [
  { title: 'Google IT Support Professional Certificate', detail: 'Completed May 2026' },
  { title: 'Google Advanced Data Analytics Professional Certificate', detail: 'In progress' }
];

export const EducationSection = () => (
  <section id="education" className="education-section">
    <div className="education-container">
      <div className="education-header">
        <p className="education-subtitle">Learning Record</p>
        <h2 className="education-title"><span className="text-glow">Education & Certifications</span></h2>
      </div>
      <div className="education-grid">
        <article className="education-card education-degree-card">
          <p className="education-card-label">Degree</p>
          <h3>Bachelor of Science in Information Technology</h3>
          <p>Camarines Sur Polytechnic College</p>
          <span>Aug 2022 - July 2026</span>
        </article>
        <div className="credential-list">
          {credentials.map((credential, index) => (
            <article className="credential-item" key={credential.title}>
              <span className="credential-number">0{index + 1}</span>
              <div>
                <h3>{credential.title}</h3>
                <p>{credential.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);
