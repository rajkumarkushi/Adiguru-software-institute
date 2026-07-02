import ScrollReveal from "../components/ScrollReveal";
import CountUp from "../components/CountUp";
import { useNavigate } from "react-router-dom";

const placementSupport = [
  { icon: "📄", text: "Resume Building and ATS Optimization" },
  { icon: "🎙️", text: "Mock Technical and HR Interviews" },
  { icon: "💼", text: "LinkedIn Profile and Personal Branding" },
  { icon: "📚", text: "Real-Time Interview Question Banks" },
  { icon: "📊", text: "Weekly Hiring Readiness Assessments" },
  { icon: "🤝", text: "Referral Support with Partner Companies" },
];

const stats = [
  { stat: "5000", suffix: "+", label: "Learners Trained"   },
  { stat: "100",  suffix: "+", label: "Partner Recruiters" },
  { stat: "95",   suffix: "%", label: "Placement Rate"     },
];

function Placements() {
  const navigate = useNavigate();

  return (
    <div className="placements-page">

      {/* PAGE HERO */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero text-center">
            <span className="page-badge">Career Services</span>
            <h1>Placement Assistance Program</h1>
            <p className="page-hero-description mx-auto">
              Our placement team supports you from classroom learning to interview success
              with structured preparation and personalized guidance every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-section">
        <div className="container">
          <div className="row g-4 mb-5">
            {stats.map(({ stat, suffix, label }, i) => (
              <ScrollReveal className="col-md-4" key={label} delay={i * 120}>
                <div className="placement-stat-card">
                  <h3><CountUp target={stat} suffix={suffix} /></h3>
                  <p>{label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mb-4">
            <span className="section-badge">What We Offer</span>
            <h2 className="section-title mt-2">
              Placement <span>Support Services</span>
            </h2>
          </ScrollReveal>

          <div className="row g-3">
            {placementSupport.map((item, i) => (
              <ScrollReveal className="col-md-6" key={item.text} delay={i * 80}>
                <div className="placement-item">
                  <span>{item.icon}</span>
                  <p>{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-section text-center"
        style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--section-border)" }}
      >
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title mb-3">
              Ready to <span>Get Hired?</span>
            </h2>
            <p className="section-subtitle mb-4">
              Join thousands of students who launched their careers with Adi Guru.
            </p>
            <button
              className="hero-primary-btn"
              id="placement-cta-btn"
              style={{ display: "inline-flex", margin: "0 auto" }}
              onClick={() => navigate("/contact")}
            >
              Start Your Journey →
            </button>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}

export default Placements;