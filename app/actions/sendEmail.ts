"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const subject = formData.get("subject_topic") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { error: "Missing required fields" };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.CONTACT_EMAIL || "your-email@example.com",
            subject: `New Contact Form Submission: ${subject}`,
            replyTo: email,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 8px;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="margin-top: 20px;">
            <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
            <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
            <p style="margin-bottom: 10px;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin-bottom: 10px;"><strong>Subject:</strong> ${subject}</p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: #f8fafc; padding: 15px; border-radius: 4px; color: #334155;">${message}</p>
          </div>
          <footer style="margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center;">
            This email was sent from your portfolio contact form.
          </footer>
        </div>
      `,
        });

        if (error) {
            console.error("Resend error:", error);
            return { error: error.message };
        }

        return { success: true };
    } catch (err) {
        console.error("Unexpected error:", err);
        return { error: "Failed to send email. Please try again later." };
    }
}
