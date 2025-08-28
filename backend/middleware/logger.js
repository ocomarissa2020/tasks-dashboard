// backend/middleware/logger.js
export default function logger(req, res, next) {
  const start = Date.now();

  // Listen for when the response finishes
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ` +
      `[Status: ${res.statusCode}] - ${duration}ms` + "moco"
    );
  });

  next(); // pass control to next middleware
}