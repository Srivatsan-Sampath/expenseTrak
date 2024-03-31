// import React from "react"
import { useState } from "react"
import axios from "axios"

const Expupload = () => {
  const [username, setUsername] = useState("")
  const [expdate, setExpdate] = useState("")
  const [exptype, setExptype] = useState("")
  const [files, setFiles] = useState([])
  const [accounthead, setAccounthead] = useState("")
  const [comments, setComments] = useState("")
  const [msg, setMsg] = useState("")

  const handleUpload = async (event) => {
    console.log("In Handle Upload")
    event.preventDefault()
    const formdata = new FormData(event.target)
    const { data } = await axios.post(
      "http://localhost:3501/expupload",
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )

    if (data) {
      setMsg("File uploaded")
      setUsername("")
      setExpdate("")
      setExptype("")
      setAccounthead("")
      setComments("")
      setFiles(null)
    } else {
      setMsg("Error while  uploading")
    }
  }
  return (
    <div className="flex flex-col text-sm justify-around items-center  w-3/4 lg:w-3/6 mt-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-solid border-2 border-blue-500 rounded-md h-5/6 md:w-5/6 sm:w-5/6">
      <h2 className="text-md text-orange-800 font-bold mb-4">Expense Upload</h2>
      <form
        action="#"
        method="POST"
        onSubmit={handleUpload}
        className="flex flex-col w-full h-full justify-around items-center gap-4"
      >
        <input
          type="text"
          name="username"
          autoFocus
          id=""
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border-solid border-2 border-blue-800 pl-2 rounded-md w-3/4 font-medium"
        />
        <input
          type="date"
          name="expdate"
          id=""
          placeholder="date"
          value={expdate}
          onChange={(e) => setExpdate(e.target.value)}
          className="border-solid border-2 border-blue-800 pl-2 rounded-md w-3/4"
        />
        <select
          name="exptype"
          id="exptype"
          value={exptype}
          onChange={(e) => setExptype(e.target.value)}
          className="w-3/4 border-solid border-2 pl-2 border-blue-800 rounded-md"
          required
        >
          <option value="" disabled hidden>
            Expense Category
          </option>
          <option value="project">Project</option>
          <option value="transportation">Transportation</option>
          <option value="food">Food and Beverage</option>
          <option value="stay">Accomadation</option>
          <option value="misc">Miscellaneous</option>
        </select>
        <select
          name="accounthead"
          id=""
          className="w-3/4 border-solid border-2 pl-2 border-blue-800 rounded-md"
          value={accounthead}
          onChange={(e) => setAccounthead(e.target.value)}
        >
          <option value="" disabled hidden>
            Account Head
          </option>
        </select>
        <textarea
          name="comments"
          id="comments"
          cols="15"
          rows="3"
          className="w-3/4 border-solid border-2 pl-2 border-blue-800 rounded-md "
          placeholder="Expense related comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
        <input
          type="file"
          name="files"
          defaultValue={files}
          multiple
          accept="application/pdf, image/png image/jpeg application/doc "
          onChange={(e) => setFiles(e.target.files)}
          className="border-solid border-2  border-blue-800  rounded-md w-3/4 h-8 file:bg-stone-200 file:rounded-sm file:align-middle file:h-full hover:file:cursor-pointer hover:file:bg-cyan-100 file:font-bold file:border-0 file:mr-4"
        />
        <button
          type="submit"
          className={`border-solid border-2 border-blue-800   rounded-md mb-2 pl-2 pr-2 h-8 w-20 bg-cyan-300 hover:bg-cyan-600 hover:cursor-pointer }`}
        >
          Upload
        </button>
      </form>
      {msg ? <p>{msg}</p> : ""}
    </div>
  )
}

export default Expupload
