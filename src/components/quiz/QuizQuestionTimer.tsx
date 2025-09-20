import SandClockIcon from "@/icons/SandClockIcon"

interface Props {
  timeLeft: number
}
const QuizQuestionTimer = ({ timeLeft }: Props) => {
  return (
    <div id="quiz-timer-container" className="flex flex-row">
      <SandClockIcon classes="sand-clock-icon" />
      <p id="quiz-timer-text">{timeLeft}s</p>
    </div>
  )
}
export default QuizQuestionTimer
