import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional().or(z.literal("")),
  company: z.string().optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional().or(z.literal("")),
  message: z
    .string()
    .min(20, "Please provide at least 20 characters")
    .max(500, "Message must be 500 characters or less"),
  timeline: z.string().min(1, "Please select a timeline"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
