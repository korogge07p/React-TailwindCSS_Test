import React from "react"
import { NavLink } from "react-router-dom"
//เมนูด้านบน

const Head = () => {
  return(
    <div className='bg-black h-20'>
    <div className="max-w-2xl m-auto">
      <div className="flex justify-between h-24 items-center">
        <div className="text-white no-underline font-bold font-noto">
        <nav>
            <NavLink to="/">Algorhythm Project</NavLink>
          </nav>
        </div>
        <ul className='text-white flex list-none font-noto'>
          <nav className="pr-8">
            <NavLink to="/member">เมมเบอร์</NavLink>
          </nav>
          <nav className="pr-8">
            <NavLink to="/music">เพลง</NavLink>
          </nav>
          <nav className="pr-8">
            <NavLink to="/shop">ร้านค้า</NavLink>
          </nav>
          <nav className="pr-8">
            <NavLink to="/contact">ติดต่อ</NavLink>
          </nav>
          <nav className="pr-8">
            <NavLink to="/blog">Blog</NavLink>
          </nav>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Head
