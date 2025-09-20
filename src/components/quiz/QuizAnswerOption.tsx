interface Props {
  answerIndex: 0 | 1 | 2 | 3
  text: string
  onSelected: (answerIndex: number) => void
}

const QuizAnswerOption = ({ answerIndex, text, onSelected }: Props) => {
  return (
    <button
      onClick={() => onSelected(answerIndex)}
      className="answer-option-btn"
    >
      {text}
    </button>
  )
}
export default QuizAnswerOption
