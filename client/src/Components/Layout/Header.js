import TocIcon from "@material-ui/icons/Toc";
import React, { Fragment } from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";

export default ({ classes, open, handleDrawerOpen }) => {
  return (
    <Fragment>
      <AppBar
        elevation={0}
        color="inherit"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <TocIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      >
    </Fragment>
  );
};
