import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import askJijiRoute from "./routes/askJiji.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/ask-jiji", askJijiRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
