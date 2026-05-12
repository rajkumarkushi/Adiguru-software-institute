import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const campusImages = [
    "/images/office-1.png",
    "/images/office-2.png",
    "/images/office-3.png",
    "/images/office-4.png",
  ];

  return (
    <section className="hero-section">

      <div className="container">

        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">

            <div className="hero-badge">
              ⭐ Best IT Training Institute
            </div>

            <h1 className="hero-heading">
              Practical IT Training for
              <span> Job-Ready Skills </span>
              and Real Careers
            </h1>

            <p className="hero-description">
              Adi Guru Software Training Institute helps students and working
              professionals master in-demand technologies through hands-on
              projects, expert mentorship, interview preparation, and dedicated
              placement guidance.
            </p>

            <div className="hero-buttons">

              <button className="hero-primary-btn" onClick={() => navigate("/courses")}>
                Explore Courses →
              </button>

              <button className="hero-secondary-btn">
                Talk to Counselor
              </button>

            </div>

            <div className="hero-highlights mt-4">
              <span>Industry Experts</span>
              <span>Project-Based Learning</span>
              <span>Placement Support</span>
            </div>

            <div className="hero-stats mt-4">
              <div>
                <h4>5000+</h4>
                <p>Students Trained</p>
              </div>
              <div>
                <h4>25+</h4>
                <p>Expert Mentors</p>
              </div>
              <div>
                <h4>100+</h4>
                <p>Hiring Partners</p>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="col-lg-6 mt-5 mt-lg-0">

            <div className="hero-image-wrapper">

              <img src={campusImages[1]} alt="Adi Guru classroom" className="hero-image img-fluid" />

              <div className="students-badge">
                <h3>5000+</h3>
                <p>Students Trained</p>
              </div>

            </div>

          </div>

        </div>

        <div className="hero-gallery mt-5">
          <div className="row g-3">
            {campusImages.map((image, index) => (
              <div key={image} className="col-6 col-lg-3">
                <img
                  src={image}
                  alt={`Adi Guru campus ${index + 1}`}
                  className="hero-gallery-image img-fluid"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;