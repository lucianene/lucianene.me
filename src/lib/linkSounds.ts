const HOVER_SRC = "/sounds/link-hover.wav?v=2"
const CLICK_SRC = "/sounds/link-click.wav?v=2"

let hoverAudio: HTMLAudioElement | null = null
let clickAudio: HTMLAudioElement | null = null
let unlocked = false

function ensureAudio() {
  if (typeof window === "undefined") return
  if (!hoverAudio) {
    hoverAudio = new Audio(HOVER_SRC)
    hoverAudio.preload = "auto"
    hoverAudio.volume = 0.4
  }
  if (!clickAudio) {
    clickAudio = new Audio(CLICK_SRC)
    clickAudio.preload = "auto"
    clickAudio.volume = 0.52
  }
}

async function unlockAudio() {
  if (unlocked) return
  ensureAudio()
  if (!hoverAudio || !clickAudio) return

  for (const audio of [hoverAudio, clickAudio]) {
    const prev = audio.volume
    audio.volume = 0
    try {
      await audio.play()
      audio.pause()
      audio.currentTime = 0
    } catch {
      // Autoplay may still be blocked until a real gesture; ignore.
    }
    audio.volume = prev
  }
  unlocked = true
}

function play(audio: HTMLAudioElement | null) {
  if (!audio) return
  try {
    audio.currentTime = 0
    void audio.play().catch(() => {})
  } catch {
    // Ignore play failures (tab muted, autoplay policy, etc.)
  }
}

export function playLinkHover() {
  ensureAudio()
  play(hoverAudio)
}

export function playLinkClick() {
  ensureAudio()
  play(clickAudio)
}

export function initLinkSounds(root: ParentNode = document) {
  ensureAudio()

  const onPointerDown = () => {
    void unlockAudio()
  }

  const canHover =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches

  const onPointerOver = (event: Event) => {
    if (!canHover) return

    const e = event as PointerEvent
    const target = e.target
    if (!(target instanceof Element)) return

    const link = target.closest("a")
    if (!link || !root.contains(link)) return

    const related = e.relatedTarget
    if (related instanceof Node && link.contains(related)) return

    playLinkHover()
  }

  const onClick = (event: Event) => {
    const target = event.target
    if (!(target instanceof Element)) return

    const link = target.closest("a")
    if (!link || !root.contains(link)) return

    playLinkClick()
  }

  document.addEventListener("pointerdown", onPointerDown, { passive: true })
  root.addEventListener("pointerover", onPointerOver)
  root.addEventListener("click", onClick)

  return () => {
    document.removeEventListener("pointerdown", onPointerDown)
    root.removeEventListener("pointerover", onPointerOver)
    root.removeEventListener("click", onClick)
  }
}
