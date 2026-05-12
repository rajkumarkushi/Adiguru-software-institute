import { useState } from "react";
import {
  FaCode,
  FaShieldAlt,
  FaBrain,
  FaBullhorn,
  FaJava,
  FaPython,
  FaChartLine,
  FaCloud,
  FaPalette,
} from "react-icons/fa";

function CourseCard({ course }) {
  const [showModal, setShowModal] = useState(false);
  const iconMap = {
    "Full Stack Development": <FaCode />,
    "Cyber Security": <FaShieldAlt />,
    "Artificial Intelligence": <FaBrain />,
    "Digital Marketing": <FaBullhorn />,
    Java: <FaJava />,
    Python: <FaPython />,
    "Data Science & Machine Learning": <FaChartLine />,
    "AWS & Cloud Computing": <FaCloud />,
    "UI/UX Design": <FaPalette />,
  };
  const courseIcon = iconMap[course.title] || <FaCode />;
  const curriculumItems = course.curriculum || [
    "Core Fundamentals",
    "Hands-On Practical Sessions",
    "Project Implementation",
    "Interview Preparation",
  ];

  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 course-card modern-course-card">
          <div className="card-body">
            <div className="course-card-header d-flex justify-content-between align-items-center">
              <span className="course-tag d-flex align-items-center gap-2">
                <span className="course-icon">{courseIcon}</span>
                Career Track
              </span>
              <span className="course-level">Beginner to Advanced</span>
            </div>
            <h4 className="fw-bold mt-3 mb-3">{course.title}</h4>
            <p className="mb-2 course-meta">
              <strong>Duration:</strong> {course.duration}
            </p>
            <p className="mb-4 course-meta">
              <strong>Mode:</strong> {course.mode}
            </p>
            <button className="btn btn-primary modern-btn" onClick={() => setShowModal(true)}>
              View Curriculum
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="custom-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="custom-modal-card" onClick={(event) => event.stopPropagation()}>
            <div className="custom-modal-header">
              <div>
                <span className="course-tag">Program Details</span>
                <h4 className="fw-bold mt-2 mb-1">{course.title}</h4>
                <p className="mb-0 text-muted">
                  {course.duration} • {course.mode}
                </p>
              </div>
              <button
                className="custom-modal-close"
                type="button"
                aria-label="Close"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>

            <p className="custom-modal-overview">{course.overview || "Professional job-oriented training program with practical sessions."}</p>

            <h6 className="fw-bold mb-2">Curriculum</h6>
            <ul className="custom-modal-list">
              {curriculumItems.map((item) => (
                <li key={`${course.id}-${item}`}>{item}</li>
              ))}
            </ul>

            <div className="custom-modal-footer-grid">
              <div>
                <p className="mb-1 text-muted small">Projects</p>
                <p className="mb-0 fw-semibold">{course.projects || "Live practical projects included"}</p>
              </div>
              <div>
                <p className="mb-1 text-muted small">Certification</p>
                <p className="mb-0 fw-semibold">{course.certification || "Course completion certificate provided"}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CourseCard;