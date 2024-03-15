import React from "react";
import { Link } from "react-router-dom";
import { FaEllipsisV, FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";

function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }: {
            courses: any[]; course: any; setCourse: (course: any) => void;
            addNewCourse: () => void; deleteCourse: (course: any) => void;
            updateCourse: () => void;
        }) {

    return (
        <div className="p-4">
            {/* Page title - Dashboard */}
            <h1>Dashboard</h1>
            <hr />

            {/* Subtitle - Published Courses + New course button */}
            <div className="d-flex justify-content-between">
                {/* Published Courses subtitle */}
                <div><h2>Published Courses (6)</h2></div>

                {/* New Course */}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <a className="btn btn-light" data-bs-toggle="collapse" href="#collapseExample"
                        role="button" aria-expanded="false"
                        aria-controls="collapseExample">
                        <FaPlus className="chk-icon-spacing" style={{ fontSize: "0.8em" }} aria-hidden="true" /> New Course
                    </a>
                </div>
            </div>

            {/* New Course Collapse*/}
            <div className="collapse" id="collapseExample">
                <div className="card card-body">

                    <input value={course.name} className="form-control" placeholder="Enter the course name"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <input value={course.number} className="form-control" placeholder="Enter the course number"
                        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                    <input value={course.startDate} className="form-control" type="date" placeholder="Choose/Enter a start date of the course"
                        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                    <input value={course.endDate} className="form-control" type="date" placeholder="Choose/Enter an end date of the course"
                        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

                    <button onClick={addNewCourse}
                        className="btn btn-success d-grid gap-2 col-3 mx-auto mt-4"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample">
                        Add Course
                    </button>

                </div>
            </div>

            {/* New Course Collapse*/}
            <div className="collapse" id="editCourseCollapse">
                <div className="card card-body">

                    <input value={course.name} className="form-control" placeholder="Enter the course name"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <input value={course.number} className="form-control" placeholder="Enter the course number"
                        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                    <input value={course.startDate} className="form-control" type="date" placeholder="Choose/Enter a start date of the course"
                        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                    <input value={course.endDate} className="form-control" type="date" placeholder="Choose/Enter an end date of the course"
                        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

                    <button onClick={updateCourse}
                        className="btn btn-success d-grid gap-2 col-3 mx-auto mt-4"
                        data-bs-toggle="collapse"
                        data-bs-target="#editCourseCollapse">
                        Update Course
                    </button>

                </div>
            </div>

            <hr />


            {/* Courses */}
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            {/* Course card */}
                            <div className="card">
                                {/* Image */}
                                <img src={`/images/${course.image}`} className="card-img-top"
                                    style={{ height: 150 }} alt="" />
                                {/* Ellipsis icon */}
                                <FaEllipsisV style={{ position: "absolute", right: 10, top: 10, color: "#f0f0f0" }} />

                                {/* Content */}
                                <div className="card-body">

                                    {/* Course Title */}
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        {course.number} {course.name} </Link>

                                    {/* Semester */}
                                    <p className="card-text">{course.semester}</p>

                                    {/* Course Edit and Delete Button */}
                                    <div className="d-flex justify-content-between">

                                        {/* Edit */}
                                        <FaEdit style={{ color: "gray", marginTop: 2 }}
                                            data-bs-toggle="collapse" href="#editCourseCollapse"
                                            role="button" aria-expanded="false"
                                            aria-controls="editCourseCollapse"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }} />

                                        {/* Delete */}
                                        <MdOutlineDelete style={{ color: "gray", fontSize: "larger" }} onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }} />
                                    </div>


                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;