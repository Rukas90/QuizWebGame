import { useEffect } from "react"
import Background, { BackgroundType } from "@/ui/Background"
import { GameState, useGame } from "@/hooks//useGame"
import QuizScreen from "./QuizScreen"
import ResultScreen from "./ResultScreen"
import CountdownScreen from "./CountdownScreen"

const GameView = () => {
  const game = useGame()

  useEffect(() => {
    game.start()
  }, [])

  const renderGameScreen = () => {
    switch (game.gameState) {
      case GameState.Countdown:
        return <CountdownScreen countdown={game.countdown} />
      case GameState.Playing:
        return (
          <QuizScreen
            session={game.session.data}
            question={game.questions.currentQuestion!}
            onSelected={game.markSelected}
            exitGame={game.exit}
            skipQuestion={game.markSkip}
          />
        )
      case GameState.Result:
        return (
          <ResultScreen totalScore={game.roundScore} playAgain={game.start} />
        )
      default:
        return <></>
    }
  }
  return (
    <Background
      type={BackgroundType.Play}
      classes="justify-center items-center flex-col"
    >
      {renderGameScreen()}
    </Background>
  )
}
export default GameView
