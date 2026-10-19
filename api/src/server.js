import express from "express";
import notebookRoutes from "./routes/notebookRoutes.js";
import clueRoutes from "./routes/clueRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { notFound } from "./middleware/notFound.js";

const app = express();

app.use(express.json());

// notebook API routes
app.use("/api/notebook",notebookRoutes);

// Clue API routes
app.use("/api/clues", clueRoutes);

// 404 handler (runs only if no route matched)
app.use(notFound);
// Error handler (runs only if an error is thrown)
app.use(errorHandler);

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});