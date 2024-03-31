import { useRef, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import { menulist } from "./setup/menulist"
import Home from "./pages/Home.jsx"

function App() {
  const menuRef = useRef(null)
  const [status, setStatus] = useState("false")
  const handleClick = (e) => {
    if (!menuRef.current.contains(e.target)) {
      setStatus(() => {
        "false"
      })
    } else {
      setStatus((prev) => !prev)
    }
  }
  return (
    <div className="w-screen h-screen " onClick={handleClick}>
      <Navbar status={status} ref={menuRef} />
      <Routes>
        <Route path="/" element={<Home />} />
        {menulist.map((path, index) => {
          return (
            <Route
              key={index}
              path={path.linkurl}
              element={<path.component />}
            />
          )
        })}
      </Routes>
    </div>
  )
}

export default App
