import classes from "./HabitPage.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { habitActions } from "../store/HabitSlice";
import empty from "../assets/empty.jpg";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

const HabitPage = () => {
  const navigate = useNavigate();
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
  return (
    <Layout>
        <div className={classes.emptyImg}>
          {habits.length === 0 && <img src={empty} alt="empty" />}
        </div>
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
                  <IconButton
                    onClick={() => {
                      navigate("/ReactHabitTracker/dashboard/stats");
                    }}
                  >
                    <ArrowRightIcon color="success" sx={{ fontSize: 40 }} />
                  </IconButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default HabitPage;
