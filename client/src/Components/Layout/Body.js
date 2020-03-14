import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Editor from "../Editor";
import clsx from "clsx";

export default ({ classes, open }) => {
  return (
    <Fragment>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <Paper className={classes.contentPaper}>
          <Editor />
        </Paper>
      </main>
    </Fragment>
  );
};
