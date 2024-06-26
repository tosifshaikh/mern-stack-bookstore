import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit  = (data) => console.log(data);
  return (
    <>
<div className='flex items-center h-screen justify-center '>
      <div  className="w-[500px]">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
             <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          
          <h3 className="font-bold text-lg text-black">Signup</h3>
          <div className="mt-4 space-y-2">
          <label className="text-black">Name</label > <br />
          <input type="text" placeholder="Enter Your Name" className="w-80 px-3 py-1 border rounded-md outline-none"   {...register("name", { required: true })}/> <br />
          {errors.name && <span className="text-sm text-red-500">Name is required</span>}
          </div>
          <div className="mt-4 space-y-2">
          <label className="text-black">Email</label > <br />
          <input type="email" placeholder="Enter Your Email" className="w-80 px-3 py-1 border rounded-md outline-none" {...register("email", { required: true })}/> <br /> 
          {errors.email && <span className="text-sm text-red-500">Email is required</span>}
          </div>
          <div  className="mt-4 space-y-2">
          <label className="text-black">Password</label> <br />
          <input type="password" placeholder="Enter Your Password" className="w-80 px-3 py-1 border rounded-md outline-none" {...register("password", { required: true })}/> <br />
          {errors.password && <span className="text-sm text-red-500">Password is required</span>}
          </div>
          <div className="flex justify-around mt-4">
            <button className="bg-pink-400 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
            <p className="text-black">Have an account? <button onClick={()=>{
                document.getElementById('login_modal').showModal()
            }} className="underline text-blue-500 cursor-pointer" type='submit'>Login
            </button>
           
            </p>
          </div>
          
          </form>
        </div>
      </div>
    </div> 
    <Login></Login>   
    </>
  )
}

export default SignUp