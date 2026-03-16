"use client"

import { Activity, Package, Plug } from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useMemo, useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

type Mode = "sdk" | "gateway"

const integrations = [
    {
        id: "sdk",
        title: "SDK",
        description: "Best developer experience",
    },
    {
        id: "gateway",
        title: "Gateway",
        description: "Works with any AI client",
    },
] as const

const sdkSteps = [
    {
        icon: Package,
        title: "Install the SDK",
        description: "Install Luvert and add it to your project.",
        language: "bash",
        code: `npm install @luvert/sdk

# or

yarn add @luvert/sdk

# or

bun add @luvert/sdk`,
    },
    {
        icon: Plug,
        title: "Initialize Luvert",
        description: "Initialize Luvert with your AI provider credentials.",
        language: "javascript",
        code: `import { Luvert } from "@luvert/sdk";

const client = new Luvert({
  provider: "openai",
  apiKey: process.env.OPENAI_API_KEY,
  projectId: "proj_123",
  secretKey: "lv_secret"
});`,
    },
    {
        icon: Activity,
        title: "Send requests",
        description: "Use your AI client normally while Luvert monitors usage.",
        language: "javascript",
        code: `await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: "Hello" }]
});

// Luvert automatically tracks:
// • tokens
// • cost
// • model usage
// • anomalies`,
    },
]

const gatewaySteps = [
    {
        icon: Plug,
        title: "Point your AI client",
        description: "Route your existing AI client through Luvert.",
        language: "javascript",
        code: `import OpenAI from "openai"

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://api.luvert.io/v1"
})`,
    },
    {
        icon: Activity,
        title: "Send requests normally",
        description: "Your existing code works without modification.",
        language: "javascript",
        code: `await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: "Hello" }]
})`,
    },
    {
        icon: Package,
        title: "Luvert monitors everything",
        description: "Requests are tracked automatically across your AI stack.",
        language: "javascript",
        code: `// Luvert tracks automatically:
// • token usage
// • model usage
// • latency
// • estimated cost
// • anomalies`,
    },
]

export default function HowItWorks() {
    const [mode, setMode] = useState<Mode>("sdk")
    const [active, setActive] = useState(0)
    const [paused, setPaused] = useState(false)

    const steps = useMemo(
        () => (mode === "sdk" ? sdkSteps : gatewaySteps),
        [mode]
    )

    useEffect(() => {
        if (paused) return

        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % steps.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [paused, steps.length])

    return (
        <section
            className="max-w-7xl mx-auto px-6 mt-28 md:mt-40"
            id="how-it-works"
        >
            <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                <p className="text-sm text-neutral-500 uppercase tracking-wider mb-2">
                    Integration
                </p>

                <h2 className="text-2xl sm:text-3xl font-semibold">
                    How Luvert works
                </h2>

                <p className="text-neutral-400 mt-4">
                    Two ways to integrate Luvert into your AI stack. Use the SDK for the
                    best developer experience, or the gateway to monitor any AI client.
                </p>
            </div>

            {/* STABLE TABS */}
            <div className="mt-8 w-full max-w-[560px] mx-auto lg:mx-0">
                <div className="grid grid-cols-2 w-full border border-neutral-800 rounded-lg overflow-hidden bg-black/20">
                    {integrations.map((integration) => {
                        const isActive = mode === integration.id

                        return (
                            <button
                                key={integration.id}
                                onClick={() => {
                                    setMode(integration.id as Mode)
                                    setActive(0)
                                }}
                                className={`relative w-full px-4 py-3 text-sm transition cursor-pointer ${isActive
                                    ? "bg-neutral-900 text-white"
                                    : "text-neutral-400 hover:text-white hover:bg-neutral-900/40"
                                    }`}
                            >
                                <span className="grid grid-cols-[72px_minmax(0,1fr)] items-center w-full">
                                    <span className="font-medium text-left">
                                        {integration.title}
                                        <span className="hidden sm:block w-[190px] text-neutral-500 truncate">
                                            {integration.description}
                                        </span>
                                    </span>
                                </span>

                                {isActive && (
                                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500" />
                                )}
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* STABLE CONTENT */}
            <div className="grid lg:grid-cols-2 gap-16 mt-10 items-start">
                {/* Steps */}
                <div
                    className="min-w-0 min-h-[320px]"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <div className="space-y-6">
                        {steps.map((step, i) => {
                            const Icon = step.icon
                            const isActive = active === i

                            return (
                                <div
                                    key={i}
                                    onMouseEnter={() => setActive(i)}
                                    onClick={() => setActive(i)}
                                    className={`flex gap-4 p-4 rounded-lg transition cursor-pointer ${isActive
                                        ? "bg-neutral-900 border border-neutral-800 border-l-2 border-l-blue-500"
                                        : "hover:bg-neutral-900/50"
                                        }`}
                                >
                                    <Icon className="size-5 text-neutral-400 shrink-0 mt-0.5" />

                                    <div className="min-w-0">
                                        <h3 className="font-semibold">{step.title}</h3>

                                        <p className="text-sm text-neutral-400">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Code */}
                <div className="min-w-0 border border-neutral-800 rounded-xl bg-neutral-950 p-6 min-h-[320px] flex flex-col">
                    <div className="text-xs text-neutral-500 mb-4 shrink-0">
                        {steps[active].language}
                    </div>

                    <motion.div
                        key={`${mode}-${active}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-1 min-h-0 overflow-auto"
                    >
                        <SyntaxHighlighter
                            language={steps[active].language}
                            style={vscDarkPlus}
                            customStyle={{
                                background: "transparent",
                                padding: 0,
                                margin: 0,
                                fontSize: "13px",
                            }}
                            wrapLongLines={false}
                        >
                            {steps[active].code}
                        </SyntaxHighlighter>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}