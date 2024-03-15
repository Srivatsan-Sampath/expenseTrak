import React from "react"
import { menulist } from "../../setup/menulist"

const Navbar = () => {
  return (
    <div className="">
      <ul>
        {menulist.map((listitem) => (
          <li key={listitem.id}>{listitem.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
