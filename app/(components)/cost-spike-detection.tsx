"use client"

import { motion } from "framer-motion"

export default function CostSpikeSection() {
  return (
    <section className="relative pt-28 md:pt-36">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}

          <div className="space-y-6">

            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Detect cost spikes before they explode
            </h2>

            <p className="text-neutral-400 max-w-lg text-lg">
              Luvert continuously monitors token usage and model costs across your
              stack. If abnormal spending patterns appear, policies trigger
              immediately — before your bill gets out of control.
            </p>

            <ul className="space-y-3 text-neutral-400 text-sm">

              <li>• Real-time usage monitoring</li>
              <li>• Anomaly detection</li>
              <li>• Budget enforcement</li>
              <li>• Automatic alerts</li>

            </ul>

          </div>

          {/* RIGHT VISUAL */}

          <div className="relative  hidden sm:block">

            {/* graph container */}

            <div className="relative bg-[#0D0D0F] border border-neutral-800 rounded-xl p-8 overflow-hidden">

              {/* grid */}

              <div className="absolute inset-0 opacity-30 pointer-events-none
                bg-size-[40px_40px]
                bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
              />

              {/* chart */}

              <svg viewBox="0 0 500 200" className="relative z-10">

                {/* baseline */}

                <path
                  d="M0 160 L80 150 L160 155 L240 150"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  fill="none"
                />

                {/* spike */}

                <motion.path
                  d="M240 150 L300 140 L340 70 L380 150"
                  stroke="#ef4444"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />

                {/* recovery */}

                <path
                  d="M380 150 L440 150 L500 148"
                  stroke="#22c55e"
                  strokeWidth="3"
                  fill="none"
                />

              </svg>

              {/* spike label */}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute top-[40%] left-[65%] bg-red-500/10 border border-red-500/30 text-red-400 text-xs px-3 py-1 rounded-md"
              >
                Cost spike detected
              </motion.div>

              {/* luvert reaction */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-12 right-12 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs px-3 py-1 rounded-md"
              >
                Policy triggered
              </motion.div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}