import classes from "./Header.module.css";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import SideNav from "./SideNav";
import { useDispatch, useSelector } from "react-redux";
import { habitActions } from "../store/HabitSlice";

const Header = () => {
  const dispatch = useDispatch();
  const showSideMenu = useSelector((state) => state.habit.showSideMenu);

  let userName = localStorage.getItem("User");
  return (
    <div className={classes.header}>
      {!showSideMenu && (
        <>
          <img className={classes.logoImg} src={logo} alt="logo-name" />

          <div className={classes.end}>
            <img src={user} alt="user-logo" />
            <h2>{userName.toUpperCase()}</h2>
            <IconButton onClick={() => dispatch(habitActions.openSideMenu())}>
              <MenuIcon />
            </IconButton>
          </div>
        </>
      )}
      {showSideMenu && (
          <div className={classes.sideNav}>
            <div className={classes.button}>
              <IconButton
                onClick={() => dispatch(habitActions.closeSideMenu())}
              >
                <CloseIcon sx={{ color: "black" }} />
              </IconButton>
            </div>
            <SideNav />
          </div>
      )}
    </div>
  );
};

export default Header;
