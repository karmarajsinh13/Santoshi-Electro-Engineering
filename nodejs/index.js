import express from "express";
import cors from "cors";
import router1 from "./models/r_admin.js";
import router2 from "./models/r_gallery.js";
import router3 from "./models/r_contact_us.js";
import router4 from "./models/r_clients.js";
import router5 from "./models/r_product.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/see/admin", router1);
app.use("/see/gallery", router2);
app.use("/see/contact_us", router3);
app.use("/see/clients", router4);
app.use("/see/products", router5);

app.listen(8080, () => {
  console.log("Server is running on 8080 port...");
});
