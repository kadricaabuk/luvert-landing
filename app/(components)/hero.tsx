import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 mb-20 md:mb-24 pb-24 md:pb-40 relative">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Stop AI cost overruns <br className="hidden sm:block" />
              before they happen
            </h1>

            <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto lg:mx-0">
              Luvert monitors AI usage across your stack in real time,
              detects anomalies and enforces budget policies before costs spiral.
            </p>

          </div>

          {/* RIGHT SIDE DASHBOARD */}
          <div className="relative mt-6 lg:mt-0">

            {/* glow */}
            <div className="absolute -inset-10 bg-linear-to-tr from-purple-500/20 via-blue-500/20 to-transparent blur-3xl" />

            <div className="relative transform lg:translate-x-12 lg:translate-y-6 lg:-rotate-2 bg-[#0D0D0F] pt-2 rounded-xl border border-neutral-800 shadow-2xl overflow-hidden">

              <Image
                src="/screenshots/dashboard.png"
                alt="Luvert Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}