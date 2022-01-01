import React,{ useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
//import "../public/styles.css";

function App() {
  const [notes, setNote] = useState([]);

  function addNote(note) {
    setNote((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNote((prevNotes) => {
      return notes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea sendNote={addNote} />
      {notes.map((newNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={newNote.title}
            content={newNote.content}
            delete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
