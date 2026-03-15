import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildContactEmailHtml(data) {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const phone = data.phone ? escapeHtml(data.phone) : "";
  const company = data.company ? escapeHtml(data.company) : "";
  const service = escapeHtml(data.service);
  const budget = data.budget ? escapeHtml(data.budget) : "";
  const message = escapeHtml(data.message);
  const timeline = escapeHtml(data.timeline);

  const safeEmailUri = encodeURIComponent(data.email);
  const safeServiceUri = encodeURIComponent(data.service || "our services");
  const safePhone = data.phone ? encodeURIComponent(data.phone) : "";

  const submittedDate = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: linear-gradient(135deg, #10B981 0%, #059669 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">
        New Contact Form Submission
      </h1>
    </div>
    <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
      <div style="margin-bottom: 25px;">
        <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 15px 0; padding-bottom: 10px; border-bottom: 2px solid #10B981;">
          Contact Information
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 140px; vertical-align: top;">
              <strong>Name:</strong>
            </td>
            <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">
              ${name}
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-size: 14px; vertical-align: top;">
              <strong>Email:</strong>
            </td>
            <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">
              <a href="mailto:${safeEmailUri}" style="color: #10B981; text-decoration: none;">
                ${email}
              </a>
            </td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-size: 14px; vertical-align: top;">
              <strong>Phone:</strong>
            </td>
            <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">
              <a href="tel:${safePhone}" style="color: #10B981; text-decoration: none;">
                ${phone}
              </a>
            </td>
          </tr>
          ` : ""}
          ${company ? `
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-size: 14px; vertical-align: top;">
              <strong>Company:</strong>
            </td>
            <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">
              ${company}
            </td>
          </tr>
          ` : ""}
        </table>
      </div>

      ${service || budget || timeline ? `
      <div style="margin-bottom: 25px;">
        <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 15px 0; padding-bottom: 10px; border-bottom: 2px solid #10B981;">
          Project Details
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          ${service ? `
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 140px; vertical-align: top;">
              <strong>Service:</strong>
            </td>
            <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">
              ${service}
            </td>
          </tr>
          ` : ""}
          ${budget ? `
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-size: 14px; vertical-align: top;">
              <strong>Budget:</strong>
            </td>
            <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">
              ${budget}
            </td>
          </tr>
          ` : ""}
          ${timeline ? `
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-size: 14px; vertical-align: top;">
              <strong>Timeline:</strong>
            </td>
            <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">
              ${timeline}
            </td>
          </tr>
          ` : ""}
        </table>
      </div>
      ` : ""}

      <div style="margin-bottom: 25px;">
        <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 15px 0; padding-bottom: 10px; border-bottom: 2px solid #10B981;">
          Message
        </h2>
        <div style="background: #f9fafb; padding: 15px; border-left: 4px solid #10B981; border-radius: 4px;">
          <p style="margin: 0; color: #1f2937; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
            ${message}
          </p>
        </div>
      </div>

      <div style="text-align: center; margin: 30px 0;">
        <a href="mailto:${safeEmailUri}?subject=${encodeURIComponent(`Re: Your inquiry about ${data.service || "our services"}`)}"
           style="display: inline-block; background: #10B981; color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: 600; font-size: 14px;">
          Reply to ${name}
        </a>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
        <p style="margin: 0; color: #9ca3af; font-size: 12px;">
          Submitted on ${submittedDate}
        </p>
        <p style="margin: 10px 0 0 0; color: #9ca3af; font-size: 12px;">
          House of Developers | <a href="https://houseofdevelopers.co.uk" style="color: #10B981; text-decoration: none;">houseofdevelopers.co.uk</a>
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return res.status(503).json({ message: "Email service is not configured" });
  }

  const { name, email, phone, company, service, budget, message, timeline } = req.body || {};

  const errors = {};
  if (!name || name.length < 2) errors.name = ["Name is required"];
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = ["Valid email is required"];
  if (!service || service.length < 1) errors.service = ["Please select a service"];
  if (!message || message.length < 20) errors.message = ["Please provide at least 20 characters"];
  if (message && message.length > 500) errors.message = ["Message must be 500 characters or less"];
  if (!timeline || timeline.length < 1) errors.timeline = ["Please select a timeline"];

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ message: "Validation failed", errors });
  }

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
}
