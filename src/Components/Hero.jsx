import React from 'react'

export const Hero = () => {
  return (
    <div className="bg-[#151515] text-[#fff] flex max-sm:flex-col flex-row-reverse py-4 ">
      <div className="size-[280px] md:size-[300px] lg:size-[500px] pl-[100px] md:pl-[1px]">
        <img
          className="md:w-[270px] lg:w-[100%] lg:ml-[-109px] lg:mt-[-20px]"
          src="/src/assets/odion.jpeg"
          alt=""
        />
      </div>
      <div className=" max-sm:py-10 md:w-[455px] lg:w-[100%] md:pb-[100px] lg:px-[100px] lg:pb-[150px]">
        <h1
          className="text-[40px] md:text-[58px] lg:text-[88px] text-center md:w-[405px] lg:w-[800px] md:text-left 
        font-semibold font-spacegrotesk leading-10 md:leading-[50px] lg:leading-[80px] px-4 md:pl-4 lg:px-[13px] py-10"
        >
          Nice to meet you! I’m{" "}
          <span className="active:border-b-2 border-[#4EE1A0]">Adam Keyes</span>
        </h1>
        <p className="px-6 md:w-[400px] lg:w-[480px] text-center text-[#d9d9d9]  text-[16px] md:text-[18px] md:text-left lg:ml-[-10px] ">
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <div className="max-sm:mt-4 text-[16px] md:text-[18px] max-sm:ml-[140px] md:px-6 md:mt-[70px] lg:ml-[-10px]">
          <p className=" active:border-b-2 w-[92px] border-[#4EE1A0]">contact me</p>
        </div>
      </div>

  
    </div>
  );
}
