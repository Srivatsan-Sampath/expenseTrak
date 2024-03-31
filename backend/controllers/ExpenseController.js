const ExpenseUpload = (req, res) => {
  console.log("In Exp Controller")
  console.log("body", req.body)
  console.log("files", req.files)
  if (!req.body) {
    return res.json({ message: "No data sent to be uploaded" })
  } else {
    const { username, expdate, exptype, accounthead, comments } = req.body
    const files = req.files
    console.log("type of files", typeof files)

    console.log("username", username)
    console.log("expdate", expdate)
    console.log("exptype", exptype)
    console.log("accounthead", accounthead)
    console.log("comments", comments)
    console.log("files", files)

    return res.status(200).json({
      files: files,
      message: `user ${username}'s files successfully received`,
    })
  }
}

export { ExpenseUpload }
