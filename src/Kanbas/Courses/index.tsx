import { courses } from "../../Kanbas/Database";
import { Navigate, Link, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import './index.css';
import { FaBars, FaBook, FaBullhorn, FaBullseye, FaChevronDown, FaCircleNotch, FaClock, FaCog, FaComments, FaDesktop, FaGlasses, FaHome, FaInbox, FaPlug, FaQuestionCircle, FaRegCalendarAlt, FaRegCircle, FaRegFileAlt, FaRegFileCode, FaRegFolder, FaRegStickyNote, FaRegUserCircle, FaRocket, FaShareSquare, FaTachometerAlt, FaUser } from "react-icons/fa";
import Grades from "./Grades";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Courses() {
    const links = [
        { label: "Home", icon: <span className="collapse-course-icons"><FaHome /></span> },
        { label: "Modules", icon: <span className="collapse-course-icons"><FaCircleNotch /></span> },
        { label: "Piazza", icon: <span className="collapse-course-icons"><FaPlug /></span> },
        { label: "Zoom", icon: <span className="collapse-course-icons"><FaPlug /></span> },
        { label: "Assignments", icon: <span className="collapse-course-icons"><FaRegFileCode /></span> },
        { label: "Quizzes", icon: <span className="collapse-course-icons"><FaRocket /></span> },
        { label: "Grades", icon: <span className="collapse-course-icons"><FaRegStickyNote /></span> },
        { label: "People", icon: <span className="collapse-course-icons"><FaUser /></span> },
        { label: "Panopto Video", icon: <span className="collapse-course-icons"><FaPlug /></span> },
        { label: "Discussions", icon: <span className="collapse-course-icons"><FaComments /></span> },
        { label: "Announcements", icon: <span className="collapse-course-icons"><FaBullhorn /></span> },

        { label: "Pages", icon: <span className="collapse-course-icons"><FaRegFileAlt /></span> },
        { label: "Files", icon: <span className="collapse-course-icons"><FaRegFolder /></span> },
        { label: "Rubrics", icon: <span className="collapse-course-icons"><FaRegFileAlt /></span> },
        { label: "Outcomes", icon: <span className="collapse-course-icons"><FaBullseye /></span> },
        { label: "Collaborations", icon: <span className="collapse-course-icons"><FaRegCircle /></span> },
        { label: "Syllabus", icon: <span className="collapse-course-icons"><FaRegFileAlt /></span> },
        { label: "Progress Reports", icon: <span className="collapse-course-icons"><FaPlug /></span> },
        { label: "Settings", icon: <span className="collapse-course-icons"><FaCog /></span> }
    ];

    const kanbas_links = [
        { label: "Account", icon: <span className="fs-2" style={{ marginRight: "1rem" }}><FaRegUserCircle /></span> },
        { label: "Dashboard", icon: <span className="fs-2" style={{ marginRight: "1rem" }}><FaTachometerAlt /></span> },
        { label: "Courses", icon: <span className="fs-2" style={{ marginRight: "1rem" }}><FaBook /></span> },
        { label: "Calendar", icon: <span className="fs-2" style={{ marginRight: "1rem" }}><FaRegCalendarAlt /></span> },
        { label: "Inbox", icon: <span className="fs-2" style={{ marginRight: "1rem" }}><FaInbox /></span> },
        { label: "History", icon: <span className="fs-2" style={{ marginRight: "1rem" }}><FaClock /></span> },
        { label: "Studio", icon: <span className="fs-2" style={{ marginRight: "1rem" }}><FaDesktop /></span> },
        { label: "Commons", icon: <span className="fs-2" style={{ marginRight: "1rem" }}><FaShareSquare /></span> },
        { label: "Help", icon: <span className="fs-2" style={{ marginRight: "1rem" }}><FaQuestionCircle /></span> }

    ];

    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
    const pathSegments = pathname.split('/').filter((segment) => segment.trim() !== '');

    // Get the last segment of the URL
    const lastSegment = pathSegments[pathSegments.length - 1];
    return (
        <div>
            {/* Breadcrumb */}
            <div className="d-none d-md-block">
                <nav className="custom-breadcrumb" aria-label="breadcrumb">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <ol className="breadcrumb">
                            <button type="button" className="btn navbar-red-color navbar-padding">
                                <FaBars />
                            </button>
                            <li className="breadcrumb-item navbar-red-color" aria-current="page">
                                <Link to={`/Kanbas/Courses/${courseId}/Home`}>{course?.number}</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">{lastSegment}</li>
                        </ol>
                        <ol>
                            {/* Button for Student view */}
                            <button type="button" className="btn btn-outline-secondary btn-sm btn-spacing btn-for-student-view">
                                <FaGlasses /> Student View
                            </button>
                        </ol>
                    </div>
                </nav>
            </div>

            {/* Nav bar for small screens */}
            {/* <div> */}
            {/* Nav bar */}
            <div className="d-md-none bg-dark text-white py-4">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    {/* <!-- Hamburger icon--> */}
                    <button type="button" className="btn text-white" data-bs-toggle="collapse" data-bs-target="#kanbas-nav-collapse">
                        <FaBars />
                    </button>

                    {/* <!-- Header--> */}
                    <span>{course?.number}</span>

                    {/* <!-- Chevron icon--> */}
                    <button type="button" className="btn text-white" data-bs-toggle="collapse" data-bs-target="#course-nav-collapse">
                        <FaChevronDown />
                    </button>
                </div>
            </div>

            {/* <!-- Kanbas Navigation Collapse--> */}
            <div className="collapse" id="kanbas-nav-collapse">
                <div className="card card-body">
                    <ul className="wd-navbar">
                        {kanbas_links.map((link, index) => (
                            <li key={index} className={link.label && pathname.includes(link.label) ? "wd-active" : ""}>
                                {link.label ? (
                                    <Link to={`/Kanbas/${link.label}`}>{link.icon} {link.label}</Link>
                                ) : (
                                    // External link for NEU logo
                                    <>{link.icon}</>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* <!-- Course Navigation Collapse--> */}
            <div className="collapse" id="course-nav-collapse">
                <div className="card card-body">

                    <ul className="wd-course-navbar">
                        {links.map((link, index) => (
                            <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                                <Link to={link.label}>{link.icon}{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* </div> */}

            <hr />

            {/* Course Nav and Content */}
            <div className="d-flex">

                {/* Course sem and Course Nav */}
                <div className="d-none d-md-block">

                    {/* Course Sem info */}
                    <div className="custom-semester">
                        {course?.semester}
                    </div>


                    {/* Course Navigation */}
                    <CourseNavigation />
                </div>

                {/* Course content */}
                <div className="flex-fill me-2" style={{ marginLeft: "2rem", top: "5rem" }}>
                    <div
                        // className="overflow-y-scroll position-fixed bottom-0 end-0"
                        style={{ left: "320px", top: "5rem" }} >
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Piazza" element={<h1>Piazza</h1>} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                            <Route path="Grades" element={<Grades />} />
                        </Routes>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Courses;