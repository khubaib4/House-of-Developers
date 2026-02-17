import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    const result = contactFormSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ message: "Validation failed", errors: result.error.flatten().fieldErrors });
    }
    console.log("Contact form submission:", result.data);
    return res.status(200).json({ message: "Message sent successfully" });
  });

  return httpServer;
}
