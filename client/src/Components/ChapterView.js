import React, { useMemo, useState, Fragment, useEffect } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import Paper from "@material-ui/core/Paper";

export default function({ chapter, classes }) {
  const initialValue = [
    {
      type: "paragraph",
      children: [
        {
          text: "Welcome page "
        }
      ]
    }
  ];

  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    if (chapter !== undefined) {
      setValue(JSON.parse(chapter.sections));
    }
  }, [chapter]);

  return (
    <Fragment>
      <Paper className={classes.EditorPaper}>
        <div className={classes.Editor}>
          {/* Render slate context */}
          <Slate
            editor={editor}
            value={value}
            onChange={value => setValue(value)}
          >
            <Editable readOnly />
          </Slate>
        </div>
      </Paper>
    </Fragment>
  );
}
