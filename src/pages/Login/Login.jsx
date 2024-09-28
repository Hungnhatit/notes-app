import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Link } from "react-router-dom"
import PasswordInput from '../../components/Input/PasswordInput'

const Login = () => {
  return (
    <>
      <NavBar></NavBar>

      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
          <form onSubmit={() => { }}>
            <h4 className='text-2xl mb-7'>Login</h4>

            <input type="text" placeholder='Email' className='w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded mb-4 outline-none' />

            <PasswordInput></PasswordInput>

            <button type='submit' className='w-full text-sm bg-primary text-white p-3 rounded my-1 hover:bg-blue-600 transition ease-linear duration-100'>Login</button>

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