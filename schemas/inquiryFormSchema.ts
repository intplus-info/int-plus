import { z } from "zod";

export const inquiryFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  service: z.enum(["consulting", "development", "design", "marketing"]),
  company: z.string().optional(),
  subject: z.enum(["general", "support", "sales", "partnership"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InquiryFormData = z.infer<typeof inquiryFormSchema>;

