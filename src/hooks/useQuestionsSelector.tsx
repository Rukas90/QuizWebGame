import { useCallback, useRef, useState } from "react"
import geographyQuestions from "@/assets/data/questions.geography.json"
import mathQuestions from "@/assets/data/questions.math.json"
import { getRandomEnumValue } from "@/utils/Utils"
import { Question } from "@/types/Question"

export enum QuestionsCategory {
  Geography,
  Math,
}
export const useQuestionsSelector = () => {
  const [currentCategory, setCurrentCategory] = useState<QuestionsCategory>(
    QuestionsCategory.Geography
  )
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const usedQuestions = useRef<Set<number>>(new Set<number>())

  const getAllQuestions = useCallback(() => {
    switch (currentCategory) {
      case QuestionsCategory.Geography:
        return geographyQuestions
      case QuestionsCategory.Math:
        return mathQuestions
      default:
        return null
    }
  }, [])

  const getRandomUnusedIndex = useCallback(() => {
    const allQuestions = getAllQuestions()
    if (!allQuestions || allQuestions.length === 0) {
      return -1
    }
    if (usedQuestions.current.size >= allQuestions.length) {
      usedQuestions.current.clear()
    }
    const availableIndices = Array.from(
      { length: allQuestions.length },
      (_, i) => i
    ).filter((i) => !usedQuestions.current.has(i))

    if (availableIndices.length === 0) {
      return -1
    }
    const randomIndex = Math.floor(Math.random() * availableIndices.length)

    return availableIndices[randomIndex]
  }, [getAllQuestions])

  const getQuestion = useCallback((): Question | null => {
    const allQuestions = getAllQuestions()
    if (!allQuestions) {
      return null
    }
    const index = getRandomUnusedIndex()

    if (index === -1) {
      return null
    }
    usedQuestions.current.add(index)

    return allQuestions[index]
  }, [getAllQuestions, getRandomUnusedIndex])

  const getRandomCategory = useCallback((ensureNewToPrevious: boolean) => {
    return getRandomEnumValue(
      QuestionsCategory,
      ensureNewToPrevious,
      currentCategory
    )
  }, [])

  const reset = useCallback(() => {
    usedQuestions.current.clear()
  }, [])

  const selectNextQuestion = () => {
    const newQuestion = getQuestion()
    if (newQuestion) {
      setCurrentQuestion(newQuestion)
      return newQuestion
    }
    return newQuestion
  }

  const selectNewRandomCategory = () => {
    setCurrentCategory(getRandomCategory(true))
    reset()
  }

  return {
    currentCategory,
    currentQuestion,
    selectNextQuestion,
    selectNewRandomCategory,
    reset,
  }
}
