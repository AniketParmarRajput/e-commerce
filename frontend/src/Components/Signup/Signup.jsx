import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth,provider } from '../../Firebase';
import { signInWithPopup } from 'firebase/auth';
import Googlesvg from '../SVGS/Googlesvg';


const Signup = () => {
  const [value, setValue] = useState({ name: "", email: "", pass: "", con: "" });
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [error, setError] = useState("");
  const [google,setgoogle]=useState("");
  const hand=()=>{
    signInWithPopup(auth,provider).then((data)=>{
      setgoogle(data.user.email)
      localStorage.setItem("email",data.user.email)
    })
  }
  useEffect(()=>{
    setgoogle(localStorage.getItem('email'))
  })
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!value.name || !value.email || !value.pass || !value.con) {
      setError("Fill all fields");
      return;
    }

    if (value.pass !== value.con) {
      setError("Passwords do not match");
      return;
    }
    

    setError("");
    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, value.email, value.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, { displayName: value.name });
        const userData = { name: value.name, email: value.email, password: value.pass };
        fetch("http://localhost:5000/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userData)
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle API response if needed
            console.log(data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
          localStorage.setItem("user",JSON.stringify(userData))
        navigate("/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setError(err.message);
      });
  };
  

  return (
    <>
      <div className='flex justify-center items-center p-20'>
        <div className='flex flex-col gap-4 justify-center items-center border-solid border-4 rounded-lg border-primary-Off-White-Peach p-6'>
          <div>
            <span className='text-lg font-bold '>Sign up</span>
          </div>
          <form className='space-y-4 flex flex-col justify-center sm:w-40 md:w-96'>
            <input
              className='outline-none border rounded-lg p-2 bg-primary-Off-White-Peach text-primary-black placeholder-primary-black'
              placeholder='Name'
              type='text'
              value={value.name}
              onChange={(event) => setValue((prev) => ({ ...prev, name: event.target.value }))}
            />
            <input
              className='outline-none border rounded-lg p-2 bg-primary-Off-White-Peach text-primary-black placeholder-primary-black '
              placeholder='Email'
              type='email'
              value={value.email}
              onChange={(event) => setValue((prev) => ({ ...prev, email: event.target.value }))}
            />
            <input
              className='outline-none border rounded-lg p-2 bg-primary-Off-White-Peach text-primary-black placeholder-primary-black '
              placeholder='Password'
              type='password'
              value={value.pass}
              onChange={(event) => setValue((prev) => ({ ...prev, pass: event.target.value }))}
            />
            <input
              className='outline-none border rounded-lg p-2 bg-primary-Off-White-Peach text-primary-black placeholder-primary-black '
              placeholder='Confirm password'
              type='password'
              value={value.con}
              onChange={(event) => setValue((prev) => ({ ...prev, con: event.target.value }))}
            />
          </form>
          <b className='text-red-500'>{error}</b>
          <div className='flex flex-col justify-center items-center'>
            <button
              className='flex flex-col items-center border rounded-full px-20 py-1 bg-primary-Off-White-Peach text-primary-black sm:w-40 md:w-96'
              onClick={handleSubmit}
              disabled={submitButtonDisabled}
            >
              Sign up
            </button>
            {google? navigate("/home"):
            <button className="flex flex-col items-center mt-3 px-30 py-1 text-primary-slate sm:w-40 md:w-full' "onClick={hand}><Googlesvg/></button>}
          </div>
          <div className='flex gap-1'>
            <span className='text-xs flex items-center'>Already have an account?</span>
            <Link to="/Login">
              <button className='text-sm'>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;