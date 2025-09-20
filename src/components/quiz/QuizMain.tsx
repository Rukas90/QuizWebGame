import { Question } from "@/types/Question"
import QuizAnswers from "./QuizAnswers"
import QuizQuestionText from "./QuizQuestionText"
import QuizQuestionTimer from "./QuizQuestionTimer"
import QuizRoundPositionText from "./QuizRoundPositionText"
import { PlaySession } from "@/hooks/usePlaySession"

interface Props {
  session: PlaySession
  question: Question
  onSelected: (answerIndex: number) => void
  timeLeft: number
}
const QuizMain = ({ session, question, onSelected, timeLeft }: Props) => {
  const handleSelection = (answerIndex: number) => {
    onSelected(answerIndex)
  }
  return (
    <div
      id="quiz-main-container"
      className="w-100 flex flex-col flex-grow items-center"
    >
      <QuizQuestionTimer timeLeft={timeLeft} />
      <QuizRoundPositionText session={session} />
      <QuizQuestionText text={question.headline} />
      <QuizAnswers options={question.options} onSelected={handleSelection} />
    </div>
  )
}
export default QuizMain
