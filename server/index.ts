import express, { type Express, type Request, type Response } from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer(): Promise<void> {
  const app: Express = express();
  const server = createServer(app);

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Determine static path based on environment
  const staticPath: string =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Check if static path exists
  if (!fs.existsSync(staticPath)) {
    console.warn(`⚠️  Static path does not exist: ${staticPath}`);
    console.warn(`Creating fallback for development...`);
  }

  // Serve static files with caching headers
  app.use(
    express.static(staticPath, {
      maxAge: "1d",
      etag: false,
    })
  );

  // API health check endpoint
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req: Request, res: Response) => {
    const indexPath = path.join(staticPath, "index.html");
    
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).json({
        error: "Not Found",
        message: "index.html not found",
        path: indexPath,
      });
    }
  });

  // Error handling middleware
  app.use((err: Error, _req: Request, res: Response) => {
    console.error("Server error:", err);
    res.status(500).json({
      error: "Internal Server Error",
      message: err.message,
    });
  });

  const port = parseInt(process.env.PORT || "3000", 10);
  const host = process.env.HOST || "0.0.0.0";

  server.listen(port, host, () => {
    console.log(`✅ Server running on http://${host}:${port}/`);
    console.log(`📁 Static path: ${staticPath}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
  });

  // Graceful shutdown
  process.on("SIGTERM", () => {
    console.log("SIGTERM received, shutting down gracefully...");
    server.close(() => {
      console.log("Server closed");
      process.exit(0);
    });
  });

  process.on("SIGINT", () => {
    console.log("SIGINT received, shutting down gracefully...");
    server.close(() => {
      console.log("Server closed");
      process.exit(0);
    });
  });
}

startServer().catch((error: Error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
