import {useState} from 'react'

export default function Hug(){
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const questions = [
    {
      question: "What makes our bestie special?",
      answers: ["Amazing personality", "Great sense of humor", "Kind heart", "All of the above"],
      correct: 3
    },
    {
      question: "What's the best part about birthdays?",
      answers: ["Getting older", "Cake and treats", "Celebrating with loved ones", "Making wishes"],
      correct: 2
    },
    {
      question: "How awesome is your birthday bestie?",
      answers: ["Pretty cool", "Very awesome", "Absolutely incredible", "Beyond words!"],
      correct: 3
    },
    {
      question: "What's the perfect birthday wish?",
      answers: ["Health and happiness", "Success in everything", "Endless adventures", "All dreams come true"],
      correct: 3
    },
    {
      question: "What does friendship mean?",
      answers: ["Being there through thick and thin", "Sharing laughs and tears", "Making memories together", "All of these"],
      correct: 3
    },
    {
      question: "What makes birthdays memorable?",
      answers: ["Expensive gifts", "The love and laughter shared", "Social media posts", "The cake flavor"],
      correct: 1
    },
    {
      question: "How should we celebrate?",
      answers: ["With joy and gratitude", "With love and appreciation", "With lots of fun", "All of the above"],
      correct: 3
    },
    {
      question: "What's the secret to staying young?",
      answers: ["Expensive skincare", "A positive attitude and fun spirit", "Time travel", "Magic potions"],
      correct: 1
    },
    {
      question: "What's the most important birthday gift?",
      answers: ["Designer clothes", "Expensive jewelry", "The presence of loved ones", "Latest gadgets"],
      correct: 2
    }
  ]

  const handleAnswer = (index) => {
    setSelectedAnswer(index)
    
    // Trigger confetti
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)

    if (index === questions[currentQuestion].correct) {
      setScore(score + 1)
    }

    setTimeout(() => {
      setSelectedAnswer(null)
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setShowResult(true)
      }
    }, 1500)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
  }

  const triggerConfetti = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  return(
    <div className="birthday-card text-center relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="confetti absolute text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {['🎊', '🎉', '🎈', '⭐', '✨', '🎁', '🎂'][Math.floor(Math.random() * 7)]}
            </div>
          ))}
        </div>
      )}

      <div className="space-y-8 relative z-10">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
          Birthday Quiz! 🎉
        </h2>

        {!showResult ? (
          <>
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">
                Question {currentQuestion + 1} of {questions.length}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <p className="text-2xl text-gray-700 font-semibold mb-8">
              {questions[currentQuestion].question}
            </p>

            <div className="space-y-4">
              {questions[currentQuestion].answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full px-6 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    selectedAnswer === null
                      ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white hover:from-blue-500 hover:to-purple-600 shadow-lg'
                      : selectedAnswer === index
                      ? index === questions[currentQuestion].correct
                        ? 'bg-gradient-to-r from-green-400 to-green-600 text-white scale-105'
                        : 'bg-gradient-to-r from-red-400 to-red-600 text-white'
                      : index === questions[currentQuestion].correct
                      ? 'bg-gradient-to-r from-green-400 to-green-600 text-white scale-105'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {answer}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-6">
            <div className="text-8xl mb-4">
              {score === questions.length ? '🎊' : score >= questions.length / 2 ? '🎉' : '🎈'}
            </div>
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              {score === questions.length ? 'Perfect Score!' : score >= questions.length / 2 ? 'Great Job!' : 'Good Try!'}
            </h3>
            <p className="text-2xl text-gray-700">
              You got {score} out of {questions.length} correct!
            </p>
            <p className="text-xl text-gray-600 italic">
              {score === questions.length 
                ? "You know everything about making this birthday special! 🌟" 
                : "You’re the best bestie ever! ❤️❤️❤️"}
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={resetQuiz}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
              >
                Try Again 🔄
              </button>
              <button
                onClick={triggerConfetti}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
              >
                More Confetti! 🎊
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
