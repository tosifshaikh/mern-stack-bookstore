import React from 'react'

function Contact() {
  return (
    <div className='flex items-center h-screen justify-center '>
<div  className="w-[500px] py-2 px-3 flex space-y-2">
    <form>
<div className='mt-4 flex space-x-10'>
    <label>Name</label>
    <input type="text" placeholder='Enter your name' className='w-80 px-3 py-1 border rounded-md outline-none'/>
</div><div className='mt-4 flex space-x-11'>
    <label>Email</label>
    <input type="text" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'/>
</div><div className='mt-4 flex space-x-4'>
    <label>Message</label>
    <textarea cols="20" rows="10" placeholder='Type your message' className='w-80 px-3 py-1 border rounded-md outline-none'></textarea>
</div>
<div  className='w-80 mt-4 justify-center flex'>
<button className='bg-blue-500 px-3 py-1 border rounded-md  text-white hover:bg-blue-900' >Submit</button>

</div>
    </form>
</div>
    </div>
  )
}

export default Contact