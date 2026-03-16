import { Github, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Founder() {
  return (
    <section className="mt-28 md:mt-40">

      <div className="max-w-5xl mx-auto px-6">

        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center">

          {/* Avatar */}
          <div className="flex justify-center md:justify-start">

            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-neutral-800">

              <Image
                src="/kadri.png"
                alt="Kadri"
                fill
                className="object-cover"
              />

            </div>

          </div>

          {/* Text */}
          <div className="text-center md:text-left">

            <p className="text-sm text-neutral-500 uppercase tracking-wider">
              About the builder
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-3">
              Built by a developer who needed this
            </h2>

            <p className="text-sm sm:text-base text-neutral-400 mt-4">
              Hi, I&apos;m Kadri.
            </p>

            <p className="text-sm sm:text-base text-neutral-400 mt-2 leading-relaxed">
              I build AI-powered applications and kept running into
              the same problem — AI costs were unpredictable and
              debugging requests was painful.
            </p>

            <p className="text-sm sm:text-base text-neutral-400 mt-2 leading-relaxed">
              Provider dashboards show billing totals, but they rarely
              explain what actually happened inside your AI requests.
            </p>


            {/* Links */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-6 text-sm text-neutral-400">

              <a
                target="_blank"
                href="https://github.com/kadricabuk"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Github className="size-4"/>
                GitHub
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/kadri-cabuk/"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Linkedin className="size-4"/>
                LinkedIn
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}