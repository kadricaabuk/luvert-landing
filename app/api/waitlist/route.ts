import WaitlistConfirmation from "@/emails/waitlist-confirmation"
import { Resend } from "resend"

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)
const fromEmail = "Luvert <kadri@luvert.io>"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return Response.json({ error: "Email required" }, { status: 400 })
    }

    await resend.emails.send({
      from: fromEmail,
      to: "kadricabuk@gmail.com",
      subject: "New Luvert Waitlist Signup",
      text: `New signup: ${email}`,
    })

    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Welcome to Luvert early access",
      react: WaitlistConfirmation({ email }),
      text: "Thanks for joining the Luvert waitlist. We'll notify you when early access opens.",
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: "Something went wrong: " + error }, { status: 500 })
  }
}