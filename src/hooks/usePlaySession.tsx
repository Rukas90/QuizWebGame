import { useState } from "react"
import { TOTAL_QUESTIONS_PER_ROUND } from "@/types/GameConstants"

export type PlaySession = {
  answeredCount: number
}
export const usePlaySession = () => {
  const [initialized, setInitialized] = useState<boolean>(false)
  const [answeredCount, setAnsweredCount] = useState<number>(0)

  const initialize = () => {
    setAnsweredCount(0)
    setInitialized(true)
  }
  const reset = () => {
    setInitialized(false)
  }
  const markedNewAnswered = () => {
    const isFinished = answeredCount + 1 >= TOTAL_QUESTIONS_PER_ROUND
    setAnsweredCount((count) => count + 1)
    return isFinished
  }

  return {
    initialize,
    reset,
    initialized,
    data: {
      answeredCount,
    } as PlaySession,
    markedNewAnswered,
  }
}
