"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import JoinModal from "./join-modal"

interface JoinButtonProps {
  type?: "header" | "final-cta"
}

export default function JoinButton({ type = "header" }: JoinButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        size={type === "final-cta" ? "hero" : "default"}
        className={type === "final-cta" ? "gap-2" : ""}
        onClick={() => setOpen(true)}
      >
        Join Early Access
        {type === "final-cta" && <ArrowRight className="size-4" />}
      </Button>

      <JoinModal open={open} setOpen={setOpen} />
    </>
  )
}