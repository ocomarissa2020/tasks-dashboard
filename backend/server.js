import express from "express";
import cors from "cors";
import logger from "./middleware/logger.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/", taskRoutes); // use the router

const PORT = 4000;
app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
