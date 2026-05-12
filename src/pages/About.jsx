function About() {
  return (
    <section className="py-5 about-page">
      <div className="container">
        <div className="page-hero text-center mb-5">
          <span className="page-badge">About Adi Guru</span>
          <h1 className="fw-bold mt-3">Building Careers Through Quality IT Training</h1>
          <p className="text-muted mx-auto page-hero-description">
            Adi Guru Software Training Institute is committed to helping students, freshers,
            and professionals gain practical technology skills for long-term career growth.
          </p>
        </div>

        <div className="about-story mb-4">
          <h4 className="fw-bold mb-3">Who We Are</h4>
          <p>
            Adi Guru is a professional training institute based in Sangareddy, Telangana.
            We provide classroom and online learning programs in software development,
            cloud, cybersecurity, digital technologies, and interview preparation.
          </p>
          <p className="mb-0">
            Our approach is simple: teach concepts deeply, practice continuously, and train
            every learner to become confident in real interview and workplace scenarios.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="about-card h-100">
              <h5>Our Mission</h5>
              <p className="mb-0">
                To deliver high-quality, accessible IT education that creates employable,
                project-ready professionals.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-card h-100">
              <h5>Our Vision</h5>
              <p className="mb-0">
                To be one of the most trusted training institutes in Telangana for practical
                software and digital career education.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-card h-100">
              <h5>Why Adi Guru</h5>
              <p className="mb-0">
                Experienced mentors, structured programs, live project experience, and
                dedicated placement support under one roof.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;