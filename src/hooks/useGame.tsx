import { useEffect, useRef, useState } from "react"
import { usePlaySession } from "./usePlaySession"
import { useQuestionsSelector } from "./useQuestionsSelector"
import { useCountdown } from "./useCountdown"
import { UpdateScore } from "@/services/UserRequests"
import {
  COUNTDOWN_IN_SECONDS,
  CORRECT_ANSWER_SCORE_GAIN,
  INCORRECT_ANSWER_SCORE_GAIN,
} from "@/types/GameConstants"
import { Question } from "@/types/Question"

export enum GameState {
  PendingStart,
  Countdown,
  Playing,
  Result,
}
export const useGame = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.PendingStart)
  const roundScore = useRef<number>(0)
  const roundComplete = useRef(false)

  const countdown = useCountdown()
  const session = usePlaySession()
  const questions = useQuestionsSelector()

  const start = () => {
    if (gameState === GameState.Playing || gameState === GameState.Countdown) {
      return
    }
    roundScore.current = 0
    roundComplete.current = false

    setGameState(GameState.Countdown)
    countdown.start(COUNTDOWN_IN_SECONDS, () => session.initialize())
  }
  useEffect(() => {
    if (!session.initialized) {
      return
    }
    play()
  }, [session.initialized])

  const play = () => {
    questions.selectNewRandomCategory()
    questions.selectNextQuestion()
    setGameState(GameState.Playing)
  }
  const exit = () => {}

  const markSelected = (question: Question, answerIndex: number) => {
    const isCorrect = question.answer === answerIndex
    updateAnswerScore(isCorrect)
    nextQuestion()
  }
  const markSkip = () => {
    updateAnswerScore(false)
    nextQuestion()
  }
  const nextQuestion = () => {
    const isFinished = session.markedNewAnswered()

    if (!isFinished) {
      questions.selectNextQuestion()
      return
    }
    finish()
  }
  const finish = async () => {
    if (roundComplete.current) {
      return
    }
    roundComplete.current = true
    setGameState(GameState.Result)
    session.reset()
    await UpdateScore(roundScore.current)
  }
  const updateAnswerScore = (isCorrect: boolean) => {
    const currentScore = roundScore.current
    const newScore =
      currentScore +
      (isCorrect ? CORRECT_ANSWER_SCORE_GAIN : INCORRECT_ANSWER_SCORE_GAIN)
    roundScore.current = newScore <= 0 ? 0 : newScore
  }
  return {
    start,
    exit,
    countdown: countdown.left,
    gameState,
    questions,
    session,
    markSelected,
    markSkip,
    nextQuestion,
    roundScore: roundScore.current,
  }
}
