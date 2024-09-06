import express from "express";
import cors from "cors";
import router1 from "./models/r_admin.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));


app.use("/see/admin", router1);



app.listen(8080, () => {
  console.log("Server is running on 8080 port...");
});
