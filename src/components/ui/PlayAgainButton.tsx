import { ButtonProps } from "@/types/ButtonProps"

const PlayAgainButton = ({ onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="quiz-action-btn play-again">
      Play Again
    </button>
  )
}
export default PlayAgainButton
