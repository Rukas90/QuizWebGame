import { ButtonProps } from "@/types/ButtonProps"

const SkipQuestionButton = ({ onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="quiz-action-btn skip-question">
      Skip Question
    </button>
  )
}
export default SkipQuestionButton
