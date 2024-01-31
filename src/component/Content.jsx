import classes from "./Content.module.css";
import heroImg from "../assets/hero-img.png";
import CreateHabit from "./CreateHabit";
import Habits from "./Habits";
import graph from "../assets/graph.png";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import { yellow } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { habitActions } from "../store/HabitSlice";
import Layout from "./Layout";

function Content() {
  const dispatch = useDispatch();
  const showForm = useSelector((state) => state.habit.showAddHabit);
  const createFormHandler = () => {
    dispatch(habitActions.opernForm());
  };

  return (
    <Layout>
      <div className={classes.sideSelect}>
        <div className={classes.card}>
          <div className={classes.cardContent}>
            <h2>How to Build a New Habit</h2>
            <p>
              This is essential for making progress in your health, happiness
              and your life
            </p>
            <button onClick={createFormHandler}>Click To Create</button>
          </div>
          <div className={classes.cardImg}>
            <img src={heroImg} alt="card-img" />
          </div>
        </div>
        <div className={classes.card}>
          {showForm && <CreateHabit />}
          {!showForm && (
            <div style={{ padding: "10px" }}>
              <div className={classes.header}>
                <h3>Statistics</h3>
                <InsightsRoundedIcon />
              </div>
              <div className={classes.container}>
                <img src={graph} alt="graph-img" />
              </div>
              <div className={classes.footer}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "5px",
                  }}
                >
                  <div>
                    <CircleRoundedIcon fontSize="10px" color="error" />
                  </div>
                  <div style={{ paddingLeft: "5px" }}>
                    <p>7</p>
                    <span>Best Streaks</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "5px",
                  }}
                >
                  <div>
                    <CircleRoundedIcon
                      fontSize="10px"
                      sx={{ color: yellow[500] }}
                    />
                  </div>
                  <div style={{ paddingLeft: "5px" }}>
                    <p>8</p>
                    <span>Perfect Days</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "5px",
                  }}
                >
                  <div>
                    <CircleRoundedIcon fontSize="10px" color="secondary" />
                  </div>
                  <div style={{ paddingLeft: "5px" }}>
                    <p>24</p>
                    <span>Habits Done</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={classes.card}>
          <div className={classes.year}>
            <h3>Daily</h3>
            <h3>Weekly</h3>
            <h3>Monthly</h3>
          </div>
          <div className={classes.habits}>
            <Habits />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Content;
