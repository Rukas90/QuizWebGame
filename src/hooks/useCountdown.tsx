import { useRef, useState } from "react"

export const useCountdown = () => {
  const [left, setLeft] = useState<number>(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const start = (time: number, callback: () => void) => {
    if (intervalRef.current !== null) {
      stop()
    }
    setLeft(time)
    intervalRef.current = setInterval(() => tick(callback), 1000)
  }
  const tick = (callback: () => void) => {
    setLeft((time) => {
      if (time <= 0) {
        callback()
        stop()
        return 0
      }
      return time - 1
    })
  }
  const stop = () => {
    if (intervalRef.current === null) {
      return
    }
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }
  return {
    start,
    stop,
    left,
  }
}
