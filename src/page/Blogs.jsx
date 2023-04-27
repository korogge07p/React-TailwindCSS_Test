import { useState , useEffect} from "react";
import Note from "../components/Note";
import { Link } from "react-router-dom";

function Blogs() {

  const [notes, setNotes] = useState([])
  const [noteInput, setNoteInput] = useState("")

  const createNewNote = () => {
    setNotes([noteInput , ...notes])
    setNoteInput("")
  }

  useEffect(() => {
    console.log("Note updated, this is new")
    console.log(notes)
  }, [notes])

  useEffect(() => {
    console.log("Current input updated :", noteInput)
  }, [noteInput])

  return (
    <>
        <div>
            <h1 className="font-noto font-bold text-3xl flex justify-center items-center my-5">
                ARP BLOG PAGE
            </h1>
            <p className="font-noto flex justify-center items-center">
                *pseudo code btw.
            </p>
        </div>
        <div className="m-4">
        <div className="flex justify-center space-x-2">
            <input type="text" value={noteInput} onChange={e => setNoteInput(e.target.value)} className="p-2 border bg-slate-50 outline-none"/>
            <button onClick={createNewNote} className="bg-black hover:bg-zinc-600 shadow px-4 py-2 text-white rounded-md">
            Post
            </button>
        </div>
        <div className="flex flex-wrap justify-center space-x-2 mt-4">
            {
            notes.map((note, index) => {
                return(
                <Note message={note} index={index} key={index}/>
                )
            })
            }
        </div>
        </div>
        <Link className="no-underline text-black font-noto text-1xl flex justify-center items-center" to="/">Go back</Link>
    </>
  );
}

export default Blogs;
