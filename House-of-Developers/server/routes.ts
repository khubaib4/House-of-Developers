import type { Express } from "express";
import { type Server } from "http";

// Contact form endpoint is handled by the Vercel serverless function at api/contact.js.
// This file only registers Express routes needed for local development.

export async function registerRoutes(
  httpServer: Server,
  _app: Express
): Promise<Server> {
  return httpServer;
}
