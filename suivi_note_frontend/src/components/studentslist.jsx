import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveStudent } from "../features/studentSlice";


function Studentlist(){
    const students = useSelector((state)=>state.students.liste);
    const dispatch = useDispatch();
    
    return(
<div class="text-gray-900 bg-gray-200">
    <div class="p-4 flex justify-between">
        <h1 class="text-3xl">La classe :<strong> </strong></h1>
        <Link to={'/dashboard/addstudent'}>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Ajouter un eleve</button>
        </Link>
    </div>
    <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
                
                <tr class="border-b">
                    <th class="text-left p-3 px-5">Name</th>
                    <th class="text-left p-3 px-5">Classe</th>
                    <th class="text-left p-3 px-5">Role</th>
                    <th></th>
                </tr>
                {students.map((student)=>(
                <tr key={student.id} class="border-b hover:bg-orange-100 bg-gray-100">
                    <td class="p-3 px-5">
                        <input type="text" value={student.nom} class="bg-transparent border-b-2 border-gray-300 py-2"/>
                    </td>
                    <td class="p-3 px-5">
                        <input type="text" value="classe..?" class="bg-transparent border-b-2 border-gray-300 py-2"/>
                    </td>
                    <td class="p-3 px-5">
                        <input type="text" value="classe..?" class="bg-transparent border-b-2 border-gray-300 py-2"/>
                    </td>
                    <td class="p-3 px-5 flex justify-end">
                        <button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">modifier</button>
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