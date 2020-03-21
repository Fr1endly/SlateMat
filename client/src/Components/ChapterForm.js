import React, { useMemo, useState, Fragment } from "react";
import { createEditor } from "slate";
import Paper from "@material-ui/core/Paper";
import { Slate, Editable, withReact } from "slate-react";
import axios from "axios";

export default function({ classes }) {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState(initialValue);
  const [formValue, setFormValue] = useState({
    title: "",
    index: ""
  });

  const onChange = e => {
    let value =
      e.target.name === "index" ? Number(e.target.value) : e.target.value;
    setFormValue({ ...formValue, [e.target.name]: value });
  };

  const onClickSubmitValue = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const chapter = {
      ...formValue,
      sections: JSON.stringify(value)
    };
    const body = chapter;

    try {
      axios.post("http://localhost:8000/chapters", body, config);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <Paper>
        <form>
          <div className="form-control">
            <input
              name="title"
              value={formValue.title}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-control">
            <input
              name="index"
              value={formValue.index}
              onChange={e => onChange(e)}
            />
          </div>
        </form>

        <div className="Editor">
          {/* Render slate context */}
          <Slate
            editor={editor}
            value={value}
            onChange={value => setValue(value)}
          >
            <Editable />
          </Slate>
        </div>
        <div className="btn-control">
          <button className="btn-save" onClick={onClickSubmitValue}>
            Save
          </button>
        </div>
      </Paper>
    </Fragment>
  );
}

const initialValue = [
  {
    type: "paragraph",
    children: [
      {
        text: ""
      }
    ]
  }
];
