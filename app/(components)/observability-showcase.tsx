"use client"

const features = [
  {
    title: "Token usage",
    description: "Track tokens consumed by each request in real time.",
    highlight: {
      top: "22%",
      left: "18%",
      width: "28%",
      height: "28%",
    },
  },
  {
    title: "Cost anomaly detection",
    description: "Detect spikes in usage before they impact your bill.",
    highlight: {
      top: "50%",
      left: "42%",
      width: "30%",
      height: "22%",
    },
  },
  {
    title: "Model distribution",
    description: "Understand which models drive your usage.",
    highlight: {
      top: "28%",
      left: "68%",
      width: "22%",
      height: "25%",
    },
  },
]

export default function ObservabilityShowcase() {

  return (
    <section className="mt-28 md:mt-40">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">

          <p className="text-sm text-neutral-500 uppercase tracking-wider">
            Observability
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold mt-3">
            See exactly how your AI is being used
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 mt-4 max-w-xl mx-auto">
            Luvert provides real-time visibility into tokens, models and cost spikes.
          </p>

        </div>


        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Dashboard */}
          <div className="relative rounded-xl border border-neutral-800 bg-neutral-950 p-3 sm:p-4 overflow-hidden">

            <InsightsPreview />

          </div>


          {/* Feature explanations */}
          <div className="space-y-6 sm:space-y-8">

            {features.map((f, i) => {
              return (
                <div
                  key={i}
                  className="p-4 sm:p-5 rounded-lg transition bg-neutral-900 border border-neutral-800"
                >
                  <h3 className="font-semibold text-base sm:text-lg">
                    {f.title}
                  </h3>

                  <p className="text-sm text-neutral-400 mt-1 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              )
            })}

          </div>

        </div>

      </div>

    </section>
  )
}

import { AlertTriangle, CheckCircle, Info } from "lucide-react"

function InsightCard({
  type,
  title,
  context,
  explanation,
  suggestions,
}: {
  type: "warning" | "info"
  title: string
  context: string[]
  explanation: string
  suggestions: string[]
}) {

  const isWarning = type === "warning"

  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-4 sm:p-5 mb-2">

      {/* label */}
      <div className="flex items-center gap-2 mb-3 text-xs font-medium">

        {isWarning ? (
          <span className="flex items-center gap-1 text-yellow-400">
            <AlertTriangle className="size-3" />
            WARNING
          </span>
        ) : (
          <span className="flex items-center gap-1 text-blue-400">
            <Info className="size-3" />
            INFO
          </span>
        )}

      </div>

      <h4 className="text-sm font-semibold mb-3">
        {title}
      </h4>

      <div className="text-xs text-neutral-400 space-y-1 mb-4">
        {context.map((c, i) => (
          <div key={i}>{c}</div>
        ))}
      </div>

      <div className="text-xs text-neutral-400 mb-4 leading-relaxed">
        {explanation}
      </div>

      <div className="space-y-1">
        {suggestions.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-xs text-green-400"
          >
            <CheckCircle className="size-3 flex-shrink-0" />
            {s}
          </div>
        ))}
      </div>

    </div>
  )
}

function InsightsPreview() {
  return (
    <div>

      <InsightCard
        type="warning"
        title="Calls blocked this period"
        context={[
          "Model: —",
          "Endpoint: budget",
          "Pattern: Calls blocked this period",
        ]}
        explanation="3 calls were blocked due to budget limits. Consider increasing your monthly budget or optimizing usage."
        suggestions={[
          "Model selection",
          "Infrastructure-level",
        ]}
      />

      <InsightCard
        type="info"
        title="Primary model: gpt-4o"
        context={[
          "Model: gpt-4o",
          "Endpoint: usage",
          "Pattern: Primary model: gpt-4o",
        ]}
        explanation="11 calls ($0.12) this period. Consider prompt simplification or caching for high-volume endpoints."
        suggestions={[
          "Prompt-level",
          "Infrastructure-level",
        ]}
      />

      <InsightCard
        type="info"
        title="Primary model: gpt-4o-mini"
        context={[
          "Model: gpt-4o-mini",
          "Endpoint: usage",
          "Pattern: Primary model: gpt-4o-mini",
        ]}
        explanation="9 calls ($0.00) this period. Consider prompt simplification or caching for high-volume endpoints."
        suggestions={[
          "Prompt-level",
          "Infrastructure-level",
        ]}
      />

    </div>
  )
}