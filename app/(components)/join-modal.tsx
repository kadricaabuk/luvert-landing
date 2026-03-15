"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"
import { useState } from "react"

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function JoinModal({ open, setOpen }: Props) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  
    setLoading(true)
  
    await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
  
    setLoading(false)
    setSuccess(true)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md border-neutral-800 bg-neutral-950">

        {!success ? (
          <div className="space-y-6">

            <div className="space-y-2 text-center">

              <h2 className="text-xl font-semibold">
                Join Luvert Early Access
              </h2>

              <p className="text-sm text-neutral-400">
                Be the first to monitor and control your AI costs.
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >

              <Input
                autoFocus
                type="email"
                placeholder="you@company.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
              />

              <Button
                type="submit"
                disabled={loading}
                className="h-11"
              >
                {loading ? "Joining..." : "Join Waitlist"}
              </Button>

            </form>

            <p className="text-xs text-center text-neutral-500">
              No spam. We’ll only email you about Luvert.
            </p>

          </div>
        ) : (
          <div className="py-10 text-center space-y-4">

            <div className="flex justify-center">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                <Check className="text-green-500 size-6" />
              </div>

            </div>

            <h3 className="text-lg font-medium">
              You&apos;re on the list 🎉
            </h3>

            <p className="text-sm text-neutral-400">
            Confirmation sent to <span className="text-neutral-300">{email}</span>
            </p>

            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="mt-4"
            >
              Close
            </Button>

          </div>
        )}

      </DialogContent>
    </Dialog>
  )
}