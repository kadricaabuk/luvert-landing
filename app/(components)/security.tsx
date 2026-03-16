import { Lock, Shield, Zap } from "lucide-react"

export default function Security() {
  return (
    <section className="mt-28 md:mt-40">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12 md:mb-16">

          <p className="text-sm text-neutral-500 uppercase tracking-wider">
            Security
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold mt-3">
            Built with security in mind
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 mt-4 max-w-xl mx-auto">
            Luvert observes and controls AI usage without exposing
            sensitive data or introducing unnecessary overhead.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          <div className="p-5 sm:p-6 rounded-lg border border-neutral-800 bg-neutral-900/40">
            <Shield className="size-5 sm:size-6 text-neutral-400 mb-4" />

            <h3 className="font-semibold mb-2">
              API key safety
            </h3>

            <p className="text-sm text-neutral-400 leading-relaxed">
              Your provider API keys remain under your control.
              Luvert securely signs and forwards requests.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-lg border border-neutral-800 bg-neutral-900/40">
            <Lock className="size-5 sm:size-6 text-neutral-400 mb-4" />

            <h3 className="font-semibold mb-2">
              Request privacy
            </h3>

            <p className="text-sm text-neutral-400 leading-relaxed">
              Luvert logs metadata such as tokens and models —
              not the contents of your prompts.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-lg border border-neutral-800 bg-neutral-900/40">
            <Zap className="size-5 sm:size-6 text-neutral-400 mb-4" />

            <h3 className="font-semibold mb-2">
              Low latency
            </h3>

            <p className="text-sm text-neutral-400 leading-relaxed">
              Designed to add minimal overhead to your AI
              requests so your applications stay fast.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}