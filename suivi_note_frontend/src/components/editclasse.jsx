import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { EditClass } from "../features/classSlice";

function Editclasse() {
  const { id } = useParams(); //Get the id from the URL
  const classe = useSelector((state) => state.classes.list.find((classe) => classe.id === parseInt(id) ))

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [showModal, setShowModal] = useState(false);
  const [className, setClassName] = useState("");
  const [cycles, setCycles] = useState("");
  const [weeks, setWeeks] = useState("");

  useEffect(() => {
    if (classe) {
      // Check if the class exists
      setClassName(classe.name); // Load the current classe name into the form
      setCycles(classe.Ncycle);
      setWeeks(classe.Nsemaine);
    }
  }, [classe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (className.trim()) {
      dispatch(
        EditClass({
          id: classe.id,
          name: className,
          Ncycle: Number(cycles),
          Nsemaine: Number(weeks),
        })
      );
      navigate("/dashboard/classes"); //redirect to classes list after editing
    }
  };

  if (!classe) {
    return <p className="text-center text-red-500">Classe non trouvée!</p>;
  }

  return (
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
              <Link to={"/dashboard/classes"}>
                <button type="button" className="px-4 py-2 bg-gray-300 rounded-md">
                  Annuler
                </button>
              </Link>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                modifier
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Editclasse;
