import classes from "./Date.module.css";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

function Date() {
  return (
    <div className={classes.date}>
      <IconButton>
        <KeyboardArrowUpRoundedIcon />
      </IconButton>
      <div className={classes.card}>
        <h1>20</h1>
        <p>Sun</p>
      </div>
      <div className={classes.card}>
        <h1>20</h1>
        <p>Sun</p>
      </div>
      <div className={classes.card}>
        <h1>20</h1>
        <p>Sun</p>
      </div>
      <IconButton>
        <KeyboardArrowDownRoundedIcon />
      </IconButton>
    </div>
  );
}

export default Date;
