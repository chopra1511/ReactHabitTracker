import { useRef } from "react";
import classes from "./CreateHabit.module.css";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { habitActions } from "../store/HabitSlice";

function CreateHabit() {
    const dispatch = useDispatch();
    const nameRef = useRef('');
    

    const closeFormHandler = () => {
        dispatch(habitActions.closeForm())
    }

  const submitHandler = (e) => {
      e.preventDefault();
      dispatch(habitActions.addHabits(
          {
              id: Math.random().toString(),
              name: nameRef.current.value
          }
      ))
      nameRef.current.value = '';
      
    };
    
  return (
    <div className={classes.main}>
      <div>
        <IconButton onClick={closeFormHandler}>
          <CloseIcon />
        </IconButton>
      </div>
      <h2>New Habit</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="habit-name">Title</label>
        <input type="text" ref={nameRef} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateHabit;
