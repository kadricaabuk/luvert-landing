import { Github, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Founder() {
  return (
    <section className="mt-40">

      <div className="max-w-5xl mx-auto px-6">

        <div className="flex flex-col md:flex-row gap-18 items-center">

          {/* Avatar */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border border-neutral-800">
              <Image
                src="/kadri.png"
                alt="Kadri"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div>

            <p className="text-sm text-neutral-500 uppercase tracking-wider">
              About the builder
            </p>

            <h2 className="text-3xl font-semibold mt-3">
              Built by a developer who needed this
            </h2>

            <p className="text-neutral-400 mt-4">
              Hi, I'm Kadri.
            </p>

            <p className="text-neutral-400 mt-2">
              I build AI-powered applications and kept running into
              the same problem — AI costs were unpredictable and
              debugging requests was painful.
            </p>

            <p className="text-neutral-400 mt-2">
              Provider dashboards show billing totals, but they rarely
              explain what actually happened inside your AI requests.
            </p>


            {/* Links */}
            <div className="flex items-center gap-4 mt-6 text-sm text-neutral-400">

              <a
                target="_blank"
                href="https://github.com/kadricaabuk"
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