/* eslint-disable react/prop-types */
// import classes from './WeekData.module.css'
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { habitActions } from "../store/HabitSlice";

const WeekData = ({ status, id, day }) => {
    const storedStatus = localStorage.getItem(`habitStatus-${day}-${id}`);
    const [hStatus, setHStatus] = useState(storedStatus || status);
    const dispatch = useDispatch();
    


    const statusHandler = () => {
        console.log(day);
        setHStatus((prevStatus) => {
            switch (prevStatus) {
                case "Done":
                    return "Not Done";

                case "Not Done":
                    return "None";

                default:
                    return "Done";
            }
        });
        console.log(hStatus);
        dispatch(habitActions.counter({ status: hStatus, id: id }))
    }

    useEffect(() => {
      localStorage.setItem(`habitStatus-${day}-${id}`, hStatus);
    }, [hStatus, id, day]);
    

  let icon;

  switch (hStatus) {
    case "Done":
      icon = <CheckCircleIcon color="success" />;

      break;
    case "Not Done":
      icon = <CancelIcon sx={{ color: "red" }} />;

      break;
    default:
      icon = <RadioButtonUncheckedIcon />;
  }

  return <IconButton onClick={statusHandler}>{icon}</IconButton>;
}

export default WeekData
