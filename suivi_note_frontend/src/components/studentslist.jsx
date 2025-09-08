import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RemoveStudent } from "../features/studentSlice";


function Studentlist(){
    const { id } = useParams(); //Get the id of classe from the URRL
    
    // Only get students who belong to this class
    const students = useSelector((state) => (state.students.liste || []).filter((student) => student.classId === id ));
    // const students = useSelector((state)=>state.students.liste);
    
    // Get the classe that we are now in its list
    const classe = useSelector((state) => state.classes.list.find((classe) => classe.id === parseInt(id) ))
    // const [currentClasse, setcurrentClasse] = useState("");


    const dispatch = useDispatch();
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (classe) {
    //       // Check if the class exists
    //       setcurrentClasse(classe.name);
    //     }
    //   }, [classe]);
    
    return(
<div class="text-gray-900 bg-gray-200">
    <div class="p-4 flex justify-between">
        <h1 class="text-3xl">classe: <strong>{classe.name}</strong></h1>
        <Link to={`/dashboard/addstudent/${classe.id}`}>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Ajouter un eleve</button>
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
                {students.map((student)=>(
                    // const className = classes.find((cls) => cls.id === student.classId)?.name || "N/A";
                <tr key={student.id} class="border-b hover:bg-orange-100 bg-gray-100">
                    <td class="p-3 px-5">
                        {student.nom}
                    </td>
                    <td class="p-3 px-5">
                        ...
                    </td>
                    <td class="p-3 px-5">
                        20
                    </td>
                    <td class="p-3 px-5 flex justify-end">
                        <button onClick={()=>{navigate(`/dashboard/editstudent/${student.id}`)}} type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">modifier</button>
                        <button onClick={()=>{dispatch(RemoveStudent(student.id))}} type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">supprimer</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>

    </div>
</div>
    )
}

export default Studentlist;