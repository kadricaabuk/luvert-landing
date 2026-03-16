import { AlertTriangle, BarChart3, Eye } from "lucide-react"

const ProblemCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) => {
  return (
    <div className="group relative">

      {/* Glow */}
      <div className="pointer-events-none absolute -inset-px rounded-xl bg-linear-to-r from-blue-500/20 via-purple-500/20 to-transparent opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

      {/* Card */}
      <div className="h-full relative p-5 sm:p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-neutral-600 hover:bg-neutral-900/60">

        <div className="mb-4 text-neutral-500 transition-colors duration-300 group-hover:text-white">
          <Icon className="size-5 sm:size-6" />
        </div>

        <h3 className="text-base sm:text-lg font-semibold mb-2">
          {title}
        </h3>

        <p className="text-sm text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300 leading-relaxed">
          {description}
        </p>

      </div>

    </div>
  )
}

const Problem = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-24 md:mt-32">

      <p className="text-sm text-neutral-500 tracking-widest uppercase text-center md:text-left">
        The Problem
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">

        <ProblemCard
          icon={Eye}
          title="AI requests are opaque"
          description="You send prompts and receive responses — but rarely see what actually happened inside the request."
        />

        <ProblemCard
          icon={AlertTriangle}
          title="Costs spike unpredictably"
          description="Bills spike without a clear source. Debugging AI usage means digging through logs and guessing which request caused it."
        />

        <ProblemCard
          icon={BarChart3}
          title="Dashboards show billing, not behavior"
          description="Provider dashboards show spend totals, not what your AI system is actually doing in real time."
        />

      </div>

    </section>
  )
}

export default Problem