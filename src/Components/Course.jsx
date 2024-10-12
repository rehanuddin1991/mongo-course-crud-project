import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Course = ({all_courses,setCourses,course}) => {
 // console.log(all_courses);
  const [newList,setNewList]=useState([]);
  const handleDelete=(id)=>
  {
    //alert(id);
    fetch(`http://localhost:5000/course/${id}`, {method:"DELETE"})
      .then(response => response.json())
      .then((data) => {
        //console.log(data);
        if (data.deletedCount ) {
          toast.success('Successfully deleted from mongodb!')
          const remainingCourses=all_courses.filter((item)=>item._id!==id )
          console.log(remainingCourses);
          setCourses(remainingCourses);
          
        }
      })
      .catch((err) => {
        if (err) toast.success('failed to delete  !')
      }

      )
  }
   
    
  return (
    
      
      <tr className='grid grid-cols-6' >
        
        <td style={{ wordWrap:"break-word", wordBreak:"break-word"}}  className="border border-white">{course.course_title}</td>
        <td style={{ wordWrap:"break-word", wordBreak:"break-word"}}  className="border border-white     word-break: break-word;
">{course.course_description }</td>
        <td style={{ wordWrap:"break-word", wordBreak:"break-word"}}  className="border border-white">{course.course_duration}</td>
        <td style={{ wordWrap:"break-word", wordBreak:"break-word"}}  className="border border-white">{course.course_price}</td>
        <td style={{ wordWrap:"break-word", wordBreak:"break-word"}}  className="border border-white">
        <Link to={`/course_edit/${course._id}`} >Edit</Link>  
          </td>
        <td style={{ wordWrap:"break-word", wordBreak:"break-word"}}  className="border border-white">  
          <button onClick={()=>handleDelete(course._id)}>Delete</button> </td>
        
      </tr>
     
     
       
   
  )
}

export default Course