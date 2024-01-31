import classes from "./Habits.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { habitActions } from "../store/HabitSlice";

function Habits() {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habit.habits);
  const bgColor = [
    "#dedaf4",
    "#d9edf8",
    "#e4f1ee",
    "#fdffb6",
    "#ffd6a5",
    "#ffadad",
  ];

  console.log(habits);
  return (
    <>
      <div className={classes.habits}>
        {habits.map((habit) => {
          const color = bgColor[Math.floor(Math.random() * bgColor.length)];
          return (
            <div
              className={classes.card}
              key={habit.id}
              style={{ backgroundColor: color }}
            >
              <div className={classes.content}>
                <div className={classes.front}>
                  <h1>{habit.title}</h1>
                </div>
                <div className={classes.back}>
                  <IconButton
                    onClick={() => {
                      dispatch(habitActions.removeHabits(habit.id));
                    }}
                  >
                    <DeleteIcon color="error" sx={{ fontSize: 40 }} />
                  </IconButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {habits.length === 0 && (
        <h2 className={classes.noContent}>No Habits Added, Create a new one</h2>
      )}
    </>
  );
}

export default Habits;
