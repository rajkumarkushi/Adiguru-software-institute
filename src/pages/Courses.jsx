import CourseCard from "../components/CourseCard";
import ScrollReveal from "../components/ScrollReveal";
import courses from "../data/Courses";

const valueProps = [
  { icon: "🧪", title: "Hands-On Labs",      desc: "Every course includes real-time coding tasks and mini projects for practical confidence and a portfolio to show employers." },
  { icon: "👨‍🏫", title: "Mentor Sessions",    desc: "Weekly doubt-clearing and personalized 1-on-1 guidance from experienced industry trainers with real project backgrounds." },
  { icon: "🎯", title: "Interview Readiness", desc: "Resume reviews, mock interviews, and end-to-end hiring preparation baked directly into every curriculum track." },
];

function Courses() {
  return (
    <div className="courses-page">

      {/* PAGE HERO */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero text-center">
            <span className="page-badge">Professional Programs</span>
            <h1>Industry-Focused Courses at Adi Guru</h1>
            <p className="page-hero-description mx-auto">
              Career-ready programs with live projects, practical assignments, and mentor support
              for students and working professionals.
            </p>
          </div>
        </div>
      </section>

      {/* COURSES GRID */}
      <section className="py-section">
        <div className="container">
          <div className="row g-4">
            {courses.map((course, i) => (
              <ScrollReveal
                key={course.id}
                className="col-md-6 col-lg-4"
                delay={i * 70}
              >
                <CourseCard course={course} noCol />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section
        className="py-section"
        style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--section-border)" }}
      >
        <div className="container">
          <ScrollReveal className="text-center mb-5">
            <span className="section-badge">Why Our Courses</span>
            <h2 className="section-title mt-2">
              Built for <span>Real Results</span>
            </h2>
          </ScrollReveal>
          <div className="row g-4">
            {valueProps.map(({ icon, title, desc }, i) => (
              <ScrollReveal className="col-md-4" key={title} delay={i * 140}>
                <div className="value-card h-100">
                  <div className="info-card-icon">{icon}</div>
                  <h5>{title}</h5>
                  <p>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Courses;
