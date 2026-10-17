import express from "express";
import notebookRoutes from "./routes/notebookRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/notebook", notebookRoutes);

app.listen(4000, () => {
    console.log("Server running on port 4000");
});