export default function Pricing() {
    return (
        <section className="mt-40">

            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">

                    <p className="text-sm text-neutral-500 uppercase tracking-wider">
                        Pricing
                    </p>

                    <h2 className="text-3xl font-semibold mt-3">
                        Simple pricing for AI observability
                    </h2>

                    <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
                        Start free during early access. Scale as your AI infrastructure grows.
                    </p>

                </div>

                {/* Plans */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Free */}
                    <div className="p-8 rounded-xl border border-neutral-800 bg-neutral-900/40">

                        <h3 className="text-lg font-semibold">
                            Free
                        </h3>

                        <p className="text-sm text-neutral-400 mt-1">
                            Perfect for early projects
                        </p>

                        <div className="mt-6 text-3xl font-semibold">
                            $0
                        </div>

                        <p className="text-xs text-neutral-500 mt-1">
                            during early access
                        </p>

                        <ul className="mt-6 space-y-3 text-sm text-neutral-400">

                            <li>5k AI requests / month</li>
                            <li>Usage observability</li>
                            <li>Basic cost insights</li>

                        </ul>

                    </div>

                    {/* Basic */}
                    <div className="p-8 rounded-xl border border-neutral-800 bg-neutral-900/40">

                        <h3 className="text-lg font-semibold">
                            Basic
                        </h3>

                        <p className="text-sm text-neutral-400 mt-1">
                            For small AI applications
                        </p>

                        <div className="mt-6 text-3xl font-semibold">
                            $5
                        </div>

                        <p className="text-xs text-neutral-500 mt-1">
                            per month
                        </p>

                        <ul className="mt-6 space-y-3 text-sm text-neutral-400">

                            <li>15k AI requests / month</li>
                            <li>Usage observability</li>
                            <li>Basic cost insights</li>

                        </ul>

                    </div>

                    {/* Pro */}
                    <div className="p-8 rounded-xl border border-neutral-700 bg-neutral-900 relative">

                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-white text-black px-3 py-1 rounded-full">
                            Most popular
                        </div>

                        <h3 className="text-lg font-semibold">
                            Pro
                        </h3>

                        <p className="text-sm text-neutral-400 mt-1">
                            For growing AI applications
                        </p>

                        <div className="mt-6 text-3xl font-semibold">
                            $15
                        </div>

                        <p className="text-xs text-neutral-500 mt-1">
                            per month
                        </p>

                        <ul className="mt-6 space-y-3 text-sm text-neutral-400">

                            <li>100k AI requests / month</li>
                            <li>Cost anomaly detection</li>
                            <li>Budget policies</li>
                            <li>Insights dashboard</li>

                        </ul>

                    </div>

                </div>

            </div>

        </section>
    )
}