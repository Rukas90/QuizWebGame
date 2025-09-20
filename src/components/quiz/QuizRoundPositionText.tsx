import { TOTAL_QUESTIONS_PER_ROUND } from "@/types/GameConstants"
import { PlaySession } from "@/hooks/usePlaySession"

interface Props {
  session: PlaySession
}
const QuizRoundPositionText = ({ session }: Props) => {
  return (
    <p id="quiz-round-position-text">
      Question <span>{session.answeredCount + 1}</span> out of{" "}
      <span>{TOTAL_QUESTIONS_PER_ROUND}</span>
    </p>
  )
}
export default QuizRoundPositionText
