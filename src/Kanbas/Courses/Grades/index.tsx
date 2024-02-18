import { FaCaretDown, FaChevronDown, FaFileExport, FaFileImport, FaFilter, FaSearch } from "react-icons/fa";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaGear } from "react-icons/fa6";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div>
      {/* <!-- Buttons--> */}
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-outline-secondary btn-sm btn-spacing btn-color">
          <FaFileImport style={{ margin: 4 }} />Import
        </button>

        <button type="button" className="btn btn-outline-secondary btn-sm btn-spacing btn-color">
          <FaFileExport style={{ margin: 4 }} />Export
          <FaCaretDown style={{ marginLeft: 4 }} />
        </button>

        <button type="button" className="btn btn-outline-secondary btn-sm btn-spacing btn-color">
          <FaGear style={{ margin: 2 }} />
        </button>
      </div>

      {/* <!-- Search icons--> */}
      <div className="row">

        {/* <!-- Search Students--> */}
        <div className="col-md-5">
          <div className="form-group">
            <label htmlFor="studentNames" className="form-label">
              <span style={{ fontWeight: "bold", }}>Student Names</span>
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text search-icon" style={{ height: "38px;" }} id="basic-addon1" >
                  <FaSearch />
                </span>
              </div>
              <input type="text" className="form-control" placeholder="Search Students" aria-label="Search" aria-describedby="basic-addon1" />
              <div className="input-group-append">
                <span className="input-group-text search-icon" style={{ height: "38px;" }} id="basic-addon1">
                  <FaChevronDown />
                </span>
              </div>
            </div>
          </div>
        </div>



        {/* <!-- Search Assignment--> */}
        <div className="col-md-5">
          <div className="form-group">
            <label htmlFor="assignmentName" className="form-label label-text">
              <span style={{ fontWeight: "bold", }}>Assignment Names</span>
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text search-icon" style={{ height: "38px;" }} id="basic-addon1">
                  <FaSearch />
                </span>
              </div>
              <input type="text" className="form-control" placeholder="Search Assignments" aria-label="Search" aria-describedby="basic-addon1" />
              <div className="input-group-append">
                <span className="input-group-text search-icon" style={{ height: "38px;" }} id="basic-addon1">
                  <FaChevronDown />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Filter icon--> */}
      <div className="d-flex justify-content-start" style={{ marginTop: "1rem" }}>
        <button type="button" className="btn btn-outline-secondary btn-sm margin-top btn-color">
          <FaFilter style={{ marginTop: 1, margin: 4 }} />Apply Filter
        </button>
      </div>

      {/* <!-- Table--> */}
      <div className="table-responsive" style={{ marginTop: 16 }}>
        <table className="table table-striped table-bordered text-center">
          <thead>
            <tr className="table-active">
              <th>Student Name</th>
              {as.map((assignment) => (<th>{assignment.title} <br /> Out of {assignment.points}</th>))}
            </tr>

          </thead>

          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <td>{user?.firstName} {user?.lastName}</td>
                  {as.map((assignment) => {
                    const grade = grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                    return (<td>{grade?.grade || ""}</td>);
                  })}
                </tr>);
            })}
          </tbody>
        </table>
      </div>
    </div>);
}
export default Grades;

