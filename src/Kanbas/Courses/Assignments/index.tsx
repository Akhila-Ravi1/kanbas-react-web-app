import React from "react";
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

    // const assignmentList = assignments.filter(
    //     (assignment) => assignment.course === courseId);

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
                        className="btn btn-danger btn-sm btn-spacing"
                        onClick={() => dispatch(setEditMode(false))}>
                        <FaPlus className="chk-icon-spacing" style={{ fontSize: '0.8em' }} />Assignment
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
                                        <MdDelete className="ms-2" data-toggle="modal" data-target="#deleteAssignModal" />
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
        </>
    );
}

export default Assignments;