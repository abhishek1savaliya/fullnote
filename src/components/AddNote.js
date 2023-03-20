import React, { useState } from "react";
import noteContext from "../context/NoteContext";
import { useContext } from "react";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag:""});
    props.showAlert("Added  Successfully", "success")
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-4">
      <h2 className="text-primary">ADD A NOTE </h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
          <h5 className="text-dark">Title </h5>
          </label>
          <input 
          value={note.title}
          minLength={5}
          required
            type="text"
            className="form-control border border-dark"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
          <h5 className="text-dark"> Description </h5>
          </label>
          <textarea value={note.description}
            minLength={5}
            required
            className="form-control border border-dark"
            id="description"
            name="description"
            onChange={onChange} rows="4" cols="50"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label"> <h5 className="text-dark"> Tag </h5></label>
          <input type="text" value={note.tag} className="form-control border border-dark" minLength={5}
            required id="tag" name="tag" onChange={onChange}/>
        </div>

        <button disabled={note.title.length<5 || note.description.length<5 }  type="submit" className="btn btn-success" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
