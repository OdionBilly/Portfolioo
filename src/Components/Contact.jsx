import React from 'react'
// import { Link } from 'react-router-dom'

export const Contact = () => {
  return (
    <div className="bg-[#242424] py-10 border-b-[0.1px]">
      <div className="lg:flex justify-between align-baseline  ">
        <div className="bg-[#242424] text-[#fff] text-center lg:text-left font-spacegrotesk px-5 lg:px-[100px] py-10 lg:py-6">
          <h1 className="text-[40px] lg:text-[80px] ">Contact</h1>
          <p className="text-[#d9d9d9] md:px-[170px] lg:px-10 lg:text-left lg:ml-[-30px]">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-[#242424] text-[#fff] px-5 md:px-[190px] py-8 lg:py-10 ">
          <form className=" font-spacegrotesk flex flex-col space-y-4 w-[342px] md:w-[400px] ">
            <input
              type="text"
              placeholder="NAME"
              className="h-12 w-full px-2 border-b-[1px] bg-transparent outline-none"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="h-12 w-full px-2 placeholder:white outline-none border-b-[1px] bg-transparent" required
            />
            <input
              type="textarea"
              placeholder="MESSAGE"
              className="h-12 w-full px-2 pb-8 placeholder:white border-b-[1px] bg-transparent outline-none"
            />
          </form>
          <button
            className="ml-[235px] px-2 text-[14px]  border-b-2 mt-5 border-[#4EE1A0]"
            type="button"
          >
           SEND MESSAGE 
          </button>
        </div>
      </div>
    </div>
  );
}
