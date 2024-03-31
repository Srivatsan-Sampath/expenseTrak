// import React from "react"
import PropTypes from "prop-types"
import { forwardRef } from "react"
import { NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa"
// import { menulist } from "../../setup/menulist.js"
import Menu from "./menu.jsx"

const Navbar = forwardRef(function Navbar({ status }, ref) {
  // const status = props.status
  console.log("status", status)
  return (
    <div className="flex justify-around items-center w-full bg-cyan-400 h-16">
      <div className="w-3/12 text-center font-serif font-extrabold text-xl text-fuchsia-900 xs:text-xs sm:text-sm">
        <NavLink to="/">
          Expense
          <span className="font-mono text-3xl  xs:text-lg text-teal-600">
            T
          </span>
          rak
        </NavLink>
      </div>
      <Menu status={status} />
      {/* <ul
        className={`${
          status
            ? "bg-cyan-200 flex  flex-col w-2/12  absolute top-16 right-0 h-2/4 z-10 xs:text-sm"
            : "lg:flex xl:flex 2xl:flex sm:hidden md:hidden xs:hidden  w-5/12"
        } justify-around items-center`}
        id="menuitems"
      >
        {menulist.map((item, index) => (
          <NavLink key={index} to={item.linkurl} id={`item-${index}`}>
            {item.name}
          </NavLink>
        ))}
      </ul> */}
      <div className="w-10 h-10 rounded-full bg-white xs:hidden sm:hidden "></div>

      <div
        className="w-1/12 bg-color-maroon hover:cursor-pointer font-xl lg:hidden xl:hidden 2xl:hidden"
        ref={ref}
        id="hamburger"
      >
        {<FaBars />}
      </div>
    </div>
  )
})
Navbar.propTypes = {
  status: PropTypes.string,
}

export default Navbar
