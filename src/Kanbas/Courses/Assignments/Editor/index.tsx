import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import { assignments } from "../../../Database";
import "./index.css";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = assignments.find(
        (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div>
            {/* <!-- Buttons--> */}
            <div className="d-flex justify-content-end">
                {/* <!-- Check icon for Published--> */}
                <div className="published-icon"><FaCheckCircle /></div>
                <div className="published-text"> Published</div>
                <div>
                    <button type="button" className="btn btn-outline-secondary btn-sm btn-spacing btn-color">
                    <FaEllipsisV />
                </button>
                </div>
            </div>

            <hr />

            {/* <!-- Assignment Edit --> */}
            <h5>Assignment Name</h5>

            {/* Assignment Title */}
            <div className="input-group mb-3">
                <input placeholder={assignment?.title}
                    className="form-control mb-2" />
            </div>

            {/* Assignment Description */}
            <div className="input-group mb-3">
                <textarea className="form-control mb-2"
                    placeholder={assignment?.description}
                    rows={4}></textarea>
            </div>
            
            {/* <!-- Text fields--> */}
            <div className="container">
                {/* <!-- Points--> */}
                <div className="row g-4">
                    <div className="col-2 points-text">
                        <h5>Points</h5>
                    </div>
                    <div className="col-6 text-start">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder={assignment?.points} />
                        </div>
                    </div>

                </div>

                {/* <!--Assignment Group--> */}
                <div className="row g-4">
                    <div className="col-2 points-text">
                        <h5>Assignment Group</h5>
                    </div>
                    <div className="col-6 text-start">
                        <div className="input-group mb-3">
                            <select className="form-control">
                                <option selected>ASSIGNMENTS</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* <!--Display Grade--> */}
                <div className="row g-4">
                    <div className="col-2 text-end text-padding">
                        <h5>Display Grade as</h5>
                    </div>
                    <div className="col-6 text-start">
                        <div className="input-group mb-3">
                            <select className="form-control dropdown-toggle">
                                <option selected>Percentage</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* <!--Check box for do not count--> */}
                <div className="row g-4">
                    <div className="col-2 text-end text-padding">
                    </div>

                    <div className="col-6 text-start">
                        <div className="input-group mb-3">
                            <input className="form-check-input" type="checkbox" id="checkbox" />
                            <label className="form-check-label chkbox-label" htmlFor="checkbox">Do not count this
                                assignment towards the final grade</label>
                        </div>
                    </div>
                </div>

                {/* <!-- Assign--> */}
                <div className="row g-4">
                    <div className="col-2 text-end text-padding">
                        <h5>Assign</h5>
                    </div>
                    <div className="col-6 text-start">
                        <div className="input-group mb-3">
                            {/* <!--Card with input field for due, available from and until--> */}
                            <div className="card">
                                <div className="card-body">

                                    <div className="form-group">
                                        <label htmlFor="assignTo" className="form-label bold-text">Assign to</label>
                                        <input type="text" className="form-control assign-placeholder"
                                            id="assignTo" placeholder="Everyone" />
                                    </div>

                                    <div className="form-group available-padding">
                                        <label htmlFor="dueDate" className="form-label bold-text">Due</label>
                                        <input type="text" className="form-control" id="dueDate"
                                            placeholder={assignment?.due} />
                                    </div>

                                    <div className="row available-padding">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="availableDate"
                                                    className="form-label bold-text">Available from</label>
                                                <input type="text" className="form-control" id="availableDate"
                                                    placeholder={assignment?.available} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="untilDate"
                                                    className="form-label bold-text">Until</label>
                                                <input type="text" className="form-control" id="untilDate"
                                                    placeholder=" "  />
                                            </div>
                                        </div>
                                    </div>

                                    <button className="btn btn-outline-secondary add-button w-100">
                                        <FaPlus className="fa-sm plus-icon" /> Add</button>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>

            <hr />

            {/* Save and Cancel Button */}
            <div className="d-flex">
                <div className="flex-fill justify-content-start">
                    {/* <!-- Check box for notify users--> */}
                    <input className="form-check-input" type="checkbox" id="checkbox" />
                    <label className="form-check-label chkbox-label" htmlFor="checkbox">Notify the users that this content has changed</label>
                </div>

                <div className="d-flex justify-content-end">
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                        className="btn btn-outline-secondary btn-sm btn-spacing btn-color">
                        Cancel
                    </Link>
                    <button type="button" className="btn btn-danger btn-sm btn-spacing"
                            onClick={handleSave}>
                        Save</button>
                </div>

            </div>

            <br />

        </div>
    );
}

export default AssignmentEditor;