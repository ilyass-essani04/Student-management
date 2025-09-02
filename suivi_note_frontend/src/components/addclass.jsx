import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import { AddClasse } from "../features/classSlice";

// const navigate = useNavigate();


function Addclass(){
    // const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [Ncycle, setCycle] = useState("");
    const [Nsemaine, setSemaine] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(name.trim()){
        dispatch(AddClasse({ name ,Ncycle:Number(Ncycle) ,Nsemaine:Number(Nsemaine) }));
        setName('')
        setCycle('')
        setSemaine('')
        navigate('/dashboard/classes') //redirect to classes list after adding
      }
    };


    return(
        <section class="py-10 my-auto dark:bg-gray-900">
    {/* <div class="lg:w-[80%] md:w-[90%] w-[96%] mx-auto flex gap-4"> */}
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Ajouter une classe</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nom de la classe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 mb-3 border rounded-md"
                required
              />
              <input
                type="number"
                placeholder="Nombre de cycles"
                value={Ncycle}
                onChange={(e) => setCycle(e.target.value)}
                className="w-full px-3 py-2 mb-3 border rounded-md"
                required
              />
              <input
                type="number"
                placeholder="Semaines par cycle"
                value={Nsemaine}
                onChange={(e) => setSemaine(e.target.value)}
                className="w-full px-3 py-2 mb-3 border rounded-md"
                required
              />
              <div className="flex justify-end gap-2">
                <Link to={'/dashboard/classes'}>
                <button type="button" className="px-4 py-2 bg-gray-300 rounded-md">Annuler</button>
                </Link>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
    {/* </div> */}
</section>
    )

}


export default Addclass;










// function Addclass(){
//     // const [showModal, setShowModal] = useState(false);
//     const [className, setName] = useState("");
//     const [cycles, setCycle] = useState("");
//     const [weeks, setSemaine] = useState("");
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       console.log({
//         className,
//         cycles,
//         weeks
//       });
//     //   setShowModal(false);
//     };
    
//     return(
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg p-6 w-96">
//             <h2 className="text-xl font-bold mb-4">Ajouter une classe</h2>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="Nom de la classe"
//                 value={className}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-3 py-2 mb-3 border rounded-md"
//                 required
//               />
//               <input
//                 type="number"
//                 placeholder="Nombre de cycles"
//                 value={cycles}
//                 onChange={(e) => setCycle(e.target.value)}
//                 className="w-full px-3 py-2 mb-3 border rounded-md"
//                 required
//               />
//               <input
//                 type="number"
//                 placeholder="Semaines par cycle"
//                 value={weeks}
//                 onChange={(e) => setSemaine(e.target.value)}
//                 className="w-full px-3 py-2 mb-3 border rounded-md"
//                 required
//               />
//               <div className="flex justify-end gap-2">
//                 <button
//                   type="button"
//                   onClick={() => setShowModal(false)}
//                   className="px-4 py-2 bg-gray-300 rounded-md"
//                 >
//                   Annuler
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-500 text-white rounded-md"
//                 >
//                   Ajouter
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//   );
// }


// export default Addclass;