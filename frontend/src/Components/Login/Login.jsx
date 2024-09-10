import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex justify-center items-center p-20 gap-5 '>
        <div className=' border-4 border-primary-Off-White-Peach rounded-lg md:w-96 sm:w-60 p-6 gap-4 '>
            <form className='flex flex-col space-y-6'>
                <input className='outline-none bg-primary-Off-White-Peach border-primary-Off-White-Peach rounded-lg p-2 placeholder-primary-black' placeholder='username'/>
                <input className='outline-none bg-primary-Off-White-Peach border-primary-Off-White-Peach rounded-lg p-2 placeholder-primary-black' placeholder='password'/>
            </form>
            <div className='flex justify-center items-center mt-5' >
                <button className=' sm:w-60 md:w-96 text-md bg-primary-black border-primary-Off-White-Peach rounded-lg p-2 text-primary-white'>Login</button>
            </div>
            <div className='flex mt-5 gap-1 justify-center items-center'>
                <p className='text-xs flex items-center'>Dont have an account? {" "}</p>
               <span className='text-sm'> <Link to="/"> sign up
               
                </Link></span>
            </div>
        </div>
    </div>
  )
}

export default Login