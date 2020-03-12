import React, { Fragment } from "react";
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
        <Editor />
      </main>
    </Fragment>
  );
};
