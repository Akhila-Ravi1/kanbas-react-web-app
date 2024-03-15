import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCaretDown, FaPlus, FaEdit } from "react-icons/fa";
import { useParams } from "react-router";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";


function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();

    // const [moduleList, setModuleList] = useState<any[]>(modules);
    // const [module, setModule] = useState({
    //     _id: "",
    //     name: "",
    //     description: "",
    //     course: courseId,
    // });

    // const addModule = (module: any) => {
    //     const newModule = {
    //         ...module,
    //         _id: new Date().getTime().toString()
    //     };
    //     const newModuleList = [newModule, ...moduleList];
    //     setModuleList(newModuleList);
    // };

    // const deleteModule = (moduleId: string) => {
    //     const newModuleList = moduleList.filter(
    //         (module) => module._id !== moduleId);
    //     setModuleList(newModuleList);
    // };

    // const updateModule = () => {
    //     const newModuleList = moduleList.map((m) => {
    //         if (m._id === module._id) {
    //             return module;
    //         } else {
    //             return m;
    //         }
    //     });
    //     setModuleList(newModuleList);
    // };


    // const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(moduleList[0]);

    return (
        <>
            {/* Buttons */}
            <div className="d-flex justify-content-end">

                {/* Collapse Button */}
                <button type="button" className="btn btn-outline-secondary btn-sm btn-spacing">Collapse All</button>

                {/* View Progress Button */}
                <button type="button" className="btn btn-outline-secondary btn-sm btn-spacing">View Progress</button>

                {/* Publish All Button */}
                <button type="button" className="btn btn-outline-secondary btn-sm btn-spacing">
                    <FaCheckCircle className="text-success chk-icon-spacing" />Publish All<FaCaretDown className="caret-icon-spacing" aria-hidden="true" />
                </button>

                {/* Module button */}
                <a className="btn btn-danger btn-sm btn-spacing" data-bs-toggle="collapse"
                    href="#newModuleCollapse"
                    role="button" aria-expanded="false"
                    aria-controls="newModuleCollapse">
                    <FaPlus className="chk-icon-spacing" style={{ fontSize: "0.8em" }} aria-hidden="true" />Module
                </a>

                {/* More options button */}
                <button type="button" className="btn btn-outline-secondary btn-sm btn-spacing"><FaEllipsisV /></button>
            </div>

            {/* New Module Collapse */}
            <div className="collapse" id="newModuleCollapse">
                <div className="card card-body">
                    <input value={module.name} placeholder="Enter a module name"
                        className="form-control"
                        onChange={(e) =>
                            dispatch(setModule({ ...module, name: e.target.value }))
                        }
                    />
                    <textarea value={module.description} placeholder="Enter a module description"
                        className="form-control"
                        onChange={(e) =>
                            dispatch(setModule({ ...module, description: e.target.value }))
                        }
                    />
                    <button
                        onClick={() => dispatch(addModule({ ...module, course: courseId }))}
                        className="btn btn-success d-grid gap-2 col-3 mx-auto mt-4"
                        data-bs-toggle="collapse"
                        data-bs-target="#newModuleCollapse">
                        Add Module</button>
                </div>
            </div>

            {/* Edit Module Collapse */}
            <div className="collapse" id="editModuleCollapse">
                <div className="card card-body">
                    <input value={module.name} placeholder="Enter a module name"
                        className="form-control"
                        onChange={(e) =>
                            dispatch(setModule({ ...module, name: e.target.value }))
                        }
                    />
                    <textarea value={module.description} placeholder="Enter a module description"
                        className="form-control"
                        onChange={(e) =>
                            dispatch(setModule({ ...module, description: e.target.value }))
                        }
                    />
                    <button
                        onClick={() => dispatch(updateModule(module))}
                        className="btn btn-success d-grid gap-2 col-3 mx-auto mt-4"
                        data-bs-toggle="collapse"
                        data-bs-target="#editModuleCollapse">
                        Edit Module</button>
                </div>
            </div>

            <hr />

            {/* Module List */}
            <ul className="list-group wd-modules">
                {moduleList.filter((module) => module.course === courseId)
                    .map((module, index) => (
                        // Individual Module
                        <li
                            key={index} className="list-group-item"
                            onClick={() => dispatch(setModule(module))}>

                            {/* Module title bar */}
                            <div>
                                <FaEllipsisV className="me-2" />
                                {module.name}
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <MdDelete className="ms-2"
                                        onClick={() => dispatch(deleteModule(module._id))} />
                                    <FaEdit className="ms-2" data-bs-toggle="collapse"
                                        href="#editModuleCollapse"
                                        role="button" aria-expanded="false"
                                        aria-controls="editModuleCollapse"
                                        onClick={(event) => { setModule(module); }} />

                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </div>

                            {/* Lesson List for each module */}
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson: any) => (
                                        <li className="list-group-item">

                                            {/* Ellipsis with lesson name and progress buttons */}
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

