import Image from "next/image"

const providers = [
  {
    name: "OpenAI",
    logo: "/providers/openai.svg",
  },
  {
    name: "Claude",
    logo: "/providers/claude.svg",
  },
  {
    name: "Google Gemini",
    logo: "/providers/gemini.svg",
  },
]

export default function SupportedProviders() {
  return (
    <section className="border-y border-neutral-900">

      <div className="max-w-7xl mx-auto px-6 py-6">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Title */}
          <p className="text-sm text-neutral-500 tracking-widest uppercase text-center md:text-left">
            Supported providers
          </p>

          {/* Providers */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-8 sm:gap-x-10 gap-y-3">

            {providers.map((provider) => (
              <div
                key={provider.name}
                className="flex items-center gap-2 text-accent-foreground text-sm opacity-80 hover:opacity-100 transition"
              >

                <Image
                  src={provider.logo}
                  alt={provider.name}
                  width={20}
                  height={20}
                  className={provider.name === "OpenAI" ? "invert" : ""}
                />

                {provider.name}

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}