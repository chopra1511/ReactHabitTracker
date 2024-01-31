import { configureStore, createSlice } from "@reduxjs/toolkit";
import reverseDate from "../component/week";

const initialState = {
  habits: [],
  showAddHabit: false,
  weeks: reverseDate,
};

const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    opernForm(state) {
      state.showAddHabit = true;
    },
    closeForm(state) {
      state.showAddHabit = false;
    },
    addHabits(state, action) {
      const newHabit = action.payload;
      state.habits.push({
        id: newHabit.id,
        title: newHabit.name,
        count: 0,
      });
    },
    removeHabits(state, action) {
      const habitId = action.payload;
      state.habits = state.habits.filter((habit) => {
        return habit.id !== habitId;
      });
    },
    counter(state, action) {
      const { status, id } = action.payload;
      state.habits.map((habit) => {
        if (habit.id === id) {
          switch (status) {
            case "None":
              habit.count++;
              break;
            case "Done":
              habit.count--;
              break;
            default:
              break;
          }
        }
      });
    },
  },
});

const store = configureStore({
  reducer: {
    habit: habitSlice.reducer,
  },
});

export const habitActions = habitSlice.actions;
export default store;
