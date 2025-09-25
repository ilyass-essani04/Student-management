import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { EditStudent } from "../features/studentSlice";


const EditStudents = () => {
  const { id } = useParams(); // student id
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get student data 
  const student = useSelector((state) =>
    state.students.liste.find((stu) => stu.id === parseInt(id))
  );

  const classe = useSelector((state)=>
    state.classes.list.find((c)=> c.id === student?.classId )
  )

  // State for form fields
  const [name, setName] = useState("");
  const [classId, setClassId] = useState("");

  useEffect(() => {
    if (student) {
      setName(student.name);
      setClassId(student.classId);
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch update
    dispatch(
      EditStudent({
        id: student.id,
        name,
        classId: Number(classId),
      })
    );

    // Navigate back to class student list
    navigate(`/dashboard/studentlist/${classId}`);
  };

  if (!student) {
    return <p className="text-center text-red-500">élève non trouvée!</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">mettre à jour l'élève</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">nom complet</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 mb-3"
            required
          />
          <p className="mb-4">
          Classe: <strong>{classe?.name}</strong>
          </p>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate(`/dashboard/studentlist/${classId}`)}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStudents;
