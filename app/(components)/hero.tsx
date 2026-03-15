
import Image from "next/image";

export default function hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 pt-24 mb-24 pb-40 relative">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <h1 className="text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Stop AI cost overruns <br />
              before they happen
            </h1>

            <p className="text-lg text-neutral-400 max-w-xl">
              Luvert monitors AI usage across your stack in real time,
              detects anomalies and enforces budget policies before costs spiral.
            </p>
          </div>

          {/* RIGHT SIDE DASHBOARD */}
          <div className="relative">

            {/* glow */}
            <div className="absolute -inset-10 bg-linear-to-tr from-purple-500/20 via-blue-500/20 to-transparent blur-3xl" />

            <div className="relative transform lg:translate-x-12 lg:translate-y-6 -rotate-2 bg-[#0D0D0F] pt-2 rounded-xl border border-neutral-800 shadow-2xl">

              <Image
                src="/screenshots/dashboard.png"
                alt="Luvert Dashboard"
                width={1200}
                height={800}
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}