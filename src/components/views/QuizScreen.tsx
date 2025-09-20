import { useEffect } from "react"
import { Question } from "@/types/Question"
import QuizChoiceOverlay from "@/quiz/QuizChoiceOverlay"
import QuizFooter from "@/quiz/QuizFooter"
import QuizHeader from "@/quiz/QuizHeader"
import QuizMain from "@/quiz/QuizMain"
import { PlaySession } from "@/hooks/usePlaySession"
import { QuizState, useQuiz } from "@/hooks/useQuiz"
import {
  CORRECT_ANSWER_SCORE_GAIN,
  INCORRECT_ANSWER_SCORE_GAIN,
} from "@/types/GameConstants"

interface Props {
  question: Question
  session: PlaySession
  onSelected: (question: Question, answerIndex: number) => void
  exitGame: () => void
  skipQuestion: () => void
}
const QuizScreen = ({
  session,
  question,
  onSelected,
  exitGame,
  skipQuestion,
}: Props) => {
  const quiz = useQuiz()

  const handleSelection = (answerIndex: number) => {
    const isCorrect = question.answer === answerIndex
    quiz.setSelected(isCorrect, () => onSelected(question, answerIndex))
  }
  const handleSkip = () => {
    quiz.setSelected(false, () => skipQuestion())
  }
  useEffect(() => {
    quiz.startTimer(question.timerSec, handleSkip)
    return () => quiz.stopTimer()
  }, [question])
  return (
    <div
      id="quiz-container"
      className="min-vw-100 min-vh-100 flex flex-col"
      style={{ pointerEvents: quiz.isInteractable ? "all" : "none" }}
    >
      <QuizHeader />
      <QuizMain
        session={session}
        question={question}
        onSelected={handleSelection}
        timeLeft={quiz.timer}
      />
      <QuizFooter exitGame={exitGame} skipQuestion={handleSkip} />
      <QuizChoiceOverlay
        mode={quiz.state === QuizState.Idle ? null : quiz.isSelectedCorrect}
        answerScore={
          quiz.isSelectedCorrect
            ? CORRECT_ANSWER_SCORE_GAIN
            : INCORRECT_ANSWER_SCORE_GAIN
        }
      />
    </div>
  )
}
export default QuizScreen
