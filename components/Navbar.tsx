import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white w-full h-1/6 border-b-2 border-gray-100 px-16 fixed top-0">
        <ul className="w-full h-full flex flex-wrap items-center justify-between">
            <li><h1>Eugene.dev</h1></li>
            <div className="flex flex-wrap gap-4">
                <li><a href="#home"><h3>Home</h3></a></li>
                <li><a href="#about"><h3>About</h3></a></li>
                <li><a href="#education"><h3>Education</h3></a></li>
                <li><a href="#projects"><h3>Projects</h3></a></li>
                <li><a href="#contact"><h3>Contact</h3></a></li>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar