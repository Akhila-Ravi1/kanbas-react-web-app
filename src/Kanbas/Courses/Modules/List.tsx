import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCaretDown, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    
    return (
        <>
            {/* Buttons */}
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-outline-secondary btn-sm btn-spacing">Collapse All</button>
                <button type="button" className="btn btn-outline-secondary btn-sm btn-spacing">View Progress</button>
                <button type="button" className="btn btn-outline-secondary btn-sm btn-spacing">
                    <FaCheckCircle className="text-success chk-icon-spacing" />Publish All<FaCaretDown className="caret-icon-spacing" aria-hidden="true" />
                </button>
                <button type="button" className="btn btn-danger btn-sm btn-spacing">
                    <FaPlus className="chk-icon-spacing" style={{fontSize: "0.8em"}} aria-hidden="true" />Module</button>
                <button type="button" className="btn btn-outline-secondary btn-sm btn-spacing"><FaEllipsisV /></button>
            </div>
            <hr />

            <ul className="list-group wd-modules">
                {modulesList.map((module) => (
                    <li
                        className="list-group-item"
                        onClick={() => setSelectedModule(module)}>
                        
                        <div>
                            <FaEllipsisV className="me-2" />
                            {module.name}
                            <span className="float-end">
                                <FaCheckCircle className="text-success" />
                                <FaPlusCircle className="ms-2" />
                                <FaEllipsisV className="ms-2" />
                            </span>
                        </div>

                        {selectedModule._id === module._id && (
                            <ul className="list-group">
                                {module.lessons?.map((lesson) => (
                                    <li className="list-group-item">
                                        <FaEllipsisV className="me-2" />
                                        {lesson.name}
                                        <span className="float-end">
                                            <FaCheckCircle className="text-success" />
                                            <FaEllipsisV className="ms-2" />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ModuleList;

