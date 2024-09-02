import React from 'react'
import { LinkedinBoxFill, TwitterFill,GithubFill } from "akar-icons";





export const Header = () => {
  return (
    <div className="bg-[#151515]">
      <div className="flex max-sm:flex-col md:flex-col-1 justify-between items-baseline max-sm:ml-[120px] md:px-9 lg:px-[110px] py-4">
        <h1 className="text-[#ffff] font-spacegrotesk text-[20px] md:text-[32px]">
          adamkeyes
        </h1>
        <div className="flex gap-6">
          {<GithubFill className="bg-[#fff] size-5" />}
          <img
            src="/src/assets/frontend.png"
            className="size-5 bg-[#ada4a4]"
            alt=""
          />
          {/* {<SiFrontendmentor className="bg-[#fff]" />} */}
          {<LinkedinBoxFill className="bg-[#fff] size-5" />}
          {<TwitterFill className=" bg-[#c8b8b8] size-5" />}
        </div>
      </div>
    </div>
  );
}
