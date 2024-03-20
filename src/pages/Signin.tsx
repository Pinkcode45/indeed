import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (

        <div className="bg-[#c9d3d3a6] flex items-center justify-center">
      
          <div className="flex flex-col justify-center px-6 py-12 lg:px-8 lg:mt-5">
          
      
            <div className=" sm:mx-auto sm:w-full sm:max-w-sm ">
              <div className="bg-white p-8">
                <form className="space-y-6">
                  <h2
                    className="mt-2 text-center text-2xl leading-9 tracking-tight text-gray-600">
                    Login 
                  </h2>
      
                  
                  <div className="username">
                    <label
                   
                      className="block text-sm font-medium leading-6 text-gray-900 "
                      >Email</label>
                    <div className="mt-2 border-2 ">
                      <input
                        id="username"
                       
                        type="username"
                      
                        required
                        placeholder="Enter Your Email"
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
                  
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-[#4A00FF] hover:text-orange-700 text-right"
                        >Forgot password?</a>
                    </div>
               
      
                  <div className="mt-8">
                    <button type="submit" className=" text-white min-w-[300px] font-bold bg-[#4A00FF] btn-primary px-4 py-2">
                      Sign in
                    </button> 
                   
                  </div>
      
                 
      
                  <div>
                    
                    <div className="font-semibold">Don't have an account ?<Link to='/Signup' className="underline text-[#4A00FF]">  Sign Up</Link></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
      
        </div>
      
        )
 
}

export default Signin