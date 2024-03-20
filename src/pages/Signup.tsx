import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (

    <div className="bg-[#c9d3d3a6] flex items-center justify-center   ">

<div className="flex flex-col justify-center px-6 py-4 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>

      <div >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="bg-white p-8">
            <form className="space-y-6">
              <h2
                className="mt-2 text-center text-2xl leading-9 tracking-tight text-gray-600">
                Sign up
              </h2>
              <h2
                className="mt-2 font-bold text-center text-2xl leading-9 tracking-tight text-gray-600">
              Create an account!
              </h2>
              <div className="username">
                <label
        
                  className="block text-sm font-medium leading-6 text-gray-900"
                  >username</label>
                <div className="mt-2 border-2">
                  <input
                    id="username"
        
                    type="username"
        
                    required
                    placeholder="Enter Username"
                    className="text-input p-2 focus:outline-none"
                  />
                </div>
              </div>
              <div className="Email">
                <label
        
                  className="block text-sm font-medium leading-6 text-gray-900"
                  >Email</label>
                <div className="mt-2 border-2">
                  <input
                    id="Email"
        
                    type="Email"
        
                    required
                    placeholder="Enter Your Email"
                    className="text-input p-2 focus:outline-none"
                  />
                </div>
              </div>
              <div className="Number">
                <label
        
                  className="block text-sm font-medium leading-6 text-gray-900"
                  >Phone Number</label>
                <div className="mt-2 border-2">
                  <input
                    id="Number"
        
                    type="number"
        
                    required
                    placeholder="Enter Your Phone Number"
                    className="text-input p-2 focus:outline-none"
                  />
                </div>
              </div>
              <div className="password">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900"
                    >Password</label>
        
                </div>
                <div className="mt-2 border-2">
                  <input
                    id="password"
        
                    type="password"
        
                    required
                    placeholder="password"
                    className="text-input p-2 focus:outline-none"
                  />
                </div>
              </div>
        
        
              <div className="">
                <button type="submit" className=" text-gray-50 min-w-[300px] font-bold bg-[#4A00FF] btn-primary px-4 py-2">
                  Register
                </button>
        
              </div>
        
              <div>
        
                <div className="font-semibold">Already have an account ?<Link to='/Signin' className="underline text-[#4A00FF]">  Sign In</Link></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

</div>

  )
}

export default Signup;