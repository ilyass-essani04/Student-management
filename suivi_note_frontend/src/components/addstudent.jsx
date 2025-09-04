import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AddStudents } from "../features/studentSlice";

// const navigate = useNavigate();


function Addstudent(){
    // const [showModal, setShowModal] = useState(false);
    const [nom, setNom] = useState("");
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(nom.trim()){
        dispatch(AddStudents(nom));
        setNom('')
        navigate('/dashboard/studentlist') //redirect to student list after adding
      }
    };


    return(
        <section class="py-10 my-auto dark:bg-gray-900">
    {/* <div class="lg:w-[80%] md:w-[90%] w-[96%] mx-auto flex gap-4"> */}
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Ajouter une eleve</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nom complet d'eleve"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="w-full px-3 py-2 mb-3 border rounded-md"
                required
              />
              <div className="flex justify-end gap-2">
                <Link to={'/dashboard/studentlist'}>
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


export default Addstudent;

