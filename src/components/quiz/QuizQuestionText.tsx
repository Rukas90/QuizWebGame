interface Props {
  text: string
}

const QuizQuestionText = ({ text }: Props) => {
  return (
    <div id="quiz-question-container">
      <p id="quiz-question-text">{text}</p>
    </div>
  )
}
export default QuizQuestionText
