import ScrollReveal from "../components/ScrollReveal";
import CountUp from "../components/CountUp";

const stats = [
  { stat: "5000", suffix: "+", label: "Students Trained" },
  { stat: "25",   suffix: "+", label: "Expert Mentors"   },
  { stat: "100",  suffix: "+", label: "Hiring Partners"  },
  { stat: "95",   suffix: "%", label: "Placement Rate"   },
];

function About() {
  return (
    <div style={{ background: "var(--bg)" }}>

      {/* PAGE HERO */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero text-center">
            <span className="page-badge">About Adi Guru</span>
            <h1>Building Careers Through Quality IT Training</h1>
            <p className="page-hero-description mx-auto">
              Adi Guru Software Training Institute is committed to helping students, freshers,
              and professionals gain practical technology skills for long-term career growth.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-section">
        <div className="container">
          <ScrollReveal>
            <div className="about-story mb-5">
              <h4 className="mb-3">🏫 Who We Are</h4>
              <p>
                Adi Guru is a professional training institute based in Sangareddy, Telangana.
                We provide classroom and online learning programs in software development,
                cloud, cybersecurity, digital technologies, and interview preparation.
              </p>
              <p className="mt-3">
                Our approach is simple: teach concepts deeply, practice continuously, and train
                every learner to become confident in real interview and workplace scenarios.
                We believe every student deserves the tools to build a fulfilling tech career.
              </p>
            </div>
          </ScrollReveal>

          <div className="row g-4">
            <ScrollReveal className="col-md-4" delay={0}>
              <div className="about-card h-100">
                <div className="info-card-icon" style={{ marginBottom: "16px" }}>🎯</div>
                <h5>Our Mission</h5>
                <p>
                  To deliver high-quality, accessible IT education that creates employable,
                  project-ready professionals who are confident from day one on the job.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="col-md-4" delay={140}>
              <div className="about-card h-100">
                <div className="info-card-icon" style={{ marginBottom: "16px" }}>🌟</div>
                <h5>Our Vision</h5>
                <p>
                  To be one of the most trusted training institutes in Telangana for practical
                  software and digital career education, empowering 50,000+ learners by 2030.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="col-md-4" delay={280}>
              <div className="about-card h-100">
                <div className="info-card-icon" style={{ marginBottom: "16px" }}>💡</div>
                <h5>Why Adi Guru</h5>
                <p>
                  Experienced mentors, structured programs, live project experience, and
                  dedicated placement support — all under one roof in Sangareddy.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        className="py-section"
        style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--section-border)" }}
      >
        <div className="container">
          <ScrollReveal className="text-center mb-5">
            <span className="section-badge">Our Impact</span>
            <h2 className="section-title mt-2">
              Numbers That <span>Speak</span>
            </h2>
          </ScrollReveal>
          <div className="row g-4">
            {stats.map(({ stat, suffix, label }, i) => (
              <ScrollReveal className="col-6 col-md-3" key={label} delay={i * 100}>
                <div className="stat-card">
                  <h3><CountUp target={stat} suffix={suffix} /></h3>
                  <p>{label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;