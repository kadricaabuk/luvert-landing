"use client"

import { Activity, Package, Plug } from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useState } from "react"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

const steps = [
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
        title: "Connect your AI provider",
        description: "Initialize Luvert with your provider credentials.",
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
        title: "Monitor and control requests",
        description: "Send requests normally while Luvert tracks usage.",
        language: "javascript",
        code: `await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    { role: "user", content: "Hello" }
  ]
});`,
    },
]

export default function HowItWorks() {
    const [active, setActive] = useState(0)
    const [paused, setPaused] = useState(false)

    useEffect(() => {
        if (paused) return

        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % steps.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [paused])

    return (
        <section
            className="max-w-7xl mx-auto px-6 mt-28 md:mt-40"
            id="how-it-works"
        >

            <h2 className="text-2xl sm:text-3xl font-semibold text-center lg:text-left">
                How Luvert works
            </h2>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-10 items-center">

                {/* Steps */}

                <div
                    className="space-y-6 sm:space-y-8"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    {steps.map((step, i) => {
                        const Icon = step.icon
                        const isActive = active === i

                        return (
                            <div
                                key={i}
                                onMouseEnter={() => setActive(i)}
                                onClick={() => setActive(i)}
                                className={`group flex gap-4 cursor-pointer p-4 rounded-lg transition ${isActive
                                        ? "bg-neutral-900 border border-neutral-800 border-l-2 border-l-blue-500"
                                        : "hover:bg-neutral-900/50"
                                    }`}
                            >

                                <div
                                    className={`mt-1 transition-colors shrink-0 ${isActive
                                            ? "text-white"
                                            : "text-neutral-500 group-hover:text-white"
                                        }`}
                                >
                                    <Icon className="size-5 sm:size-6" />
                                </div>

                                <div>
                                    <h3 className="text-base sm:text-lg font-semibold">
                                        {step.title}
                                    </h3>

                                    <p className="text-sm text-neutral-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                            </div>
                        )
                    })}
                </div>

                {/* Code Panel */}

                <div className="relative rounded-xl border border-neutral-800 bg-neutral-950 p-5 sm:p-6 overflow-hidden min-h-[240px]">

                    <div className="text-xs text-neutral-500 mb-4">
                        Example
                    </div>

                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >

                        <div className="overflow-x-auto">

                            <SyntaxHighlighter
                                language={steps[active].language}
                                style={vscDarkPlus}
                                customStyle={{
                                    background: "transparent",
                                    padding: 0,
                                    margin: 0,
                                    fontSize: "13px",
                                }}
                            >
                                {steps[active].code}
                            </SyntaxHighlighter>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    )
}