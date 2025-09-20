import { ButtonProps } from "@/types/ButtonProps"

const StopPlayingButton = ({ onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="quiz-action-btn stop-playing">
      Stop Playing
    </button>
  )
}
export default StopPlayingButton
