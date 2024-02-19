import React from "react";
import { FaChartBar, FaRegArrowAltCircleRight, FaShareSquare, FaCheckCircle, FaRegCalendarAlt } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { GrAnnounce } from "react-icons/gr";
import { FaRegCircleDot, FaBan } from "react-icons/fa6";
import { IoMdInformationCircle } from "react-icons/io";
import "./index.css";
import { useParams } from "react-router-dom";
import { courses } from "../../Database";

function CourseStatus() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);

    return (
        <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: "250px", paddingLeft: "1.2em" }}>
            <h5>Course Status</h5>
            <div style={{ width: "100%" }}>
                <button type="button" className="btn btn-secondary btn-color btn-sm unpublish-spacing">
                    <FaBan style={{ paddingRight: "0.2em" }} />
                    Unpublish
                </button>
                <button type="button" className="btn btn-success btn-sm" disabled>
                    <FaCheckCircle style={{ paddingRight: "0.2em" }} />
                    Published
                </button>
            </div>

            {/* Button Sets */}
            <div className="btn-set">
                <button type="button" className="btn btn-secondary btn-color btn-sm btn-padding">
                    <FaShareSquare /> Import Existing Content
                </button><br />
                <button type="button" className="btn btn-secondary btn-color btn-sm btn-padding">
                    <FaRegArrowAltCircleRight /> Import from Commons
                </button><br />
                <button type="button" className="btn btn-secondary btn-color btn-sm btn-padding">
                    <FaRegCircleDot /> Choose Home Page
                </button><br />
                <button type="button" className="btn btn-secondary btn-color btn-sm btn-padding">
                    <FaChartBar /> View Course Stream
                </button><br />
                <button type="button" className="btn btn-secondary btn-color btn-sm btn-padding">
                    <GrAnnounce /> New Announcement
                </button><br />
                <button type="button" className="btn btn-secondary btn-color btn-sm btn-padding">
                    <FaChartBar /> New Analytics
                </button><br />
                <button type="button" className="btn btn-secondary btn-color btn-sm btn-padding">
                    <GoBell /> View Course Notification
                </button><br />
            </div>

            {/* To Do */}
            <div className="todo-set">
                <h5>To Do</h5>
                <hr style={{ marginBottom: "0.5em" }} />

                <div>
                    <IoMdInformationCircle className="navbar-red-color" aria-hidden="true" />
                    <span className="coming-up-text">Grade A1 - ENV + HTML</span>
                </div>
                <div className="coming-up-body-text">
                    <span>100 points</span>
                    <i className="fa fa-circle dot-icon" aria-hidden="true"></i><span>Sep 18 at 11:59pm</span>
                </div>
            </div>

            {/* Coming Up */}
            <div className="todo-set">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h5>Coming Up</h5>
                    <div>
                        <FaRegCalendarAlt />
                        <span className="calendar-text">View Calendar</span>
                    </div>
                </div>

                <hr style={{ marginBottom: '0.5em' }} />

                <div>
                    <FaRegCalendarAlt />
                    <span className="coming-up-text">Lecture</span>
                </div>
                <div className="coming-up-body-text">
                    <span>{course?.number}</span><br />
                    <span>Sep 11 at 11:45am</span>
                </div>

                <br />

                <div>
                    <FaRegCalendarAlt />
                    <span className="coming-up-text">CS5610 06 SP23 Lecture</span>
                </div>
                <div className="coming-up-body-text">
                    <span>CS4550.12631.202410</span><br />
                    <span>Sep 11 at 6pm</span>
                </div>

                <br />

                <div>
                    <FaRegCalendarAlt />
                    <span className="coming-up-text">CS5610 Web Dev Lecture</span>
                </div>
                <div className="coming-up-body-text">
                    <span>CS4550.12631.202410</span><br />
                    <span>Sep 11 at 7pm</span>
                </div>
            </div>
        </div>
    );
}

export default CourseStatus;
