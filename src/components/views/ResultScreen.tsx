import { useScoreCounter } from "@/hooks/useScoreCounter"
import { withPositivePrefix } from "@/utils/Utils"
import { useEffect } from "react"
import LargeHeaderText from "@/ui/LargeHeaderText"
import LargeText from "@/ui/LargeText"
import PlayAgainButton from "@/ui/PlayAgainButton"
import StopPlayingButton from "@/ui/StopPlayingButton"

interface Props {
  totalScore: number
  playAgain: () => void
}
const ResultScreen = ({ totalScore, playAgain }: Props) => {
  const counter = useScoreCounter()

  useEffect(() => {
    counter.start(totalScore)
  }, [totalScore])

  return (
    <div
      id="result-screen-container"
      className="flex w-100 h-100 flex-col justify-center items-center"
    >
      <LargeHeaderText>SCORE</LargeHeaderText>
      <LargeText>{withPositivePrefix(counter.count)}</LargeText>
      <div id="result-screen-navigation">
        <StopPlayingButton />
        <PlayAgainButton onClick={playAgain} />
      </div>
    </div>
  )
}
export default ResultScreen
