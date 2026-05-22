import React from 'react'
import {  NotebookIcon } from 'lucide-react'
import { Link } from 'react-router'
const NoteNotfound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh] text-center gap-4'>
      <NotebookIcon className='size-10 text-primary' />

      <p className='text-lg font-medium'>
        Ready to write your first Note
      </p>

      <Link to="/create" className='btn btn-primary'>
        Create your first Note
      </Link>
    </div>
  )

}

export default NoteNotfound
