import React, { useState } from 'react'
import Header from '../Components/Header'
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Course from '../Components/Course';

const CoursePage = () => {
  const navigate=useNavigate();
  const all_courses = useLoaderData();
  // console.log(all_courses);
  const [courses, setCourses] = useState(all_courses);
  const handleForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const course_title = form.get("course_title");
    const course_description = form.get("course_description");
    const course_price = form.get("course_price");
    const course_duration = form.get("course_duration");
    const inputObj = {
      course_title: course_title,
      course_description: course_description,
      course_duration: course_duration,
      course_price: course_price,
    }

    const inputData = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputObj)
    };
    fetch('http://localhost:5000/courses', inputData)
      .then(response => response.json())
      .then((data) => {
        //console.log(data);
        if (data.insertedId) {
          toast.success('Successfully saved to mongodb!');
         // navigate("/course")
         fetch("http://localhost:5000/courses")
         .then((res)=>res.json())
         .then(data=>setCourses(data))
         .catch(err=>console.error(err))
          
        }
      })
      .catch((err) => {
        if (err) toast.success('failed to saved  !')
      }

      )



  }
  return (
    <div>
      <Header></Header>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content  ">

          <div className="card bg-base-100 w-[550px] xs:w-[300px]   sm:w-[400px]  shadow-2xl">
            <form className="card-body" onSubmit={handleForm}>
              <fieldset className=' '>
                <legend className='text-xl text-[darkorange] font-semibold'>Course Information Entry</legend>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[indigo] text-xl font-semibold">Course Title</span>
                  </label>
                  <input type="text" placeholder=" Write course title" name='course_title' className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[indigo] text-xl font-semibold">Description</span>
                  </label>
                  <input type="text" placeholder=" Write description" name='course_description' className="input input-bordered" required />

                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[indigo] text-xl font-semibold">Course Duration</span>
                  </label>
                  <input type="text" placeholder=" Write course duration" name='course_duration' className="input input-bordered" required />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[indigo] text-xl font-semibold">Course Price</span>
                  </label>
                  <input type="text" placeholder=" Write course price" name='course_price' className="input input-bordered" required />
                </div>


                <div className="form-control mt-6"  >
                  <input    type='submit' value='Save' className=" w-40 mx-auto btn btn-primary " />
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div   className=" 
                      bg-[darkcyan] text-[aliceblue]">
          <table className="table " border="1">
            {/* head */}
            <thead className='text-[white] text-center'>
              <tr className='grid grid-cols-6 overflow-auto whitespace-normal 	 '>
                <th style={{ wordWrap:"break-word", wordBreak:"break-word"}} className="	   border border-white">Title</th>
                <th style={{ wordWrap:"break-word", wordBreak:"break-word"}}   className=" 	 border border-white">Description</th>
                <th  style={{ wordWrap:"break-word", wordBreak:"break-word"}} className=" 	 border border-white">Duration</th>
                <th  style={{ wordWrap:"break-word", wordBreak:"break-word"}} className="	  	 border border-white">Price</th>
                <th style={{ wordWrap:"break-word", wordBreak:"break-word"}} className=" 	 border border-white"  > Action</th>
                <th style={{ wordWrap:"break-word", wordBreak:"break-word"}} className=" 	 border border-white"  > Action</th>


              </tr>
            </thead>
            <tbody className='text-center '>

              {
                courses.map((course) => {

                  return (<Course key={course._id} all_courses={courses} setCourses={setCourses} course={course}></Course>)
                })
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default CoursePage