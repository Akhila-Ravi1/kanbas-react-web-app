import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { FaEllipsisV, FaEdit } from "react-icons/fa";

function Dashboard() {
    return (
        <div className="p-4">
            <h1>Dashboard</h1>              <hr />
            <h2>Published Courses (6)</h2> <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
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