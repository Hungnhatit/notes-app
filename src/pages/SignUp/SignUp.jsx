import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar';
import PasswordInput from '../../components/Input/PasswordInput';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name!");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter your email!");
      return;
    }

    if (!password) {
      setError("Please enter your password!");
      return;
    }

    setError("");

    // Sign up API call
    try {
      const res = await axiosInstance.post("/create-account", {
        fullName: name,
        email: email,
        password: password
      });

      if (res.data && res.data.error) {
        setError(res.data.message);
        return;
      }

      if (res.data && res.data.accessToken) {
        localStorage.setItem("token", res.data.accessToken);
        navigate("/login");
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
          <form onSubmit={handleSignUp}>
            <h4 className='text-2xl mb-7'>Sign Up</h4>
            <input
              type="text"
              placeholder='Your name'
              className='w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded mb-4 outline-none'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
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
              className='w-full text-sm bg-primary text-white p-3 rounded my-1 hover:bg-blue-600 transition ease-linear duration-100'>Sign up</button>

            <p className='text-sm text-center mt-4'>
              Already have account? {" "}
              <Link to="/login" className='font-medium text-primary underline'>Sign in</Link>
            </p>
          </form>
        </div>
      </div>







    </>
  )
}

export default SignUp