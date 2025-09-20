import { useRef, useState } from "react"

export enum QuizState {
  Idle,
  ShowSelection,
}
export const useQuiz = () => {
  const [isSelectedCorrect, setSelectedCorrectStatus] = useState<boolean>(false)
  const [isInteractable, setInteractable] = useState<boolean>(true)
  const [state, setState] = useState<QuizState>(QuizState.Idle)
  const [timer, setTimer] = useState<number>(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const startTimer = (timeSec: number, onFinishedCallback: () => void) => {
    setTimer(timeSec)
    timerRef.current = setInterval(() => {
      tick(onFinishedCallback)
    }, 1000)
  }
  const tick = (onFinishedCallback: () => void) => {
    setTimer((time) => {
      const newTime = time - 1

      if (newTime <= 0) {
        stopTimer()
        onFinishedCallback()
        return 0
      }
      return newTime
    })
  }
  const stopTimer = () => {
    if (timerRef.current === null) {
      return
    }
    clearInterval(timerRef.current)
    timerRef.current = null
  }
  const setSelected = (isCorrect: boolean, callback: () => void) => {
    setSelectedCorrectStatus(isCorrect)
    setInteractable(false)
    setState(QuizState.ShowSelection)

    setTimeout(() => setState(QuizState.Idle), 1000)
    setTimeout(callback, 1250)
    setTimeout(() => setInteractable(true), 1500)
  }
  return {
    isSelectedCorrect,
    setSelected,
    startTimer,
    stopTimer,
    isInteractable,
    state,
    timer,
  }
}
