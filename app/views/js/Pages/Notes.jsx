import { useForm } from 'react-hook-form';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';

const Hello = ({ auth, welcome }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [notes, setNotes] = useState([]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5500/notes/new', {
        note: data.note,
      });
      console.log(response);
      if (response.data.status === 'success') {
        console.log('Note added successful');
        reset();
        fetchNotes();
      } else {
        console.log('Failed to add note');
      }
    } catch (error) {
      console.error("There was an error:", error);
    }
  };
  
  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:5500/notes');
      setNotes(response.data.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5500/notes/${id}`);
      console.log(response.data.noteid)
      if (response.data.status === 'success') {
        console.log('Note deleted successfully');
        fetchNotes(); // Refresh the notes list
      } else {
        console.log('Failed to delete note');
      }
    } catch (error) {
      console.error("There was an error:", error);
    }
  };
  const resetNote = async () => {
    try {
      const response = await axios.get(`http://localhost:5500/notes/delete/all`);
      console.log(response.data)
      if (response.data.status === 'success') {
        console.log('Note deleted successfully');
        fetchNotes(); // Refresh the notes list
      } else {
        console.log('Failed to delete note');
      }
    } catch (error) {
      console.error("There was an error:", error);
    }
  };


  useEffect(() => {
    fetchNotes();
  }, []);
  
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div className='bg-slate-50 p-16 shadow-md rounded-lg'>
        <h1 className='text-3xl font-semibold'>Notes</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

        <div>
            <textarea
              rows="5"
              {...register("note", { required: true })}
              placeholder='Write a note'
              className='flex flex-col border bg-gray-100 my-2 p-4 rounded-md'
            />
            {errors.note && <span className='text-red-500'>Note is
               required</span>}
        </div>

          <button
            type="submit"
            className='my-4 px-6 py-3 bg-blue-700 text-white rounded-full'
          >
            Register
          </button>
        </form>
      </div>
      
      <div>
      <table className='w-full mt-4'>
          <thead>
            <tr>
              <th className='border px-16 py-2'>ID</th>
              <th className='border px-16 py-2'>Note</th>
              <th className="border">
                <button className='border-2 border-red-300 px-3 text-red-600 rounded-full' onClick={() => resetNote()}>reset</button>
              </th>
            </tr>
          </thead>
          <tbody>
           {notes.map((note) => (
             <tr key={note.id}>
               <td className='border px-4 py-2 text-center'>{note.id}</td>
               <td className='border px-4 py-2'>{note.note}</td>
               <td className='border px-4 py-2'>
                 <button
                   onClick={() => deleteNote(note.id)}
                   className='bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full'
                 >
                   Delete
                 </button>
               </td>
             </tr>
           ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Hello;
