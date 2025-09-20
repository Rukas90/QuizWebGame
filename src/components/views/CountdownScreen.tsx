import LargeText from "@/ui/LargeText"

interface Props {
  countdown: number
}
const CountdownScreen = ({ countdown }: Props) => {
  return <LargeText>{countdown === 0 ? "GO" : countdown}</LargeText>
}
export default CountdownScreen
