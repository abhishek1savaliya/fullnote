import React,{useContext} from "react";
import noteContext from "../context/NoteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const { note,updateNote } = props;
  return (
    <div className="col-md-3 my-3 ">
      <div className="card border border-dark">
        <div className="card-body">
          <h5 className="card-title text-danger">{note.title}</h5>
          <p className="card-text">{note.description}</p>

          <i className="fa-regular fa-pen-to-square" onClick={()=>{updateNote(note);}}></i>

          <i className="fa-regular fa-trash-can mx-3" onClick={()=>{deleteNote(note._id);
          props.showAlert("Deleted Successfully", "danger")
          }}></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
