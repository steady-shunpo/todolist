import React from 'react'

const Navbar = () => {
  return (
<nav className='flex justify-around align-middle py-5'>
    <div className="navleft">
        <ul className='flex gap-10'>
            <li>Home</li>
            <li>Your Tasks</li>
        </ul>
    </div>
    <div className="navright w-40">
        <div className="c1"></div>
        <div className="c2"></div>
        <div className="c3"></div>
    </div>
</nav>
  )
}

export default Navbar
