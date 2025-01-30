import React, { useState,useRef,useEffect } from 'react';
import axios from 'axios';
import "../assets/css/about.css"
function AddCourses(props) {
 const [file, setFile] = useState(null);
 const [title, setTitle] = useState("");
 const [description, setDescription] = useState("");
 const [price, setPrice] = useState(0);
 const [filePreview , setfilePreview] = useState(null)
 const fileRef = useRef(null)

   const  handleFileChange = (e) => {
    e.preventDefault();
     let uploadFile = e.target.files[0];
     if(uploadFile){
        setFile(uploadFile)
     }
   }
   const handleData = (e) => {
    e.preventDefault();
    console.log(title,file,"title");
    setTitle("");
    setPrice(0);
    setDescription('');
    if(fileRef.current){
        fileRef.current.value = "";
        
    }
    setfilePreview(null);
    const formData = new FormData(); // Create FormData instance
  formData.append('title', title); // Add text fields
  formData.append('description', description);
  formData.append('price', price);
  formData.append('thumbnail', file);
    axios
    .post('http://localhost:3000/api/course', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    })
    .then((res) => {
      console.log('Data is posted', res);
    })
    .catch((err) => {
      console.error('Error posting data:', err);
    });
};
   useEffect(() => {
    if(file){
        const previewUrl = URL.createObjectURL(file);
        setfilePreview(previewUrl);
        return () => URL.revokeObjectURL(previewUrl);
    }
   },[file])

    return (
       <>
       <h1>Add Course</h1>
        <form onSubmit={handleData} className='add-course-wrapper'> 
           <div className='form-group'>
               <label>Course title</label>
               <input type="text" value = {title} onChange={(e) => setTitle(e.target.value)} required/>
           </div>
           <div className='form-group'>
               <label>Course Description</label>
               <input type="text" value = {description} onChange={(e) => setDescription(e.target.value)}  required/>
           </div>
           <div className='form-group'>
               <label>Course Price</label>
               <input type="number" value = {price} onChange={(e) => setPrice(e.target.value)} required/>
           </div>
           <div className='form-group'>
               <label>Course Thumbnail</label>
               <input type="file"  accept='image/*' onChange={handleFileChange} ref = {fileRef}/>
           </div>
           {filePreview && (
           <div className='file-preview'>
            <img src={filePreview} alt="preview" />
           </div>
           )}
            <button type='submit' >Add</button>
        </form>
       </>
    );
}

export default AddCourses;