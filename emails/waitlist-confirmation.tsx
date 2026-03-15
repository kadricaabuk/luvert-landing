import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components"

interface Props {
  email: string
}

export default function WaitlistConfirmation({ email }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Luvert early access</Preview>

      <Body style={main}>
        <Container style={container}>

          {/* Logo / Brand */}

          <Section style={brandSection}>
            <Text style={brand}>
              LUVERT
            </Text>
          </Section>

          {/* Title */}

          <Heading style={heading}>
            You&apos;re on the waitlist 🎉
          </Heading>

          <Text style={text}>
            Thanks for signing up for <strong>Luvert early access</strong>.
          </Text>

          <Text style={text}>
            Luvert helps developers monitor AI usage, detect cost spikes,
            and enforce budget policies across AI providers like OpenAI,
            Gemini and Anthropic.
          </Text>

          <Section style={buttonSection}>
            <Button
              href="https://luvert.io"
              style={button}
            >
              Visit Luvert
            </Button>
          </Section>

          <Hr style={hr} />

          <Text style={small}>
            Want early access sooner? Reply to this email and tell me what you&apos;re building with AI.
          </Text>

          <Text style={footer}>
            Luvert · AI observability & cost control
            <br />
            https://luvert.io
          </Text>

        </Container>
      </Body>
    </Html>
  )
}

/* Styles */

const main = {
  backgroundColor: "#0a0a0a",
  fontFamily: "Inter, Arial, sans-serif",
  padding: "40px 0",
}

const container = {
  margin: "0 auto",
  padding: "40px",
  maxWidth: "520px",
  backgroundColor: "#111111",
  borderRadius: "10px",
  border: "1px solid #222",
}

const brandSection = {
  marginBottom: "24px",
}

const brand = {
  color: "#ffffff",
  fontSize: "12px",
  letterSpacing: "2px",
  fontWeight: "600",
}

const heading = {
  color: "#ffffff",
  fontSize: "26px",
  fontWeight: "600",
  marginBottom: "16px",
}

const text = {
  color: "#a3a3a3",
  fontSize: "14px",
  lineHeight: "1.7",
  marginBottom: "14px",
}

const buttonSection = {
  marginTop: "24px",
  marginBottom: "24px",
}

const button = {
  backgroundColor: "#ffffff",
  color: "#000",
  padding: "12px 20px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "14px",
}

const hr = {
  borderColor: "#222",
  margin: "28px 0",
}

const small = {
  fontSize: "13px",
  color: "#9ca3af",
}

const footer = {
  fontSize: "12px",
  color: "#666",
  marginTop: "20px",
}