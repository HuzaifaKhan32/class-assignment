import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex justify-evenly items-center gap-10 h-[10%]">
            <h1 className="logo text-xl font-bold"> {"<"}Huzaifa Nadeem /{">"} </h1>
            <div className=" flex justify-center itmes-center text-white font-size text-2xl">
                <Link href={"/home"} className="nav-span mx-6">
                    Home
                </Link>
                <Link href={"/about"} className="nav-span mx-6">
                    About 
                </Link>
                <Link href={"/"} className="nav-span mx-6">
                    Portfolio
                </Link>
                <Link href={"/contact"} className="nav-span mx-8">
                    Contact Me
                </Link>
            </div>
            <button className=" cursor-pointer top-4 right-[110px] text-2xl bg-purple-500 rounded-lg w-[120px] ">Hire Me</button>
        </div>
    )
}

export default Navbar;