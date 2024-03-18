import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    isEditMode: false,
    assignments: assignments,
    assignment: {
        _id: "newAssignment",
        title: "New Assignment",
        description: "New Description",
        points: "0",
        due: "2024-03-10",
        available: "2024-03-01",
        availableUntil: "2024-03-10",
        course: ""
    },
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
        setEditMode: (state, action) => {
            state.isEditMode = action.payload;
        }
    },
});


export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment, setEditMode } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
