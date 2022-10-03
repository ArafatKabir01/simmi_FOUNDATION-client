import React, { useState } from 'react'
import { AiTwotoneMail , AiFillFacebook ,AiFillInstagram } from 'react-icons/ai';
import { GoLocation} from 'react-icons/go';
import { IoIosCall} from 'react-icons/io';

const Navbar = () =>{
    const [navbar , setNavbar] = useState(true)
    const changeNav = ()=>{
        if(window.scrollY >= 45){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll' , changeNav)
    return (
            <div className={navbar ? "fixed top-0 left-0 right-0 z-30 bg-white shadow-2xl" : "z-30"}>
                <div className={navbar? "hidden" : "border-2 hidden md:block lg:block divide-neutral-300"}>
                    <div className='pt-2 pb-2 flex items-center container m-auto justify-between'>
                    <div className='flex gap-4'>
                        <h2><AiTwotoneMail className='inline-block w-6 h-6 hover:text-amber-600'/> support@simmifoundation.org</h2>
                        <h2><IoIosCall className='inline-block w-6 h-6 hover:text-amber-600'/>(+91) 70152 - 95025</h2>
                    </div>
                    <div className='flex gap-2'>
                        <AiFillFacebook className='w-6 h-6 hover:text-amber-600'/>
                        <AiFillInstagram className='w-6 h-6 hover:text-amber-600'/>
                        <GoLocation className='w-6 h-6 hover:text-amber-600'/>
                    </div>
                </div>
            </div> 
            <div className='container m-auto '>
            <div className="navbar bg-base-100 p-0">
            <div className="navbar-start z-30">
                <div className="dropdown z-30">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact z-30 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Donate</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Gallery</a></li>
                    <li><a>Vlounteer</a></li>
                    <li><a>Events</a></li>
                    <li><a>Careers</a></li>
                    <li><a>Contact</a></li>
                </ul>
                </div>
                {/* pc */}
                <div className='flex items-center gap-4'>
                    <img className='w-26 h-12' src='https://simmifoundation.org/home/images/logo.png'></img>
                    <a className="text-xl"> SIMMI FOUNDATION</a>
                </div>
                
            </div>
            <div className="navbar-end hidden lg:flex z-30">
                <ul className="menu menu-horizontal z-30 ">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Donate</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Gallery</a></li>
                    <li><a>Vlounteer</a></li>
                    <li><a>Events</a></li>
                    <li><a>Careers</a></li>
                    <li><a>Contact</a></li>

                </ul>
            </div>
            </div>
            </div>
            </div>
    )
}

export default Navbar;