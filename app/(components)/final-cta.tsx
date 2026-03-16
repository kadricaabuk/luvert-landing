import JoinButton from "./join-button"

export default function FinalCTA() {
  return (
    <section className="mt-28 md:mt-40" id="waitlist">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Start controlling your AI costs today
        </h2>

        <p className="text-sm sm:text-base text-neutral-400 mt-4 max-w-xl mx-auto">
          Monitor usage, detect anomalies and enforce budgets
          across your AI infrastructure.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">

          <JoinButton type="final-cta" />

        </div>

      </div>

    </section>
  )
}