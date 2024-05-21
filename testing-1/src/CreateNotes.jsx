import React from 'react';

const CreateNotes = ({ setNotestoStorage, closeDialog, openId, notesData, updateNotes, deleteNote }) => {
  const [noteData, setNoteData] = React.useState({ title: "", description: "" });

  const notesSubmit = (e) => {
    e.preventDefault();
    if (openId !== null) {
      updateNotes(openId, noteData);
    } else {
      setNotestoStorage(noteData);
    }
    clearNotes();
    closeDialog(false);
  };

  const clearNotes = () => {
    setNoteData({ title: "", description: "" });
  };

  const closeDialogData = () => {
    closeDialog(false);
  };

  const deleteNotes = () => {
    deleteNote(openId);
    clearNotes();
    closeDialog(false);
  };

  React.useEffect(() => {
    if (openId !== null) {
      setNoteData(notesData[openId]);
    } else {
      setNoteData({ title: "", description: "" });
    }
  }, [openId, notesData]);

  return (
    <>
      <form onSubmit={notesSubmit}>
        <span onClick={closeDialogData}>&times;</span>
        <input
          type="text"
          value={noteData.title}
          onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
          required
        />
        <textarea
          value={noteData.description}
          onChange={(e) => setNoteData({ ...noteData, description: e.target.value })}
          required
        ></textarea>
        <input type="submit" value={openId ==null ? "Submit" : "Edit"} />
        { openId == null &&  <input type="reset" value="Clear" onClick={clearNotes} /> }
        {openId !== null && <button type="button" onClick={deleteNotes}>Delete</button>}
      </form>
    </>
  );
};

export default CreateNotes;
