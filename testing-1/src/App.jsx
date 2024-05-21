import React from "react";
import CreateNotes from "./CreateNotes";
import NotesList from "./NotesList";

const App = () => {
  const [notesDialog, setNotesDialog] = React.useState(false);
  const [notesData, setNotesData] = React.useState([]);
  const [id, setId] = React.useState(null);

  const setNotestoStorage = (newNote) => {
    const newNotesData = [...notesData, newNote];
    setNotesData(newNotesData);
    localStorage.setItem("notes", JSON.stringify(newNotesData));
  };

  const closeDialog = (status) => {
    setNotesDialog(status);
    setId(null);
  };

  const updateNotes = (id, data) => {
    const updatedNotes = notesData.map((item, index) => (index === id ? data : item));
    setNotesData(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setId(null);
  };

  const deleteNote = (index) => {
    const updatedNotes = notesData.filter((_, i) => i !== index);
    setNotesData(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const openParticularNote = (index) => {
    setId(index);
    setNotesDialog(true);
  };

  React.useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotesData(JSON.parse(storedNotes));
    }
  }, []);

  return (
    <>
      <button onClick={() => setNotesDialog(true)}>Add Notes</button>
      {notesDialog && (
        <CreateNotes
          setNotestoStorage={setNotestoStorage}
          closeDialog={closeDialog}
          deleteNote={deleteNote}
          openId={id}
          notesData={notesData}
          updateNotes={updateNotes}
        />
      )}
      <hr />
      {notesData.length === 0 ? (
        "No Notes Found"
      ) : (
        <NotesList notesData={notesData} openParticularNote={openParticularNote} />
      )}
    </>
  );
};

export default App;
