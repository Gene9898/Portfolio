import React,{useState} from 'react'
import MobileNav from './MobileNav'
import { handleScroll } from '@/lib/utils';
const Navbar = () => {

  return (
    <nav className="bg-white w-full h-1/6 border-b-2 border-gray-100 px-16 fixed top-0">
        <ul className="w-full h-full flex items-center justify-between">
            <li className="p-2 hover:text-blue-500 hover:pt-1 hover:scale-125"><a href="\"><h1>Eugene.dev</h1></a></li>
            <div className="flex flex-wrap gap-4 max-h-0 overflow-hidden mobileNav:max-h-full items-center">
                <li className="p-3 hover:text-blue-500 hover:pt-1 hover:scale-125" onClick={()=>{handleScroll("about")}}><h3>About</h3></li>
                <li className="p-3 hover:text-blue-500 hover:pt-1 hover:scale-125" onClick={()=>{handleScroll("education")}}><h3>Education</h3></li>
                <li className="p-3 hover:text-blue-500 hover:pt-1 hover:scale-125" onClick={()=>{handleScroll("projects")}}><h3>Projects</h3></li>
                <li className="p-3 hover:text-blue-500 hover:pt-1 hover:scale-125" onClick={()=>{handleScroll("contact")}}><h3>Contact</h3></li>
            </div>
            <MobileNav/>
        </ul>
    </nav>
  )
}

export default Navbar