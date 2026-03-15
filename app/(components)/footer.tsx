import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-40 border-t border-neutral-800">

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}

          <div>
            <h3 className="text-lg font-semibold">
              Luvert
            </h3>

            <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
              Observability and cost control for AI infrastructure.
            </p>
          </div>


          {/* Product */}

          <div>
            <h4 className="text-sm font-semibold mb-4">
              Product
            </h4>

            <div className="space-y-2 text-sm text-neutral-400">

              <a
                href="#waitlist"
                className="block hover:text-white transition"
              >
                Join Early Access
              </a>

              <a
                href="#how-it-works"
                className="block hover:text-white transition"
              >
                How it works
              </a>

            </div>
          </div>


          {/* Resources */}

          <div>
            <h4 className="text-sm font-semibold mb-4">
              Resources
            </h4>

            <div className="space-y-2 text-sm text-neutral-400">

              <a
                href="https://github.com/kadricabuk"
                target="_blank"
                className="block hover:text-white transition"
              >
                GitHub
              </a>

              <a
                href="mailto:hello@luvert.io"
                className="block hover:text-white transition"
              >
                Contact
              </a>

              <Link
                href="/security"
                className="block hover:text-white transition"
              >
                Security
              </Link>

            </div>
          </div>


          {/* Social */}

          <div>
            <h4 className="text-sm font-semibold mb-4">
              Social
            </h4>

            <div className="flex gap-4 text-neutral-400">

              <a
                target="_blank"
                href="https://github.com/kadricabuk"
                className="hover:text-white transition"
              >
                <Github className="size-5"/>
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/kadri-cabuk/"
                className="hover:text-white transition"
              >
                <Linkedin className="size-5"/>
              </a>

              <a
                href="mailto:hello@luvert.io"
                className="hover:text-white transition"
              >
                <Mail className="size-5"/>
              </a>

            </div>
          </div>

        </div>


        {/* Bottom line */}

        <div className="mt-12 pt-6 border-t border-neutral-800 text-sm text-neutral-500 flex flex-col md:flex-row justify-between gap-2">

          <span>
            © {new Date().getFullYear()} Luvert
          </span>

          <span>
            Built by{" "}
            <a
              href="https://www.linkedin.com/in/kadri-cabuk/"
              target="_blank"
              className="hover:text-white transition"
            >
              Kadri Çabuk
            </a>
          </span>

        </div>

      </div>

    </footer>
  )
}