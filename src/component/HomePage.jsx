import logo from "../assets/logo.png";
import classes from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();
  let name;
  const inputHandler = (event) => {
    name = event.target.value;
  };

  const submitHandler = () => {
      navigate("/ReactHabitTracker/dashboard/home");
    console.log(name);
      localStorage.setItem("User", name);
  };

  return (
    <div className={classes.main}>
      <img src={logo} alt="app-name" />
      <div className={classes.content}>
        <h3>
          Build <span>Better Habits</span>, Build a <span>Better Life</span>
        </h3>
        <h6>Enter your Name</h6>
        <form onSubmit={submitHandler}>
          <input type="text" onChange={inputHandler} />
        </form>
      </div>
    </div>
  );
}

export default HomePage;
