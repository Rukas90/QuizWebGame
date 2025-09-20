import Background, { BackgroundType } from "@/ui/Background"
import LargeHeaderText from "@/ui/LargeHeaderText"
import PlayButton from "@/ui/PlayButton"
import UserHeader from "@/ui/UserHeader"

const IndexView = () => {
  return (
    <Background
      type={BackgroundType.Index}
      classes="justify-center items-center flex-col"
    >
      <UserHeader></UserHeader>
      <LargeHeaderText>QUIZ GAME</LargeHeaderText>
      <PlayButton />
    </Background>
  )
}
export default IndexView
