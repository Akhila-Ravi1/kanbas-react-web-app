import React from "react";
import { FaCheckCircle, FaEllipsisV, FaCaretDown, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { BsPencilSquare } from "react-icons/bs";
import "./index.css";

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            {/* Buttons */}
            <div className="d-flex">
                <div className="flex-fill justify-content-start">
                    <input type="text" className="form-control w-25" placeholder="Search for Assignment" />
                </div>

                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-outline-secondary btn-sm btn-spacing btn-color">
                        <FaPlus className="chk-icon-spacing" style={{ fontSize: '0.8em' }} />Group
                    </button>
                    <button type="button" className="btn btn-danger btn-sm btn-spacing">
                        <FaPlus className="chk-icon-spacing" style={{ fontSize: '0.8em' }} />Assignment
                    </button>
                    <button type="button" className="btn btn-outline-secondary btn-sm btn-spacing btn-color">
                        <FaEllipsisV/>
                    </button>
                </div>
            </div>

            <hr />

            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="ellipsis-icon"/>
                        <FaEllipsisV className="me-2"/>
                        <FaCaretDown className="caret-down-icon"/>
                        <span className="txt-title">Assignments</span>
                        <span className="float-end">
                        <button type="button" className="btn btn-sm btn-outline-secondary btn-total icon-right-padding rounded">40% of Total</button>
                            <FaPlus className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                                    <li className="list-group-item">
                                        <FaEllipsisV className="ellipsis-icon"/>
                                        <FaEllipsisV className="me-2"/>
                                        <BsPencilSquare style={{ color:"green", marginLeft: 8}}/>
                                        <Link className="txt-title link-style"
                                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                                        <span className="float-end">
                                            <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                                        <div className="txt-subtitle">
                                                    <span>{assignment.description}</span>
                                                    <br />
                                                    <span><span className="txt-bold">Due</span> {assignment.due}  |  {assignment.points}</span>
                                        </div>
                                    </li>))}
                            </ul>
                </li>
            </ul>
        </>
    );
}

export default Assignments;