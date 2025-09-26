import { useParams } from "react-router-dom";
import StudentCycleTable from "./studentcycletable";

function StudentCycleTablePage() {
  const { studentId, cycleId } = useParams();

  return (
    <StudentCycleTable 
      studentId={parseInt(studentId)} 
      cycleId={parseInt(cycleId)} 
    />
  );
}

export default StudentCycleTablePage;
