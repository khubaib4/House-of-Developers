import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { Resend } from "resend";
import { escapeHtml, buildContactEmailHtml } from "./email-utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return res.status(503).json({ message: "Email service is not configured" });
    }

    const result = contactFormSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ message: "Validation failed", errors: result.error.flatten().fieldErrors });
    }

    const { name, email, phone, company, service, budget, message, timeline } = result.data;

    try {
      const { data, error } = await resend.emails.send({
        from: "House of Developers <noreply@houseofdevelopers.co.uk>",
        to: ["khubaib@houseofdevelopers.co.uk"],
        replyTo: email,
        subject: `New Inquiry from ${escapeHtml(name)}${service ? ` - ${escapeHtml(service)}` : ""}`,
        html: buildContactEmailHtml({ name, email, phone, company, service, budget, message, timeline }),
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ message: "Failed to send email" });
      }

      console.log("Contact form email sent:", data);
      return res.status(200).json({ message: "Message sent successfully", data });
    } catch (error) {
      console.error("Email send error:", error);
      return res.status(500).json({ message: "Failed to send email. Please try again." });
    }
  });

  return httpServer;
}
