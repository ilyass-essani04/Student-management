import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RemoveStudent } from "../features/studentSlice";


function Studentlist(){
    const { id } = useParams(); //Get the id of classe from the URRL
    const classId = parseInt(id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    
    // Get the classe that we are now in its list
    const classe = useSelector((state) => state.classes.list.find((classe) => classe.id === classId ))
    // const [currentClasse, setcurrentClasse] = useState("");
    
    // Redirect if class not found
    // useEffect(() => {
    //     if (!classe) {
    //     navigate("/dashboard/classes", { replace: true });
    //     }
    // }, [classe, navigate]);
    
    // Only get students who belong to this class
    const students = useSelector((state) => (state.students.liste || []).filter((student) => student.classId === classId ));

    // if (!classe) {
    //     return null; // Wait for redirect
    // }

    return(
<div class="text-gray-900 bg-gray-200">
    <div class="p-4 flex justify-between">
        <h1 class="text-3xl">classe: <strong className="text-blue-700" >{classe.name}</strong></h1>
        <Link to={`/dashboard/addstudent/${classe.id}`}>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Ajouter un élève</button>
        </Link>
    </div>
    <div class="px-3 py-4 flex justify-center">
        

        <table class="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
                
                <tr class="border-b">
                    <th class="text-left p-3 px-5">Name</th>
                    <th class="text-left p-3 px-5">Classe</th>
                    <th class="text-left p-3 px-5">Note</th>
                    <th></th>
                </tr>
                {students.length === 0 ? (
                    <tr>
                        <td colSpan="4" className="text-center py-10 text-gray-500">
                        Aucun élève trouvée, ajouter un élève
                        </td>
                    </tr>
                    ) : (
                students.map((student)=>(
                    // const className = classes.find((cls) => cls.id === student.classId)?.name || "N/A";
                <tr key={student.id} onClick={()=>{navigate(`dashboard/studenttable`)}} class="border-b hover:bg-orange-100 bg-gray-100 cursor-pointer">
                    <td class="p-3 px-5">
                        {student.name}
                    </td>
                    <td class="p-3 px-5">
                        {classe?.name || "N/A"}
                    </td>
                    <td class="p-3 px-5">
                        20
                    </td>
                    <td class="p-3 px-5 flex justify-end">
                        <button onClick={()=>{navigate(`/dashboard/editstudent/${student.id}`)}} type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">modifier</button>
                        <button onClick={()=>{dispatch(RemoveStudent(student.id))}} type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">supprimer</button>
                    </td>
                </tr>
                )))}
            </tbody>
        </table>

    </div>
</div>
    )
}

export default Studentlist;