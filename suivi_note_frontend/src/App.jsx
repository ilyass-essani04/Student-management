import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router"
import Login from "./components/login"
import SignUp from "./components/SignUp"
import Dashboard from "./components/dashboard"
import Maindash from "./components/maindash"
import Profile from "./components/profile"
import Classes from "./components/classes"
import Addclass from "./components/addclass"
import Studentlist from "./components/studentslist"
import Addstudent from "./components/addstudent"
import Editclasse from "./components/editclasse"
import EditStudents from "./components/editstudents"




function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<SignUp />} />


        {/* parent dash layout */}
        <Route path="/dashboard" element={<Dashboard />} >
            <Route index element={<Maindash />} />
            <Route path="profile" element={<Profile />} />
            <Route path="classes" element={<Classes />} />
            <Route path="addclass" element={<Addclass />} />
            <Route path="editclass/:id" element={<Editclasse />} />
            <Route path="studentlist/:id" element={<Studentlist />} /> 
            <Route path="addstudent/:classId" element={<Addstudent />} /> 
            <Route path="editstudent/:id" element={<EditStudents />} /> 
            {/* <Route path="users" element={<Users />} /> */}
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>


    </Router>
    
  )
}

export default App;

