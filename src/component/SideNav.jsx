import classes from "./SideNav.module.css";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ElectricBoltRoundedIcon from "@mui/icons-material/ElectricBoltRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import IconButton from "@mui/material/IconButton";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import Chip from "@mui/material/Chip";
import { NavLink, useNavigate } from "react-router-dom";
import { habitActions } from "../store/HabitSlice";
import { useDispatch } from "react-redux";

const SideNav = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
  const clickHandler = () => {
      navigate("/ReactHabitTracker/");
  };
  let userName = localStorage.getItem("User");
  return (
    <div className={classes.sideNav}>
      <img className={classes.logoImg} src={logo} alt="logo-name" />

      {/* User Info */}
      <div className={classes.user}>
        <img src={user} alt="user-logo" />
        <h2>{userName}</h2>
      </div>

      {/* Side NavBar Menu 1 */}

      <nav className={classes.menu1}>
        <ul>
          <NavLink
            to="/ReactHabitTracker/dashboard/home"
            className={classes.link}
            onClick={() => dispatch(habitActions.closeSideMenu())}
          >
            <li>
              <span>
                <HomeRoundedIcon />
              </span>
              <span>HOME</span>
            </li>
          </NavLink>
          <NavLink
            to="/ReactHabitTracker/dashboard/stats"
            className={classes.link}
            onClick={() => dispatch(habitActions.closeSideMenu())}
          >
            <li>
              <span>
                <BubbleChartRoundedIcon />
              </span>
              <span>STATS</span>
            </li>
          </NavLink>
          <NavLink
            to="/ReactHabitTracker/dashboard/habits"
            className={classes.link}
            onClick={() => dispatch(habitActions.closeSideMenu())}
          >
            <li>
              <span>
                <ElectricBoltRoundedIcon />
              </span>
              <span>HABITS</span>
            </li>
          </NavLink>
          <li>
            <span>
              <ExploreRoundedIcon />
            </span>
            <span>EXPLORE</span>
          </li>
        </ul>
      </nav>

      {/* Side NavBar Menu 2 */}
      <div className={classes.menu2}>
        <h2>INSIGHTS</h2>
        <ul>
          <li>
            <span>
              <MenuBookRoundedIcon />
            </span>
            <span>ARTICLE</span>
            <span>
              <Chip label="1" color="error" />
            </span>
          </li>
          <li>
            <span>
              <BookmarkRoundedIcon />
            </span>
            <span>BOOKMARK</span>
          </li>
        </ul>
      </div>

      {/* Back button to HomePage */}
      <div>
        <IconButton onClick={clickHandler}>
          <ChevronLeftRoundedIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default SideNav;
