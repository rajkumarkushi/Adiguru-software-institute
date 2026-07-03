import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaStar,
  FaUserGraduate,
  FaLaptopCode,
  FaRocket,
  FaCertificate,
} from "react-icons/fa";
import CountUp from "./CountUp";

const WORDS = ["Job-Ready Skills", "Real Experience", "Career Success", "Industry Expertise"];

const PARTICLES = [
  { w: 8, h: 8, top: "15%", left: "8%", delay: "0s", dur: "7s" },
  { w: 5, h: 5, top: "65%", left: "4%", delay: "1.2s", dur: "9s" },
  { w: 10, h: 10, top: "78%", left: "14%", delay: "2.5s", dur: "6s" },
  { w: 6, h: 6, top: "28%", right: "7%", delay: "0.8s", dur: "8.5s" },
  { w: 9, h: 9, top: "70%", right: "10%", delay: "1.8s", dur: "7.5s" },
  { w: 4, h: 4, top: "45%", right: "22%", delay: "3s", dur: "10s" },
  { w: 7, h: 7, top: "20%", left: "48%", delay: "0.5s", dur: "8s" },
  { w: 5, h: 5, top: "85%", right: "35%", delay: "2s", dur: "6.5s" },
];

function Hero() {
  const navigate = useNavigate();
  const campusImages = [
    "/images/office-1.png",
    "/images/office-2.png",
    "/images/office-3.png",
    "/images/office-4.png",
  ];

  // Typewriter
  const [wordIdx, setWordIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIdx];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setWordIdx(i => (i + 1) % WORDS.length);
      return;
    }
    const speed = deleting ? 45 : 90;
    const t = setTimeout(() => {
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx]);

  return (
    <section className="hero-section">

      {/* ANIMATED ORBS */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* FLOATING PARTICLES */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="hero-particle"
          style={{
            width: p.w, height: p.h,
            top: p.top, left: p.left, right: p.right,
            animationName: "floatOrb",
            animationDuration: p.dur,
            animationDelay: p.delay,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          }}
        />
      ))}

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-lg-6">

            <div className="hero-badge">
              <FaStar style={{ color: "#FFD700" }} />
              <span>#1 IT Training Institute in Sangareddy</span>
            </div>

            <h1 className="hero-heading">
              Launch Your Career
              <br />
              with{" "}
              <span className="typewriter-text">{text}</span>
              <span className="typewriter-cursor" />
            </h1>

            <p className="hero-description">
              Agi Guru Learning and Skill Development Institute equips students and
              professionals with in-demand technologies through hands-on
              projects, expert mentorship, and dedicated placement support.
            </p>

            <div className="hero-buttons">
              <button
                className="hero-primary-btn"
                id="hero-explore-btn"
                onClick={() => navigate("/courses")}
              >
                Explore Courses →
              </button>
              <button
                className="hero-secondary-btn"
                id="hero-counselor-btn"
                onClick={() => navigate("/contact")}
              >
                Talk to Counselor
              </button>
            </div>

            <div className="hero-highlights">
              <span><FaUserGraduate style={{ marginRight: 6 }} />Industry Experts</span>
              <span><FaLaptopCode style={{ marginRight: 6 }} />Project-Based</span>
              <span><FaRocket style={{ marginRight: 6 }} />Placement Support</span>
              <span><FaCertificate style={{ marginRight: 6 }} />Certification</span>
            </div>

            <div className="hero-stats">
              <div>
                <h4><CountUp target="5000" suffix="+" /></h4>
                <p>Students Trained</p>
              </div>
              <div>
                <h4><CountUp target="25" suffix="+" /></h4>
                <p>Expert Mentors</p>
              </div>
              <div>
                <h4><CountUp target="100" suffix="+" /></h4>
                <p>Hiring Partners</p>
              </div>
              <div>
                <h4><CountUp target="95" suffix="%" /></h4>
                <p>Placement Rate</p>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="hero-image-wrapper">
              <img
                src={campusImages[1]}
                alt="Adi Guru classroom"
                className="hero-image img-fluid"
              />
              <div className="students-badge">
                <h3>5000+</h3>
                <p>Students Trained</p>
              </div>
            </div>
          </div>

        </div>

        {/* GALLERY */}
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