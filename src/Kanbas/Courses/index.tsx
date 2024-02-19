import { courses } from "../../Kanbas/Database";
import { Navigate, Link, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import './index.css';
import { FaBars, FaGlasses } from "react-icons/fa";
import Grades from "./Grades";

function Courses() {
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