import Hero from "../components/Hero";
import CourseCard from "../components/CourseCard";
import courses from "../data/Courses";

function Home() {
  return (
    <>
      <Hero />

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="info-card h-100">
                <h5>Career-Oriented Curriculum</h5>
                <p className="mb-0">
                  Structured modules designed with practical assignments, coding labs, and mock interviews.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-card h-100">
                <h5>Classroom + Online Flexibility</h5>
                <p className="mb-0">
                  Learn from our Sangareddy center or attend live online sessions with recorded support.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-card h-100">
                <h5>Placement Readiness Program</h5>
                <p className="mb-0">
                  Resume building, aptitude coaching, interview mentoring, and hiring referrals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">

        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            Popular Courses
          </h2>

          <div className="row">

            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}

          </div>

        </div>

      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Visit Our Training Center</h2>
            <p className="text-muted mb-0">
              3rd Floor, Opposite LIC Office, Bypass Road, Sangareddy, Telangana
            </p>
          </div>
          <div className="map-wrapper modern-map-card">
            <iframe
              title="Adi Guru Location"
              src="https://www.google.com/maps?q=Opposite+LIC+Office,+Bypass+Road,+Sangareddy,+Telangana&output=embed"
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
