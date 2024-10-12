import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const ContactPage = () => {
  return (
    <div>
        <Header></Header>
        <div className="hero mt-6 ">
  <div className="hero-content    ">
    
    <div className="card    w-[550px] xs:w-[300px]   sm:w-[400px]  shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="email" placeholder="Write your email" className="text-[midnightblue] font-bold input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <input type="text" placeholder="Write Your Message" className=" text-[midnightblue] font-bold input input-bordered" required />
          
        </div>
        <div className="form-control mt-6 mx-auto">
          <button className="btn w-[180px] btn-primary">Submit</button>
        </div>
      </form>
      <div className='mx-auto p-2'>
      <h1 className="text-2xl text-[indigo]  font-bold">Contact Us</h1>
      <p className="  ">
        Email: rehan.ictd@gmail.com <br />
        Mobile: 01674194142
      </p>

      </div>
      
    </div>
  </div>
</div>
<Footer></Footer>
    </div>
  )
}

export default ContactPage