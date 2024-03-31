import { menulist } from "../../setup/menulist.js"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"

const Menu = ({ status }) => {
  return (
    <ul
      className={`${
        status
          ? "bg-cyan-200 flex  flex-col w-3/12  absolute top-16 right-0 h-2/4 z-10 xs:text-sm"
          : "lg:flex xl:flex 2xl:flex sm:hidden md:hidden xs:hidden  w-5/12"
      } justify-around items-center`}
      id="menuitems"
    >
      {menulist.map((item, index) => (
        <NavLink key={index} to={item.linkurl} id={`item-${index}`}>
          {item.name}
        </NavLink>
      ))}
    </ul>
  )
}

Menu.propTypes = {
  status: PropTypes.string,
}

export default Menu
