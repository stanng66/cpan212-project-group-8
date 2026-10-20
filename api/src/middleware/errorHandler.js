import { HttpError } from "../utils/httpError.js";

// Express recognizes this as an error handler because of the four parameters
export function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: { message: 'Request body must be valid JSON' } });
  }

  if (err instanceof HttpError) {
    return res.status(err.status).json({
      error: { message: err.message, details: err.details }
    });
  }

  // Anything else is a bug that is log to the terminal/console, not to the client
  console.error(err);
  res.status(500).json({ error: { message: 'Internal server error' } });
}
