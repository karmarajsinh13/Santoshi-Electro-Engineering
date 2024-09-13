import express from "express";
import {
  deleteproduct,
  getproduct,
  getproducts,
  insertproduct,
  updateproduct,
  Totalproduct,

} from "../controller/products.js";
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

const router5 = express.Router();

router5.get("/", getproducts);
router5.get("/", Totalproduct);

router5.get("/:id", getproduct);
router5.put("/:id",upload.single("img"), updateproduct);
router5.post("/",upload.single("img"), insertproduct);
router5.delete("/:id", deleteproduct);
export default router5;
