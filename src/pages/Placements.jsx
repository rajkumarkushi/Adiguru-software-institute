function Placements() {
  const placementSupport = [
    "Resume Building and ATS Optimization",
    "Mock Technical and HR Interviews",
    "LinkedIn Profile and Personal Branding",
    "Real-Time Interview Question Banks",
    "Weekly Hiring Readiness Assessments",
    "Referral Support with Partner Companies",
  ];

  return (
    <section className="py-5 placements-page">
      <div className="container">
        <div className="page-hero text-center mb-5 placements-hero-panel">
          <span className="page-badge">Career Services</span>
          <h1 className="fw-bold mt-3">Placement Assistance Program</h1>
          <p className="text-muted mx-auto page-hero-description">
            Our placement team supports you from classroom learning to interview success with
            structured preparation and personalized guidance.
          </p>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <div className="placement-stat-card">
              <h3>5000+</h3>
              <p className="mb-0">Learners Trained</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="placement-stat-card">
              <h3>100+</h3>
              <p className="mb-0">Partner Recruiters</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="placement-stat-card">
              <h3>Weekly</h3>
              <p className="mb-0">Interview Practice Sessions</p>
            </div>
          </div>
        </div>

        <div className="row g-3">
          {placementSupport.map((item) => (
            <div className="col-md-6" key={item}>
              <div className="placement-item">
                <span>✓</span>
                <p className="mb-0">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Placements;