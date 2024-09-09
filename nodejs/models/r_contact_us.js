import express from "express";
import {
  deleteContact,
  getContacts,
  getContact,
  insertContact,
  updateContact,
} from "../controller/contact_us.js";

const router3 = express.Router();

router3.get("/", getContacts);
router3.get("/:id", getContact);
router3.put("/:id", updateContact);
router3.post("/", insertContact);
router3.delete("/:id", deleteContact);
export default router3;
