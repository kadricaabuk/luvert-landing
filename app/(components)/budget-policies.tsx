import { AlertTriangle, Ban, Shield } from "lucide-react"
import Image from "next/image"

export default function BudgetPolicies() {
  return (
    <section className="mt-40">

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>

          <p className="text-sm text-neutral-500 uppercase tracking-wider">
            Cost Control
          </p>

          <h2 className="text-3xl font-semibold mt-3">
            Enforce AI budgets automatically
          </h2>

          <p className="text-neutral-400 mt-4">
            Define spending limits for each project and prevent
            unexpected AI costs before they spiral out of control.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex gap-3">
              <Shield className="size-5 text-neutral-400"/>
              <span>Monthly project budgets</span>
            </div>

            <div className="flex gap-3">
              <AlertTriangle className="size-5 text-neutral-400"/>
              <span>Soft limit alerts</span>
            </div>

            <div className="flex gap-3">
              <Ban className="size-5 text-neutral-400"/>
              <span>Optionally block requests when limits are exceeded</span>
            </div>

          </div>

        </div>

        {/* UI Preview */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">

          <Image
            src="/screenshots/policies.png"
            alt="Luvert budget policies"
            width={900}
            height={500}
            className="rounded-lg"
          />

        </div>

      </div>

    </section>
  )
}