import React, { useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaCaretDown, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { BsPencilSquare } from "react-icons/bs";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { addAssignment, deleteAssignment, setAssignment, setEditMode } from "./reducer";
import { MdDelete } from "react-icons/md";


function Assignments() {
    const { courseId } = useParams();
    const assignmentList = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignments);
    const assignment = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignment);
    const isEditMode = useSelector((state: KanbasState) =>
        state.assignmentsReducer.isEditMode);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);


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
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="btn btn-danger btn-sm btn-spacing" style={{ paddingTop: 6 }}
                        onClick={() => dispatch(setEditMode(false))}>
                        <FaPlus className="chk-icon-spacing" style={{ fontSize: '0.8em' }} />
                        <span style={{ marginTop: 6 }}>Assignment</span>
                    </Link>
                    <button type="button" className="btn btn-outline-secondary btn-sm btn-spacing btn-color">
                        <FaEllipsisV />
                    </button>
                </div>
            </div>

            <hr />

            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    {/* Buttons before assignment title */}
                    <div>
                        <FaEllipsisV className="ellipsis-icon" />
                        <FaEllipsisV className="me-2" />
                        <FaCaretDown className="caret-down-icon" />
                        <span className="txt-title">Assignments</span>
                        <span className="float-end">
                            <button type="button" className="btn btn-sm btn-outline-secondary btn-total icon-right-padding rounded">40% of Total</button>
                            <FaPlus className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>

                    {/* Assignment list */}
                    <ul className="list-group">
                        {assignmentList.filter((assignment) => assignment.course === courseId)
                            .map((assignment, index) => (
                                <li key={index} className="list-group-item">

                                    {/* Ellipsis icons */}
                                    <FaEllipsisV className="ellipsis-icon" />
                                    <FaEllipsisV className="me-2" />

                                    {/* Edit icon */}
                                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                        onClick={(event) => { dispatch(setAssignment(assignment)); dispatch(setEditMode(true)) }}>
                                        <BsPencilSquare style={{ color: "green", marginLeft: 8 }} />
                                    </Link>

                                    {/* Assignment title */}
                                    <Link className="txt-title link-style"
                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                        onClick={(event) => { dispatch(setAssignment(assignment)); dispatch(setEditMode(true)) }}>{assignment.title}</Link>

                                    {/* Check icon, delete icon and More options ellipsis */}
                                    <span className="float-end">
                                        <FaCheckCircle className="text-success" />
                                        <MdDelete className="ms-2" onClick={() => { setShowModal(true); dispatch(setAssignment(assignment)) }} />
                                        <FaEllipsisV className="ms-2" />
                                    </span>

                                    <div className="txt-subtitle">
                                        <span>{assignment.description}</span>
                                        <br />
                                        <span><span className="txt-bold">Due</span> {assignment.due}  |  {assignment.points}</span>
                                    </div>
                                </li>))}
                    </ul>
                </li>
            </ul>

            {/* Modal for delete assignment confirmation */}
            {showModal && (
                <>
                    <div className="modal-backdrop fade show"></div>
                    <div className="modal fade show d-block" tabIndex={-1}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Delete Assignment</h5>
                                    <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                                </div>
                                <div className="modal-body">
                                    <p>Are you sure you want to delete this assignment?</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" onClick={() => setShowModal(false)}>No</button>
                                    <button type="button" className="btn btn-success" onClick={() => {
                                        dispatch(deleteAssignment(assignment._id));
                                        setShowModal(false);
                                    }}>Yes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Assignments;