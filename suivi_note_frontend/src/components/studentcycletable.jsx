import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCellColor } from './studentSlice';

function StudentCycleTable({ studentId, cycleId }) {
  const dispatch = useDispatch();
  const cycle = useSelector((state) =>
    state.students.students
      .find((s) => s.id === studentId)
      ?.cycles.find((c) => c.id === cycleId)
  );

  if (!cycle) return <p>Cycle introuvable</p>;

  const handleColorChange = (weekId, activityIndex, color) => {
    dispatch(updateCellColor({ studentId, cycleId, weekId, activityIndex, color }));
  };

  return (
    <div>
      <h2>Score : {cycle.score} / 20</h2>
      <table className="border">
        <thead>
          <tr>
            <th>Semaine</th>
            {cycle.weeks[0].activities.map((_, i) => (
              <th key={i}>Activité {i + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cycle.weeks.map((week) => (
            <tr key={week.id}>
              <td>{week.id}</td>
              {week.activities.map((act, idx) => (
                <td
                  key={idx}
                  style={{
                    backgroundColor:
                      act.color === 'red' ? 'red' : act.color === 'blue' ? 'blue' : 'green',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleColorChange(week.id, idx, act.color === 'red' ? 'green' : 'red')}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentCycleTable;
