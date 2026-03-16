"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

function useMousePosition() {
  const [pos, setPos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setPos({ x, y })
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return pos
}

function LogoBubble({
  src,
  alt,
  invert = false,
  className = "",
}: {
  src: string
  alt: string
  invert?: boolean
  className?: string
}) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute hidden lg:block z-20 ${className}`}
    >
      <div
        className="
          w-14 h-14
          rounded-full
          bg-white/12
          backdrop-blur-md
          border border-white/20
          shadow-[0_0_30px_rgba(255,255,255,0.08)]
          flex items-center justify-center
          transition
          hover:scale-110
          hover:bg-white/18
        "
      >
        <Image
          src={src}
          alt={alt}
          width={alt === "n8n" ? 36 : 24}
          height={24}
          className={invert ? "invert" : ""}
        />
      </div>
    </motion.div>
  )
}

function MobileLogoBubble({
  src,
  alt,
  invert = false,
}: {
  src: string
  alt: string
  invert?: boolean
}) {

  return (
    <div
      className="
        w-12 h-12
        rounded-full
        bg-white/10
        backdrop-blur-md
        border border-white/20
        flex items-center justify-center
      "
    >
      <Image
        src={src}
        alt={alt}
        width={20}
        height={20}
        className={invert ? "invert" : ""}
      />
    </div>
  )
}

export default function Hero() {

  const { x, y } = useMousePosition()
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-12 sm:pt-16 md:pt-24 pb-20 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.02] tracking-tight">
              Stop AI cost overruns
              <span className="block mt-2 sm:mt-3">before they happen</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Luvert monitors AI usage across your stack in real time,
              detects anomalies and enforces budget policies before costs spiral.
            </p>

            {/* optional CTA area */}
            {/* <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
              <JoinButton type="final-cta" />
            </div> */}

            {/* mobile ecosystem row */}
            <div className="lg:hidden pt-2">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 mb-4">
                Works with
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <MobileLogoBubble
                  src="/providers/openai.svg"
                  alt="OpenAI"
                  invert
                />
                <MobileLogoBubble
                  src="/providers/claude.svg"
                  alt="Claude"
                />
                <MobileLogoBubble
                  src="/providers/gemini.svg"
                  alt="Google Gemini"
                />
                <MobileLogoBubble
                  src="/providers/langchain.svg"
                  alt="LangChain"
                />
                <MobileLogoBubble
                  src="/providers/n8n.svg"
                  alt="n8n"
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            {/* background glow */}
            <div
              className="absolute inset-0 -z-10 pointer-events-none"
              style={{
                background: `
      radial-gradient(
        600px circle at ${x}% ${y}%,
        rgba(59,130,246,0.22),
        transparent 60%
      ),
      radial-gradient(
        500px circle at ${x}% ${y}%,
        rgba(168,85,247,0.18),
        transparent 65%
      )
    `,
                filter: "blur(60px)",
              }}
            />

            {/* orbit area */}
            <div className="relative w-full max-w-[620px] h-[300px] sm:h-[360px] md:h-[430px] lg:h-[500px]">
              {/* dashboard */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [-2, -1.3, -2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative z-10
                  w-full max-w-[520px]
                  mx-auto
                  lg:mt-6
                  bg-[#0D0D0F]
                  pt-2
                  rounded-xl
                  border border-neutral-800
                  shadow-2xl
                  overflow-hidden
                  will-change-transform
                "
              >
                <Image
                  src="/screenshots/dashboard.png"
                  alt="Luvert Dashboard"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>

              {/* desktop orbit logos */}
              <LogoBubble
                src="/providers/openai.svg"
                alt="OpenAI"
                invert
                className="top-[-20px] left-[200px]"
              />

              <LogoBubble
                src="/providers/claude.svg"
                alt="Claude"
                className="top-[130px] left-[500px]"
              />

              <LogoBubble
                src="/providers/gemini.svg"
                alt="Google Gemini"
                className="top-[255px] left-[-42px]"
              />

              <LogoBubble
                src="/providers/langchain.svg"
                alt="LangChain"
                className="bottom-[58px] left-[470px]"
              />

              <LogoBubble
                src="/providers/n8n.svg"
                alt="n8n"
                className="bottom-[20px] right-[375px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}