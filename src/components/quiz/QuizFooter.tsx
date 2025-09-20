import SkipQuestionButton from "@/ui/SkipQuestionButton"
import StopPlayingButton from "@/ui/StopPlayingButton"

interface Props {
  exitGame: () => void
  skipQuestion: () => void
}
const QuizFooter = ({ exitGame, skipQuestion }: Props) => {
  return (
    <div id="quiz-footer-container" className="w-100">
      <StopPlayingButton onClick={exitGame} />
      <SkipQuestionButton onClick={skipQuestion} />
    </div>
  )
}
export default QuizFooter
