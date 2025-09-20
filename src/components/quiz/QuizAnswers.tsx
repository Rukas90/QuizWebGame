import QuizAnswerOption from "./QuizAnswerOption"

interface Props {
  options: string[]
  onSelected: (answerIndex: number) => void
}
const QuizAnswers = ({ options, onSelected }: Props) => {
  return (
    <div id="quiz-answers-container">
      <QuizAnswerOption
        answerIndex={0}
        text={options[0]}
        onSelected={onSelected}
      />
      <QuizAnswerOption
        answerIndex={1}
        text={options[1]}
        onSelected={onSelected}
      />
      <QuizAnswerOption
        answerIndex={2}
        text={options[2]}
        onSelected={onSelected}
      />
      <QuizAnswerOption
        answerIndex={3}
        text={options[3]}
        onSelected={onSelected}
      />
    </div>
  )
}
export default QuizAnswers
