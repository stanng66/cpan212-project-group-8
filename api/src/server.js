import express from "express";

import { errorHandler } from "./src/middleware/errorHandler.js";
import { notFound } from "./src/middleware/notFound.js";

const app = express();

app.use(express.json());



// 404 handler (runs only if no route matched)
app.use(notFound);
// Error handler (runs only if an error is thrown)
app.use(errorHandler);

const PORT = process.env.PORT ?? 4000;
app.listen(TPOR, () => {
  console.log(`Server running on port ${PORT}`);
});