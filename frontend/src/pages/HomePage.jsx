import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import toast from "react-hot-toast"
import NoteCard from '../components/NoteCard';
import api from '../lib/axios';
import NoteNotfound from '../components/NoteNotfound';
const Homepage = () => {
  const [notes,setNotes] = useState([]);
  useEffect(()=>{
    const fetchnotes=async()=>{
      try {
        const res = await api.get("/notes");
        console.log(res.data)
        setNotes(res.data)
      } catch (error) {
        console.log("error in fetching notes")
        toast.error("failed to load notes")
      }
    };
    fetchnotes();
  },[]
  )
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='max-w-7xl max-auto p-4 mt-6'>
        {notes.length === 0 && <NoteNotfound />}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {notes.map((note) => (
            
                <NoteCard key={note._id} note={note} setNotes={setNotes}/>
             
            ))}
          </div>
        
      </div>
    </div>
  )
}

export default Homepage
