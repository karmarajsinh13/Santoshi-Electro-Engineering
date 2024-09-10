import express from "express";

import multer from "multer";
import {
  deleteclients,
  getclients,
  getclientss,
  insertclients,
  updateclients,

} from "../controller/clients.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now());
  },
});

const upload = multer({ storage: storage });

const router4 = express.Router();

router4.get("/", getclientss);
router4.get("/:id", getclients);
router4.put("/:id", upload.single("img"), updateclients);
router4.post("/", upload.single("img"), insertclients);
router4.delete("/:id", deleteclients);
export default router4;
