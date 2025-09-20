import { useRef, useState } from "react"

export const useScoreCounter = () => {
  const [count, setCount] = useState<number>(0)
  const intervalRef = useRef<number | null>(null)

  const start = (
    total: number,
    callback?: () => void,
    increment: number = 10,
    countSpeedInMs: number = 10
  ) => {
    if (intervalRef.current !== null) {
      stop()
    }
    setCount(0)
    intervalRef.current = setInterval(
      () => tick(increment, total),
      countSpeedInMs,
      callback
    )
  }
  const tick = (increment: number, total: number, callback?: () => void) => {
    setCount((current) => {
      const newCount = current + increment
      if (newCount >= total) {
        stop()
        callback?.()
        return total
      }
      return newCount
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
    count,
  }
}
