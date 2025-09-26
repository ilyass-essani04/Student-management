import { createSlice } from "@reduxjs/toolkit";

const StudentSlice = createSlice({
  name: "students",
  initialState: {
    liste: [],
  },
  reducers: {
    AddStudents: (state, action) => {
      const { name, classId, Ncycle, Nsemaine } = action.payload;

      const cycles = Array.from({ length: Ncycle }, (_, i) => ({
        id: i + 1,
        score: 20,
        weeks: Array.from({ length: Nsemaine }, (_, j) => ({
          id: j + 1,
          activities: Array(5).fill({ color: "green", comment: "" }), // ex: 5 activités par semaine
        })),
      }));

      state.liste.push({
        id: Date.now(),
        name,
        classId,
        cycles,
      });
    },

    RemoveStudent: (state, action) => {
      state.liste = state.liste.filter((student) => student.id !== action.payload);
    },

    EditStudent: (state, action) => {
      const { id, name, classId } = action.payload;
      const student = state.liste.find((student) => student.id === id);
      if (student) {
        student.name = name;
        student.classId = classId;
      }
    },

    updateCellColor: (state, action) => {
      const { studentId, cycleId, weekId, activityIndex, color } = action.payload;
      const student = state.liste.find((s) => s.id === studentId);
      if (!student) return;

      const cycle = student.cycles.find((c) => c.id === cycleId);
      if (!cycle) return;

      const week = cycle.weeks.find((w) => w.id === weekId);
      if (!week) return;

      const oldColor = week.activities[activityIndex].color;
      week.activities[activityIndex].color = color;

      // Score logic
      if (oldColor !== color) {
        if (color === "red") cycle.score = Math.max(0, cycle.score - 0.5);
        if (oldColor === "red" && color === "green") cycle.score = Math.min(20, cycle.score + 0.5);
      }
    },

    addComment: (state, action) => {
      const { studentId, cycleId, weekId, activityIndex, comment } = action.payload;
      const student = state.liste.find((s) => s.id === studentId);
      if (!student) return;

      const cycle = student.cycles.find((c) => c.id === cycleId);
      if (!cycle) return;

      const week = cycle.weeks.find((w) => w.id === weekId);
      if (!week) return;

      week.activities[activityIndex].comment = comment;
    },
  },
});

export const { AddStudents, RemoveStudent, EditStudent, updateCellColor, addComment } =
  StudentSlice.actions;
export default StudentSlice.reducer;
























