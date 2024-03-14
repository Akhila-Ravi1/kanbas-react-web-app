import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import { courses } from "./Database";
import { useState } from "react";

function Kanbas() {
   const [dbCourses, setDbCourses] = useState(courses);
   const [isNewCourse, setIsNewCourse] = useState(true);

   const [course, setCourse] = useState({
      _id: "RS106", name: "Python Programming", number: "CS7130",
      startDate: "2023-09-10", endDate: "2023-12-15", semester: "202410_1 Fall 2023",
      image: "brown.png"
   });

   const [newCourse, setNewCourse] = useState({
      _id: "RS106", name: "Python Programming", number: "CS7130",
      startDate: "2023-09-10", endDate: "2023-12-15", semester: "202410_1 Fall 2023",
      image: "brown.png"
   });

   const addNewCourse = () => {
      const newCourse = {
         ...course,
         _id: new Date().getTime().toString()
      };
      setDbCourses([...dbCourses, { ...course, ...newCourse }]);
   };

   const deleteCourse = (courseId: string) => {
      setDbCourses(courses.filter((course) => course._id !== courseId));
   };

   const updateCourse = () => {
      setDbCourses(
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
                     courses={dbCourses}
                     course={course}
                     newCourse={newCourse}
                     isNewCourse={isNewCourse}
                     setCourse={setCourse}
                     setNewCourse={setNewCourse}
                     setIsNewCourse={setIsNewCourse}
                     addNewCourse={addNewCourse}
                     deleteCourse={deleteCourse}
                     updateCourse={updateCourse} />
               } />

               <Route path="Courses/:courseId/*" element={<Courses courses={dbCourses} />} />
            </Routes>

         </div>
      </div>
   )
}

export default Kanbas