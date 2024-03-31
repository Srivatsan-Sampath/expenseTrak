import Login from "../pages/Login.jsx"
import Register from "../pages/Register.jsx"
import Signout from "../pages/Signout.jsx"
import Expupload from "../pages/Expupload.jsx"
import Expreview from "../pages/Expreview.jsx"

const menulist = [
  {
    name: "Login",
    linkurl: "/login",
    component: Login,
    rolesAllowed: ["all"],
  },

  {
    name: "Register",
    linkurl: "/register",
    component: Register,
    rolesAllowed: ["all"],
  },
  {
    name: "UploadExp",
    linkurl: "/expupload",
    component: Expupload,
    rolesAllowed: ["all"],
  },
  {
    name: "ReviewExp",
    linkurl: "/expreview",
    component: Expreview,
    rolesAllowed: ["all"],
  },
  {
    name: "Signout",
    linkurl: "/signout",
    component: Signout,
    rolesAllowed: ["all"],
  },
]

export { menulist }
