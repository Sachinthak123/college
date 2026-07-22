import { Link, useParams } from "react-router-dom";
import {courseData} from "../data/courseData";
import BgBlackNav from "../components/BgBlackNav";
import {
  FaGraduationCap,
  FaClock,
  FaMoneyBillWave,
  FaCheckCircle,
  FaBriefcase,
  FaQuestionCircle,
} from "react-icons/fa";

const CourseDetails = () => {
  const { id } = useParams();

  const course = courseData.find((item) => item.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">
          Course Not Found
        </h1>
      </div>
    );
  }

  return (
   <>
   <BgBlackNav/>
    <div className="bg-slate-50 min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-950 via-blue-900 to-indigo-900 text-white">

        {/* Background Decoration */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32">

          <div className="max-w-4xl">

            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider uppercase bg-white/10 border border-white/20 rounded-full">
              {course.shortTitle} Program
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              {course.heroTitle}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-8 max-w-3xl">
              {course.heroDescription}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/Contact" className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-100 transition">
                Apply Now
              </Link>

              <Link to="/contact" className="px-6 py-3 border border-white/40 rounded-full hover:bg-white/10 transition">
                Download Brochure
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* ================= QUICK INFO ================= */}
      <section className="relative -mt-10 px-5 sm:px-8">

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <InfoCard
              icon={<FaGraduationCap />}
              title="Program"
              value={course.shortTitle}
            />

            <InfoCard
              icon={<FaClock />}
              title="Duration"
              value={course.duration}
            />

            <InfoCard
              icon={<FaMoneyBillWave />}
              title="Annual Fees"
              value={course.fees}
            />

            <InfoCard
              icon={<FaBriefcase />}
              title="Career Focus"
              value="Industry Ready"
            />

          </div>

        </div>

      </section>


      {/* ================= MAIN CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-2 space-y-10">

            {/* Syllabus */}
            <section className="bg-white rounded-2xl shadow-md p-6 sm:p-8">

              <SectionHeading
                icon={<FaGraduationCap />}
                title="Program Syllabus"
                description="Explore the key subjects and areas covered throughout the program."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

                {course.syllabus.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition"
                  >
                    <FaCheckCircle className="text-blue-600 mt-1 shrink-0" />

                    <span className="text-slate-700 text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </section>


            {/* Placements */}
            <section className="bg-white rounded-2xl shadow-md p-6 sm:p-8">

              <SectionHeading
                icon={<FaBriefcase />}
                title="Career & Placement Opportunities"
                description="Build skills that prepare you for a wide range of professional opportunities."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

                {course.placements.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-sm transition"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <FaBriefcase />
                    </div>

                    <span className="font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </section>


            {/* FAQs */}
            <section className="bg-white rounded-2xl shadow-md p-6 sm:p-8">

              <SectionHeading
                icon={<FaQuestionCircle />}
                title="Frequently Asked Questions"
                description="Find answers to common questions about this program."
              />

              <div className="mt-8 space-y-4">

                {course.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-xl p-5 cursor-pointer"
                  >

                    <summary className="flex items-center justify-between font-semibold text-slate-800 list-none">

                      <span className="pr-4">
                        {faq.question}
                      </span>

                      <span className="text-blue-600 text-xl group-open:rotate-45 transition">
                        +
                      </span>

                    </summary>

                    <p className="mt-4 text-slate-600 leading-7 text-sm sm:text-base">
                      {faq.answer}
                    </p>

                  </details>
                ))}

              </div>

            </section>

          </div>


          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="lg:sticky lg:top-24 h-fit">

            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">

              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Course Information
              </h2>

              <div className="space-y-5">

                <InfoRow
                  label="Course"
                  value={course.title}
                />

                <InfoRow
                  label="Duration"
                  value={course.duration}
                />

                <InfoRow
                  label="Semesters"
                  value={course.semesters}
                />

                <InfoRow
                  label="Fees"
                  value={course.fees}
                />

              </div>

              <div className="mt-8 p-5 bg-blue-50 rounded-xl">

                <h3 className="font-semibold text-blue-900 mb-2">
                  Ready to Start Your Journey?
                </h3>

                <p className="text-sm text-blue-700 leading-6 mb-4">
                  Take the next step toward building your academic and professional future.
                </p>

                <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                  Apply for Admission
                </button>

              </div>

            </div>

          </aside>

        </div>

      </main>

    </div>
   </>
  );
};


// ================= INFO CARD =================

const InfoCard = ({ icon, title, value }) => {
  return (
    <div className="flex items-center gap-4">

      <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-xl">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">
          {title}
        </p>

        <p className="font-semibold text-slate-800">
          {value}
        </p>
      </div>

    </div>
  );
};


// ================= SECTION HEADING =================

const SectionHeading = ({ icon, title, description }) => {
  return (
    <div>

      <div className="flex items-center gap-3">

        <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-lg">
          {icon}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          {title}
        </h2>

      </div>

      <p className="mt-3 text-slate-500 leading-7">
        {description}
      </p>

    </div>
  );
};


// ================= INFO ROW =================

const InfoRow = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-1 border-b border-slate-100 pb-4">

      <span className="text-sm text-slate-500">
        {label}
      </span>

      <span className="font-semibold text-slate-800">
        {value}
      </span>

    </div>
  );
};


export default CourseDetails;