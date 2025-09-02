import { useState } from "react";
import { Link } from "react-router";



// CHANGE THIS TO "EDIT CLASS" 
function Editclass(){
    // const [showModal, setShowModal] = useState(false);
    const [className, setClassName] = useState("");
    const [cycles, setCycles] = useState("");
    const [weeks, setWeeks] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({
        className,
        cycles,
        weeks
      });
    //   setShowModal(false);
    };

    return(
        <section class="py-10 my-auto dark:bg-gray-900">
    {/* <div class="lg:w-[80%] md:w-[90%] w-[96%] mx-auto flex gap-4"> */}
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">modifier la classe</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nom de la classe"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="w-full px-3 py-2 mb-3 border rounded-md"
                required
              />
              <input
                type="number"
                placeholder="Nombre de cycles"
                value={cycles}
                onChange={(e) => setCycles(e.target.value)}
                className="w-full px-3 py-2 mb-3 border rounded-md"
                required
              />
              <input
                type="number"
                placeholder="Semaines par cycle"
                value={weeks}
                onChange={(e) => setWeeks(e.target.value)}
                className="w-full px-3 py-2 mb-3 border rounded-md"
                required
              />
              <div className="flex justify-end gap-2">
                <Link to={'/dashboard/classes'}>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Annuler
                </button>
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


export default Editclass;
