// studentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    setStudents(state, action) {
      state.students = action.payload;
    },
    updateCellColor(state, action) {
      const { studentId, cycleId, weekId, activityIndex, color } = action.payload;
      const student = state.students.find((s) => s.id === studentId);
      if (!student) return;

      const cycle = student.cycles.find((c) => c.id === cycleId);
      if (!cycle) return;

      const week = cycle.weeks.find((w) => w.id === weekId);
      if (!week) return;

      const oldColor = week.activities[activityIndex].color;
      week.activities[activityIndex].color = color;

      // Score logic
      if (oldColor !== color) {
        if (color === 'red') cycle.score = Math.max(0, cycle.score - 0.5);
        if (oldColor === 'red' && color === 'green') cycle.score = Math.min(20, cycle.score + 0.5);
      }
    },
    addComment(state, action) {
      const { studentId, cycleId, weekId, activityIndex, comment } = action.payload;
      const student = state.students.find((s) => s.id === studentId);
      if (!student) return;

      const cycle = student.cycles.find((c) => c.id === cycleId);
      if (!cycle) return;

      const week = cycle.weeks.find((w) => w.id === weekId);
      if (!week) return;

      week.activities[activityIndex].comment = comment;
    },
  },
});

export const { setStudents, updateCellColor, addComment } = studentSlice.actions;
export default studentSlice.reducer;
