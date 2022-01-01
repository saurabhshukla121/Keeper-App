import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom"

function CreateArea(props) {

  const [isExpanded,setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function syncNote(event) {
    const { name, value } = event.target;
    setNote((prevValues) => {
      return {
        ...prevValues,
        [name]: value
      };
    });
  }

  function newNote(event) {
    props.sendNote(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input
          onChange={syncNote}
          name="title"
          placeholder="Title"
          value={note.title}
        /> : null}
        <textarea
          onChange={syncNote}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3: 1}
          value={note.content}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={newNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
