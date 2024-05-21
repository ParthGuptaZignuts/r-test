import React from 'react';

const NotesList = ({ notesData , openParticularNote}) => {
  if (!Array.isArray(notesData)) {
    return null;
  }
  const openNote = (index) =>{
    openParticularNote(index) ;
  }
  return (
    <>
      {notesData.map((item, index) => (
        <div style={{border:"1px solid red" , marginTop:"5px" , textAlign:"center"}} key={index} onDoubleClick={()=>openNote(index)}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default NotesList;
