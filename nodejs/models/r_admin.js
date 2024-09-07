import express from "express";
import {
  deleteAdmin,
  getAdmin,
  getAdmins,
  insertAdmin,
  updateAdmin,
} from "../controller/admin.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now());
  },
});

const upload = multer({ storage: storage });

const router1 = express.Router();

router1.get("/", getAdmins);
router1.get("/:id", getAdmin);
router1.put("/:id",upload.single("img"), updateAdmin);
router1.post("/",upload.single("img"), insertAdmin);
router1.delete("/:id", deleteAdmin);
export default router1;
