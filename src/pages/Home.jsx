import Hero from "../components/Hero";
import CourseCard from "../components/CourseCard";
import ScrollReveal from "../components/ScrollReveal";
import courses from "../data/Courses";

function Home() {
  return (
    <>
      <Hero />

      {/* WHY CHOOSE US */}
      <section className="info-cards-section">
        <div className="container">
          <ScrollReveal className="text-center mb-5">
            <span className="section-badge">Why Adi Guru</span>
            <h2 className="section-title mt-2">
              Everything You Need to <span>Succeed</span>
            </h2>
            <p className="section-subtitle">
              From structured curriculum to placement support — we've got you covered at every step.
            </p>
          </ScrollReveal>

          <div className="row g-4">
            <ScrollReveal className="col-md-4" delay={0}>
              <div className="info-card h-100">
                <div className="info-card-icon">🎯</div>
                <h5>Career-Oriented Curriculum</h5>
                <p>
                  Structured modules with practical assignments, coding labs, and
                  mock interviews designed to make you job-ready fast.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="col-md-4" delay={120}>
              <div className="info-card h-100">
                <div className="info-card-icon">🖥️</div>
                <h5>Classroom + Online Flexibility</h5>
                <p>
                  Learn at our Sangareddy center or join live online sessions with
                  recorded backups so you never miss a class.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="col-md-4" delay={240}>
              <div className="info-card h-100">
                <div className="info-card-icon">🚀</div>
                <h5>Placement Readiness Program</h5>
                <p>
                  Resume building, aptitude coaching, interview mentoring, and
                  direct hiring referrals through our 100+ partner network.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* POPULAR COURSES */}
      <section className="py-section">
        <div className="container">
          <ScrollReveal className="text-center mb-5">
            <span className="section-badge">Our Programs</span>
            <h2 className="section-title mt-2">
              Popular <span>Courses</span>
            </h2>
            <p className="section-subtitle">
              Industry-aligned programs crafted to get you hired faster.
            </p>
          </ScrollReveal>
          <div className="row g-4">
            {courses.map((course, i) => (
              <ScrollReveal
                key={course.id}
                className="col-md-6 col-lg-4"
                delay={i * 80}
              >
                <CourseCard course={course} noCol />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section
        className="py-section"
        style={{
          background: "var(--bg-secondary)",
          borderTop: "1px solid var(--section-border)",
        }}
      >
        <div className="container">
          <ScrollReveal className="text-center mb-5">
            <span className="section-badge">Find Us</span>
            <h2 className="section-title mt-2">
              Visit Our <span>Training Center</span>
            </h2>
            <p className="section-subtitle">
              3rd Floor, Opposite LIC Office, Bypass Road, Sangareddy, Telangana
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="modern-map-card">
              <iframe
                title="Adi Guru Location"
                src="https://www.google.com/maps?q=Opposite+LIC+Office,+Bypass+Road,+Sangareddy,+Telangana&output=embed"
                width="100%"
                height="400"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default Home;
