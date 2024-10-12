import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import toast from 'react-hot-toast';

const EditCourse = () => {
  const api_url="https://express-mongodb-backend-x3wv.onrender.com";
    const loaderData=useLoaderData();
    const navigate=useNavigate();
    const [courses, setCourses] = useState([]);
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
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputObj)
    };
    fetch(`${api_url}/course/${loaderData._id}`, inputData)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success('Successfully Updated to mongodb!');
          navigate("/course")
        //  fetch("http://localhost:5000/courses")
        //  .then((res)=>res.json())
        //  .then(data=>setCourses(data))
        //  .catch(err=>console.error(err))
          
        }
      })
      .catch((err) => {
        if (err) toast.success('failed to update  !')
      }

      )



  }

    //console.log(loaderData.course_title);
  return (
    <div>
        <Header></Header>
         <div className="card mx-auto bg-base-100  w-[550px] xs:w-[300px]   sm:w-[400px]  shadow-2xl">
            <form className="card-body" onSubmit={handleForm}>
              <fieldset className='border border-[indigo] p-10'>
                <legend className='text-xl text-[darkorange] font-semibold'>Course Information Update</legend>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[indigo] text-xl font-semibold">Course Title</span>
                  </label>
                  <input defaultValue={loaderData?.course_title} type="text" placeholder=" Write course title" name='course_title' className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[indigo] text-xl font-semibold">Description</span>
                  </label>
                  <input defaultValue={loaderData?.course_description} type="text" placeholder=" Write description" name='course_description' className="input input-bordered" required />

                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[indigo] text-xl font-semibold">Course Duration</span>
                  </label>
                  <input defaultValue={loaderData?.course_duration} type="text" placeholder=" Write course duration" name='course_duration' className="input input-bordered" required />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[indigo] text-xl font-semibold">Course Price</span>
                  </label>
                  <input defaultValue={loaderData?.course_price} type="text" placeholder=" Write course price" name='course_price' className="input input-bordered" required />
                </div>


                <div className="form-control mt-6">
                  <input type='submit' value='Update' className="w-40 mx-auto btn btn-primary" />
                </div>
              </fieldset>
            </form>
          </div>
          <Footer></Footer>
    </div>
  )
}

export default EditCourse