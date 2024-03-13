import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { FaEllipsisV, FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

function Dashboard() {
    const [dbCourses, setDbCourses] = useState(courses);
    const [course, setCourse] = useState({
        _id: "RS106", name: "Python Programming", number: "CS7130",
        startDate: "2023-09-10", endDate: "2023-12-15", semester: "202410_1 Fall 2023",
        image: "brown.png"
    });

    const addNewCourse = () => {
        const newCourse = {
            ...course,
            _id: new Date().getTime().toString()
        };
        setDbCourses([...dbCourses, { ...course, ...newCourse }]);
    };

    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <hr />

            <div className="d-flex justify-content-between">
                <div><h2>Published Courses (6)</h2></div>
                {/* New Course */}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <a className="btn btn-light" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <FaPlus className="chk-icon-spacing" style={{ fontSize: "0.8em" }} aria-hidden="true" /> New Course
                    </a>
                </div>
            </div>

            {/* New Course Collapse*/}
            <div className="collapse" id="collapseExample">
                <div className="card card-body">

                    <input value={course.name} className="form-control"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <input value={course.number} className="form-control"
                        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                    <input value={course.startDate} className="form-control" type="date"
                        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                    <input value={course.endDate} className="form-control" type="date"
                        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

                    <button onClick={addNewCourse} className="btn btn-success" data-bs-toggle="collapse">
                        Add Course
                    </button>
                </div>
            </div>

            <hr />

            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {dbCourses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            <div className="card">
                                {/* Image */}
                                <img src={`/images/${course.image}`} className="card-img-top"
                                    style={{ height: 150 }} alt="" />
                                {/* Ellipsis icon */}
                                <FaEllipsisV style={{ position: "absolute", right: 10, top: 10, color: "#f0f0f0" }} />

                                {/* Content */}
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        {course.number} {course.name} </Link>
                                    <p className="card-text">{course.semester}</p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`}><FaEdit style={{ color: "gray" }} /></Link>
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