import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AddStudents } from "../features/studentSlice";

function Addstudent() {
  const { classId: paramClassId } = useParams(); // Get classId from URL if it exists
  const [name, setName] = useState("");
  const [classId, setClassId] = useState(paramClassId || ""); // Preselect if param exists

  const classes = useSelector((state) => state.classes.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (paramClassId) {
      setClassId(paramClassId); // pre-select class
    }
  }, [paramClassId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(AddStudents({ 
        name, 
        classId: Number(classId) 
      }));
      setName("");
      navigate(`/dashboard/studentlist/${classId}`);
      alert(`L'élève ${name} a été ajouté avec succès`);
    }
  };

  const handleAnnuler = () => {
    if (classId) {
      navigate(`/dashboard/studentlist/${classId}`);
    } else {
      navigate(`/dashboard/classes`); // fallback if no class
    }
  };

  return (
    <section className="py-10 my-auto dark:bg-gray-900">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 w-96">
          <h2 className="text-xl font-bold mb-4">Ajouter un élève</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="nom complet de l'élève"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 mb-3 border rounded-md"
              required
            />
            <select
              value={classId}
              onChange={(e) => setClassId(Number(e.target.value))}
              required
              className="w-full border px-4 py-2 mb-3 rounded"
            >
              <option value="">Sélectionner une classe</option>
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </select>
            <div className="flex justify-end gap-2">
              <button onClick={handleAnnuler} type="button" className="px-4 py-2 bg-gray-300 rounded-md"> Annuler</button>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Ajouter</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Addstudent;























// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { AddStudents } from "../features/studentSlice";

// // const navigate = useNavigate();


// function Addstudent(){
//     // const [showModal, setShowModal] = useState(false);
//     const [name, setName] = useState("");
//     const [classId, setClassId] = useState("");
//     const classes = useSelector((state)=>state.classes.list);
    
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       if(name.trim()){
//         dispatch(AddStudents({
//           name,
//           classId
//         }));
//         setName('');
//         navigate(`/dashboard/studentlist/${classId}`) //redirect to student list after adding
//         alert("L'éleve a été ajouté avec succès à la classe choisi") //add class name at last later
//       }
//     };

//     function handleAnnuler(){
//       navigate(`/dashboard/studentlist/${classId}`);
//     }



//     return(
//         <section class="py-10 my-auto dark:bg-gray-900">
//     {/* <div class="lg:w-[80%] md:w-[90%] w-[96%] mx-auto flex gap-4"> */}
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg p-6 w-96">
//             <h2 className="text-xl font-bold mb-4">Ajouter une eleve</h2>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="name complet d'eleve"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-3 py-2 mb-3 border rounded-md"
//                 required
//               />
//               <select value={classId} onChange={(e) => setClassId(e.target.value)} required className="w-full border px-4 py-2 mb-3 rounded">

//                 <option value="">Select a Class</option>
//                 {classes.map((cls) => (
//                 <option key={cls.id} value={cls.id}>
//                   {cls.name}
//                 </option>
//               ))}
//               </select>
//               <div className="flex justify-end gap-2">
//                 <button onClick={handleAnnuler} type="button" className="px-4 py-2 bg-gray-300 rounded-md">
//                 {/* <Link to={`/dashboard/studentlist/${classId}`}> */}
//                   Annuler
//                 {/* </Link> */}
//                 </button>
//                 <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Ajouter</button>
//               </div>
//             </form>
//           </div>
//         </div>
//     {/* </div> */}
// </section>
//     )

// }


// export default Addstudent;

