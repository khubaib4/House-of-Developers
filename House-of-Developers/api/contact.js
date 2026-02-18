export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
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

  console.log("Contact form submission:", { name, email, phone, company, service, budget, message, timeline });

  return res.status(200).json({ message: "Message sent successfully" });
}
