// import React from "react"

import { NavLink } from "react-router-dom"

const Dropdown = (listitem) => {
    return (
        {
            listitem.map((item) => {
                <NavLink>{item.name}</NavLink>
        }
        
      )}
  )
}

export default Dropdown
