import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import { useState } from "react";
import * as db from "./Database";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
   const [courses, setCourses] = useState(db.courses);

   const [course, setCourse] = useState({
      _id: "RS106", name: "Python Programming", number: "CS7130",
      startDate: "2023-09-10", endDate: "2023-12-15", semester: "202410_1 Fall 2023",
      image: "brown.png"
   });


   const addNewCourse = () => {
      setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
   };
   const deleteCourse = (courseId: any) => {
      setCourses(courses.filter((course) => course._id !== courseId));
   };
   const updateCourse = () => {
      setCourses(
         courses.map((c) => {
            if (c._id === course._id) {
               return course;
            } else {
               return c;
            }
         })
      );
   };

   return (
      <Provider store={store}>
         <div className="d-flex">

            {/* Kanbas Navigation */}
            <KanbasNavigation />

            {/* Content i.e Dashboard or Course or .. */}
            <div style={{ flexGrow: 1 }}>
               <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="Account" element={<h1>Account</h1>} />
                  <Route path="Dashboard" element={
                     <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse} />
                  } />

                  <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
               </Routes>

            </div>
         </div>
      </Provider>
   )
}

export default Kanbas