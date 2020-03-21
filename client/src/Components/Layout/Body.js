import React, { Fragment } from "react";
import ChapterForm from "../ChapterForm";
import ChapterView from "../ChapterView";
import clsx from "clsx";

// Conditinaly render either one of chapter pages or search results or new chapter form

export default ({
  classes,
  open,
  activeChapterTitle,
  chapters,
  formOpen,
  setFormOpen
}) => {
  const chapter = chapters.filter(i => i.title === activeChapterTitle)[0];

  return (
    <Fragment>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {formOpen ? (
          <ChapterForm classes={classes} />
        ) : (
          <ChapterView chapter={chapter} classes={classes} />
        )}
      </main>
    </Fragment>
  );
};
