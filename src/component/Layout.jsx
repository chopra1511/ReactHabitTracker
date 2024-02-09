/* eslint-disable react/prop-types */

import Header from "./Header";
import classes from "./Layout.module.css";
import SideNav from "./SideNav";

function Layout(props) {
  
  return (
    <div className={classes.dashboard}>
      <div className={classes.sideNavBar}>
        <SideNav />
      </div>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.main}>{props.children}</div>
    </div>
  );
}

export default Layout;
