import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router';
import { toast } from "react-hot-toast"
import axios from 'axios';
import api from '../lib/axios';
import { ArrowLeftIcon, Trash2Icon } from "lucide-react"
const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`)
        setNote(res.data)
      } catch (error) {
        toast.error("Failed to getting note")
      }
    }
    fetchNote()
  }, [id])
  const handleDelete = async () => {
    if(!window.confirm("Are you sure you wanna delete this note ")) return;
    try {
      await api.delete(`/notes/${id}`)
       toast.success('note deleted succesfully')
       navigate('/')
    } catch (error) {
      toast.error("Failed to delte the note")
       console.log("error in delete");
    }
   }
   const handleSave = async () => { 
    if(!note.title.trim() || !note.content.trim()){
      toast.error("please add title or content");
      return;
    }
    try {
      await api.put(`/notes/${id}`,note)
      toast.success("note updated succesfully")
      navigate('/')
    } catch (error) {
      console.log("error in put note")
      toast.error("unable to change note");
    }
   }
  if (!note) {
  return <div>Loading...</div>
}
  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <div className='flex items-center justify-between mb-6'>
            <Link to={"/"} className='btn btn-ghost mb-6'>
              <ArrowLeftIcon className="size-5"></ArrowLeftIcon>
              Back to Notes
            </Link>
            <button onClick={handleDelete} className='btn btn-error btn-outline'>
              <Trash2Icon className='h-5 w-5' />
              Delete Note
            </button>
          </div>
          <div className='card bg-base-100'>
            <div className='card-body'>
              <div className='form-control mb-4'>
                  <label className="label">
                    <span className='label-text'>Title</span>
                  </label>
                  <input type="text" placeholder='Note title' className='input input-bordered' value={note.title} 
                  onChange={(e) => setNote({...note,title:e.target.value})}/>
                </div>
                <div className='form-control mb-4'>
                  <label className="label">
                    <span className='label-text'>Content</span>
                  </label>
                  <textarea placeholder='Write your note' className='textarea textarea-bordered h-32' value={note.content} 
                  onChange={(e) => setNote({...note, content: e.target.value})}/>
                </div>
                <div className="card-actions justify-end">
                  <button type='submit' className='btn btn-primary' disabled={saving} onClick={handleSave}>Save Changes</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage
