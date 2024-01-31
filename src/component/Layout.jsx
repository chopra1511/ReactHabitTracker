/* eslint-disable react/prop-types */
import classes from "./Layout.module.css";
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

function Layout(props) {
  let navigate = useNavigate();
  const clickHandler = () => {
    navigate("/vite-react-router/");
  };
  let userName = localStorage.getItem("User");

  return (
    <div className={classes.dashboard}>
      <div className={classes.sideSect}>
        <img src={logo} alt="logo-name" />

        <div className={classes.user}>
          <img src={user} alt="user-logo" />
          <h2>{userName}</h2>
        </div>

        <div className={classes.menu1}>
          <nav>
            <ul>
              <NavLink
                to="/vite-react-router/dashboard/home"
                className={classes.link}
                activeClassName={classes.activeLink}
              >
                <li>
                  <span>
                    <HomeRoundedIcon />
                  </span>
                  <span>Home</span>
                </li>
              </NavLink>
              <NavLink
                to="/vite-react-router/dashboard/stats"
                className={classes.link}
              >
                <li>
                  <span>
                    <BubbleChartRoundedIcon />
                  </span>
                  <span>Stats</span>
                </li>
              </NavLink>
              <NavLink
                to="/vite-react-router/dashboard/habits"
                className={classes.link}
              >
                <li>
                  <span>
                    <ElectricBoltRoundedIcon />
                  </span>
                  <span>Habits</span>
                </li>
              </NavLink>
              <li>
                <span>
                  <ExploreRoundedIcon />
                </span>
                <span>Explore</span>
              </li>
            </ul>
          </nav>
        </div>
        <div className={classes.menu2}>
          <h2>Insights</h2>
          <ul>
            <li>
              <span>
                <MenuBookRoundedIcon />
              </span>
              <span>Article</span>
              <span>
                <Chip label="New" color="error" />
              </span>
            </li>
            <li>
              <span>
                <BookmarkRoundedIcon />
              </span>
              <span>Bookmark</span>
            </li>
          </ul>
        </div>
        <div>
          <IconButton onClick={clickHandler}>
            <ChevronLeftRoundedIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.sideSect2}>{props.children}</div>
    </div>
  );
}

export default Layout;
