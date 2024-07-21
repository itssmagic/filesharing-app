import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
import DBConnection from "./database/db.js";

const app = express();
//middleware
app.use(cors());

DBConnection();
app.use("/", router);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
