const Navbar = () => {
    return (
        <>
            <div className=" flex justify-center itmes-center text-white font-size text-2xl mt-4">
                <span className="nav-span mx-6">
                    Home
                </span>
                <span className="nav-span mx-6">
                    About 
                </span>
                <span className="nav-span mx-6">
                    FAQ
                </span>
                <span className="nav-span mx-8">
                    Contact Me
                </span>
            </div>
            <button className="absolute cursor-pointer top-4 right-[110px] text-2xl bg-purple-500 rounded-lg w-[120px] ">Hire Me</button>
        </>
    )
}

export default Navbar;