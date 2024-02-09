import classes from "./Stats.module.css";
import Close from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { habitActions } from "../store/HabitSlice";
import WeekData from "./WeekData";
import empty from '../assets/empty.jpg'


const Stats = () => {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habit.habits);
  const week = useSelector((state) => state.habit.weeks);
  console.log(week);
  return (
    <Layout>
      <div className={classes.emptyImg}>
        {habits.length === 0 && <img src={empty} alt="empty" />}
      </div>
      <div className={classes.habits}>
        {habits.map((habit) => {
          return (
            <div className={classes.card} key={habit.id}>
              <div className={classes.content}>
                <div className={classes.back}>
                  <IconButton
                    onClick={() => {
                      dispatch(habitActions.removeHabits(habit.id));
                    }}
                  >
                    <Close color="error" sx={{ fontSize: 20 }} />
                  </IconButton>
                </div>
                <h1>{habit.title}</h1>
                <h2 className={classes.count}>{habit.count} / 7</h2>
              </div>
              <div className={classes.weekView}>
                {week.map((day, index) => (
                  <div key={index}>
                    <h2 className={classes.date}>{day.date}</h2>
                    <h4 className={classes.days}>{day.day}</h4>
                    <WeekData status={day.status} id={habit.id} day={day.day} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Stats;
