import { withPositivePrefix } from "@/utils/Utils"

interface Props {
  mode: boolean | null
  answerScore: number
}
const QuizChoiceOverlay = ({ mode, answerScore }: Props) => {
  return (
    <div
      id="quiz-choice-overlay"
      className={`flex justify-center items-center min-vw-100 min-vh-100 absolute top-0 left-0 ${
        mode !== null && (mode ? "correct" : "incorrect")
      }`}
    >
      {
        <p id="answer-score-text" className={`${mode !== null && "show"}`}>
          {withPositivePrefix(answerScore)}
        </p>
      }
    </div>
  )
}
export default QuizChoiceOverlay
