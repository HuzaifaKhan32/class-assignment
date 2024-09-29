"use client";


const Page = () => {
  return (
    <>
      <div className="content w-full h-screen flex items-center justify-between">
        <div className="About-me">Hi,
          <div>My name is <span className="text-[#F2E205]">Huzaifa</span></div>
          <div>I am a Frontend Developer</div>
          <p>I am a passionate front-end developer currently studying at GIAIC. My focus is on building responsive and user-friendly web interfaces using the latest technologies like HTML, CSS, and JavaScript. Alongside my studies, I am constantly learning and improving my skills in web development to stay up-to-date with industry trends. In the future, I aim to expand my knowledge by diving into machine learning, as I believe it will complement my development skills and open up new opportunities for innovation in my career.</p>
          <div className="button">

            <button className=" text-xl bg-purple-500 rounded-lg w-[160px] font-normal px-2 py-3 ml-0 m-4" >Download CV</button>
            <button className=" text-xl bg-purple-500 rounded-lg w-[160px] font-normal px-2 py-3">More About Me</button>
          </div>
        </div>
        <div className="picture-cont">
          <div className="picture"></div>
        </div>
      </div>
    </>
  )
}

export default Page;