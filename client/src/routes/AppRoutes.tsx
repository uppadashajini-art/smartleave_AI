import { Routes, Route, Navigate } from "react-router-dom";

import FacultyLayout from "../layouts/FacultyLayout";
import FacultyDashboard from "../pages/faculty/Dashboard";
import ApplyLeave from "../pages/faculty/ApplyLeave";

export default function AppRoutes(){

  return(

    <Routes>

      <Route 
        path="/" 
        element={<Navigate to="/faculty" />} 
      />
      <Route path="apply-leave" element={<ApplyLeave />} />


      <Route 
        path="/faculty" 
        element={<FacultyLayout />}
      >

        <Route 
          index 
          element={<FacultyDashboard />} 
        />

      </Route>


    </Routes>

  );

}