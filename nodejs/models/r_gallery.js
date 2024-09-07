import express from "express";

import multer from "multer";
import {
  deletegallery,
  getgallery,
  getgallerys,
  insertgallery,
  updategallery,
  Totalimages,
} from "../controller/gallery.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now());
  },
});

const upload = multer({ storage: storage });

const router2 = express.Router();

router2.get("/", getgallerys);
router2.get("/", Totalimages);
router2.get("/:id", getgallery);
router2.put("/:id", upload.single("img"), updategallery);
router2.post("/", upload.single("img"), insertgallery);
router2.delete("/:id", deletegallery);
export default router2;
