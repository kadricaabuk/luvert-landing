
import { BarChart3, Code, Shield, Zap } from "lucide-react"

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Hero */}

      <div className="max-w-3xl mb-16">

        <h1 className="text-4xl font-semibold mb-4">
          Luvert Documentation
        </h1>

        <p className="text-lg text-neutral-400">
          Add observability and cost control to your AI stack in minutes.
        </p>

        <p className="text-neutral-500 mt-3">
          Monitor AI usage, detect cost anomalies, and enforce
          budget policies across AI providers.
        </p>

      </div>

      {/* Quickstart */}

      <section className="mb-20">

        <h2 className="text-2xl font-semibold mb-6">
          Quickstart
        </h2>

        <p className="text-neutral-400 mb-8">
          Get Luvert running in under a minute.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Install */}

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">

            <h3 className="font-medium mb-4 flex items-center gap-2">
              <Code className="size-4" />
              Install SDK
            </h3>

            <pre className="text-sm text-neutral-300 overflow-x-auto">
{`npm install @luvert/sdk

# or

yarn add @luvert/sdk

# or

bun add @luvert/sdk`}
            </pre>

          </div>

          {/* Initialize */}

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">

            <h3 className="font-medium mb-4 flex items-center gap-2">
              <Zap className="size-4" />
              Initialize client
            </h3>

            <pre className="text-sm text-neutral-300 overflow-x-auto">
{`import { Luvert } from "@luvert/sdk";

const client = new Luvert({
  provider: "openai",
  apiKey: process.env.OPENAI_API_KEY,
  projectId: "proj_123",
  secretKey: "lv_secret"
});`}
            </pre>

          </div>

        </div>

        {/* Request Example */}

        <div className="mt-8 bg-neutral-900 border border-neutral-800 rounded-lg p-6">

          <h3 className="font-medium mb-4">
            Send your first request
          </h3>

          <pre className="text-sm text-neutral-300 overflow-x-auto">
{`await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    { role: "user", content: "Hello" }
  ]
});`}
          </pre>

        </div>

      </section>

      {/* Core Concepts */}

      <section className="mb-20">

        <h2 className="text-2xl font-semibold mb-10">
          Core Concepts
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/40">

            <Shield className="size-5 mb-3 text-neutral-400" />

            <h3 className="font-medium mb-2">
              Projects
            </h3>

            <p className="text-sm text-neutral-400">
              Organize AI usage across applications with
              separate budgets, insights and monitoring.
            </p>

          </div>

          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/40">

            <BarChart3 className="size-5 mb-3 text-neutral-400" />

            <h3 className="font-medium mb-2">
              Observability
            </h3>

            <p className="text-sm text-neutral-400">
              Track tokens, models, latency and cost for
              every AI request in real time.
            </p>

          </div>

          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/40">

            <Zap className="size-5 mb-3 text-neutral-400" />

            <h3 className="font-medium mb-2">
              Budget Policies
            </h3>

            <p className="text-sm text-neutral-400">
              Enforce spending limits and automatically
              block requests that exceed budgets.
            </p>

          </div>

        </div>

      </section>

      {/* Architecture */}

      <section className="mb-20">

        <h2 className="text-2xl font-semibold mb-6">
          Architecture
        </h2>

        <p className="text-neutral-400 mb-8">
          Luvert sits between your application and the AI provider.
        </p>

        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-sm text-neutral-300">

<pre>
Your Application
      ↓
Luvert SDK
      ↓
AI Provider
</pre>

        </div>

        <p className="text-sm text-neutral-500 mt-6">
          Luvert captures request metadata such as tokens,
          latency and cost. Prompt and response content are
          not stored.
        </p>

      </section>

      {/* Supported Providers */}

      <section>

        <h2 className="text-2xl font-semibold mb-6">
          Supported Providers
        </h2>

        <div className="flex flex-wrap gap-6 text-neutral-400">

          <span>OpenAI</span>
          <span>Google Gemini</span>
          <span>Anthropic</span>

        </div>

      </section>

    </div>
  )
}