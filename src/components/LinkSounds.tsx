import { useEffect } from "react"
import { initLinkSounds } from "@/lib/linkSounds"

export default function LinkSounds() {
  useEffect(() => initLinkSounds(document), [])
  return null
}
