import express from "express"
import multer from "multer"
const upload = multer({ dest: "Expensereceipts/" })
import { ExpenseUpload } from "../controllers/ExpenseController.js"

const ExpRouter = express.Router()

ExpRouter.post("/expupload", upload.array("files"), ExpenseUpload)

export { ExpRouter }
