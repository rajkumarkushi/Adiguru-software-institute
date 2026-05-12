import CourseCard from "../components/CourseCard";
import courses from "../data/Courses";

function Courses() {
  return (
    <section className="py-5 courses-page">
      <div className="container">
        <div className="page-hero text-center mb-5 courses-hero-panel">
          <span className="page-badge">Professional Programs</span>
          <h1 className="fw-bold mt-3">Industry-Focused Courses at Adi Guru</h1>
          <p className="text-muted mx-auto page-hero-description">
            Career-ready programs with live projects, practical assignments, and mentor support
            for students and working professionals.
          </p>
        </div>

        <div className="row g-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="row g-4 mt-2">
          <div className="col-md-4">
            <div className="value-card h-100">
              <h5>Hands-On Labs</h5>
              <p className="mb-0">
                Every course includes real-time coding tasks and mini projects for practical confidence.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="value-card h-100">
              <h5>Mentor Sessions</h5>
              <p className="mb-0">
                Weekly doubt-clearing and personalized guidance from experienced trainers.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="value-card h-100">
              <h5>Interview Readiness</h5>
              <p className="mb-0">
                Resume reviews, mock interviews, and hiring preparation integrated with the curriculum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
