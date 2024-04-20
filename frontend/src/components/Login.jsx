import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit  = (data) => console.log(data);
  return (
    <div className="">
      <dialog id="login_modal" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          
          <h3 className="font-bold text-lg text-black">Login</h3>
          <div className="mt-4 space-y-2">
          <label className="text-black">Email</label > <br />
          <input type="email" placeholder="Enter Your Email" className="w-80 px-3 py-1 border rounded-md outline-none"
          {...register("email", { required: true })}
          /> <br />
          {errors.email && <span className="text-sm text-red-500">Email is required</span>}
          </div>
          <div  className="mt-4 space-y-2">
          <label className="text-black">Password</label> <br />
          <input type="password" placeholder="Enter Your Password" className="w-80 px-3 py-1 border rounded-md outline-none" {...register("password", { required: true })} /> <br />
          {errors.password && <span className="text-sm text-red-500">Password is required</span>}
          </div>
          <div className="flex justify-around mt-4">
            <button className="bg-pink-400 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
            type="submit">Login</button>
            <p className="text-black">Not registerd? <Link to="/signup" className="underline text-blue-500 cursor-pointer">Signup</Link></p>
          </div>
          </form>

        </div>
      </dialog>
    </div>
  );
}

export default Login;
