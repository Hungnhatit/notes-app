import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Link, useNavigate } from "react-router-dom"
import PasswordInput from '../../components/Input/PasswordInput'
import { validateEmail } from '../../utils/helper'
import axiosInstance from '../../utils/axiosInstance.js'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email!");
      return;
    }
    if (!password) {
      setError("Please enter the password!");
      return;
    }
    setError("");

    // Login API call
    try {
      const res = await axiosInstance.post("/login", {
        email: email,
        password: password
      });

      if (res.data && res.data.accessToken) {
        localStorage.setItem("token", res.data.accessToken);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error accured. Please try again.");
      }
    }

  }



  return (
    <>
      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
          <form onSubmit={handleLogin}>
            <h4 className='login-header text-2xl text-center mb-10 font-'>Login to OneWork</h4>

            <input
              type="text"
              placeholder='Email'
              className='w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded mb-4 outline-none'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></PasswordInput>

            {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

            <button
              type='submit'
              className='w-full text-sm bg-primary text-white p-3 rounded my-1 hover:bg-blue-600 transition ease-linear duration-100'>Login</button>

            <p className='text-sm text-center mt-4'>
              Not registered yet? {" "}
              <Link to="/sign-up" className='font-medium text-primary underline'>Create an account</Link>
            </p>
          </form>
        </div>
      </div>


    </>
  )
}

export default Login