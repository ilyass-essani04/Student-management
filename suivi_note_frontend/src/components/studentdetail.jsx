import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function StudentDetail() {
  const { studentId } = useParams();

  const student = useSelector((state) =>
    state.students.liste.find((s) => s.id === parseInt(studentId))
  );
  
  const studentClass = useSelector((state) =>
    state.classes.list.find((c) => c.id === student?.classId)
  );

  if (!student) {
    return <p className="text-center text-red-500">Étudiant introuvable</p>;
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Détails de l’étudiant : {student.name}
      </h1>

      {studentClass ? (
        <>
          <p className="mb-4">
            Classe : <strong>{studentClass.name}</strong>
          </p>

          <h2 className="text-2xl font-semibold mb-4">Cycles</h2>
          <div className="space-y-2">
            {Array.from({ length: studentClass.Ncycle }, (_, i) => (
              <div
                key={i + 1}
                className="p-4 border rounded flex justify-between items-center"
              >
                <span>Cycle {i + 1}</span>
                <Link to={`/dashboard/student/studentdetail/${student.id}/cycle/${i + 1}`}   className="text-blue-500 hover:underline" >
                    Voir suivi
                </Link>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-gray-500">
          Cet étudiant n’est pas assigné à une classe.
        </p>
      )}
    </div>
  );
}

export default StudentDetail;
