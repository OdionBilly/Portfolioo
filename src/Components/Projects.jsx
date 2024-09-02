import React from 'react'

export const Projects = () => {
  return (
    <div className="bg-[#151515] text-[#fff]">
      <div className="flex justify-between  items-baseline  px-6 md:px-10 lg:px-[100px] py-9">
        <h1 className="font-spacegrotesk text-[30px] md:text-[72px] lg:text-[88px]">
          Projects
        </h1>
        <p className="font-spacegrotesk text-[15px] border-b-2 border-[#4EE1A0]">
          CONTACT ME
        </p>
      </div>

      {/* project Examples */}
      <div className="">
        <div className="grid md:grid-cols-2 gap-y-10 md:px-5 lg:px-[80px] md:py-10 ">
          <div className="px-6 relative  ">
            <p className="  absolute  bg-[gren] top-14 left-[130px] lg:top-[130px] lg:left-[250px] opacity-6 text-[#fff]  p2-10 border-b-2 border-[#4EE1A0] pb-2 ">
              VIEW PROJECT
            </p>

            <p className=" absolute  bg-[gren] top-20 left-[130px] lg:top-[155px] lg:left-[250px] opacity-6 text-[#fff] w-[90px] py-10 border-b-2 border-[#4EE1A0] pb-2">
              VIEW CODE
            </p>

            <img
              src="/src/assets/Desktop-image/Bitmap-1.png"
              className=" active:opacity-10 z-1"
              alt=""
            />

            <h1 className=" font-spacegrotesk text-[24px] pt-10">
              DESIGN PORTFOLIO
            </h1>
            <ul className="flex gap-4 font-spacegrotesk text-[#d9d9d9]">
              <li>HTML</li>
              <li>CSS</li>
            </ul>

            <ul className="flex gap-10 font-spacegrotesk mt-7 text-[#d9d9d9]">
              <li>VIEW PROJECT</li>
              <li>VIEW CODE</li>
            </ul>
          </div>
          {/* breake   */}

          {/* second  */}
          <div className="px-6 pt-4 md:pt-0">
            <div className="relative">
              <p className="  absolute  bg-[gren] top-14 left-[130px] lg:top-[130px] lg:left-[250px] opacity-6 text-[#fff]  p2-10 border-b-2 border-[#4EE1A0] pb-2 ">
                VIEW PROJECT
              </p>

              <p className=" absolute  bg-[gren] top-20 left-[130px] lg:top-[155px] lg:left-[250px] opacity-6 text-[#fff] w-[90px] py-10 border-b-2 border-[#4EE1A0] pb-2">
                VIEW CODE
              </p>

              <img
                src="/src/assets/Desktop-image/desk-image-2.png"
                className="active:opacity-10"
                alt=""
              />
              <h1 className="font-spacegrotesk text-[24px] pt-10">
                E-LEARNING LANDING PAGE
              </h1>
              <ul className="flex gap-4 font-spacegrotesk text-[#d9d9d9]">
                <li>HTML</li>
                <li>CSS</li>
              </ul>

              <ul className="flex gap-10 font-spacegrotesk mt-7">
                <li>VIEW PROJECT</li>
                <li>VIEW CODE</li>
              </ul>
            </div>
          </div>

          {/* third */}
          <div className="px-6 mt-10 md:pt-0">
            <div className="relative">
              <p className="  absolute  bg-[gren] top-14 left-[130px] lg:top-[130px] lg:left-[250px] opacity-0 text-[#fff]  p2-10 border-b-2 border-[#4EE1A0] pb-2 ">
                VIEW PROJECT
              </p>

              <p className="absolute  bg-[gren] top-20 left-[130px] lg:top-[155px] lg:left-[250px] opacity-0 text-[#fff] w-[90px] py-10 border-b-2 border-[#4EE1A0] pb-2">
                VIEW CODE
              </p>

              <img
                src="/src/assets/Desktop-image/desk-image-3.png"
                className="active:opacity-20"
                alt=""
              />

              <h1 className=" font-spacegrotesk text-[24px] pt-10">
                TODO WEB APP
              </h1>
              <ul className="flex gap-4 font-spacegrotesk text-[#d9d9d9]">
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
              </ul>

              <ul className="flex gap-10 font-spacegrotesk mt-7">
                <li>VIEW PROJECT</li>
                <li>VIEW CODE</li>
              </ul>
            </div>
          </div>

          {/* fourth */}
          <div className="px-6 pt-10">
            <img
              src="/src/assets/Desktop-image/desk-image-4.png"
              className="active:opacity-10"
              alt=""
            />

            <h1 className=" font-spacegrotesk text-[24px] pt-10">
              ENTERTAINMENT WEB APP
            </h1>
            <ul className="flex gap-4 font-spacegrotesk text-[#d9d9d9]">
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
            </ul>

            <ul className="flex gap-10 font-spacegrotesk mt-7">
              <li>VIEW PROJECT</li>
              <li>VIEW CODE</li>
            </ul>
          </div>

          {/* fifth */}
          <div className="px-6 pt-10">
            <img
              src="/src/assets/mobile-image/mobile-image-2.png"
              className="active:opacity-10"
              alt=""
            />

            <h1 className=" font-spacegrotesk text-[24px] pt-10">
              MEMORY GAME
            </h1>
            <ul className="flex gap-4 font-spacegrotesk text-[#d9d9d9]">
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
            </ul>

            <ul className="flex gap-10 font-spacegrotesk mt-7">
              <li>VIEW PROJECT</li>
              <li>VIEW CODE</li>
            </ul>
          </div>

          {/* sixth */}
          <div className="px-6 pt-10">
            <img
              src="/src/assets/mobile-image/mobile-image-6.png"
              className="active:opacity-10"
              alt=""
            />
            <h1 className=" font-spacegrotesk text-[24px] pt-10">
              ART GALLERY SHOWCASE
            </h1>
            <ul className="flex gap-4 font-spacegrotesk text-[#d9d9d9]">
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
            </ul>

            <ul className="flex gap-10 font-spacegrotesk mt-7">
              <li>VIEW PROJECT</li>
              <li>VIEW CODE</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
