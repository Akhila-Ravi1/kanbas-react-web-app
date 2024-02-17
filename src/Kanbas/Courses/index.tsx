import { courses } from "../../Kanbas/Database";
import { Navigate, Link, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import './index.css';
import { FaBars, FaGlasses } from "react-icons/fa";

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
            <div>
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

            {/* Course semester on top of course nav */}
            <div className="custom-semester">
                {course?.semester}
            </div>

            {/* Course Navigation */}
            <CourseNavigation />

            {/* Title */}
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{ left: "320px", top: "5rem" }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<h1>Assignments</h1>} />
                        <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Courses;