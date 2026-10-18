import express from "express";
import { errorHandler } from "./src/middleware/errorHandler.js";
import { notFound } from "./src/middleware/notFound.js";
import notebookRoutes from "./src/routes/notebookRoutes.js";
import clueRoutes from "./src/routes/clueRoutes.js";
import externalRoutes from "./src/routes/externalRoutes.js";

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Mount routers
app.use("/api/notebook", notebookRoutes);
app.use("/api/clues", clueRoutes);
app.use("/api/external", externalRoutes);

// 404 handler (runs only if no route matched)
app.use(notFound);

// Error handler (runs only if an error is thrown)
app.use(errorHandler);

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});