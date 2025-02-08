import { useState } from 'react'

const PolicyQuestionInput = ({ onAnalyze }) => {
  const [question, setQuestion] = useState('')

  return (
    <div className="mb-4">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter a policy question..."
        className="w-full p-2 rounded"
      />
      <button
        onClick={() => onAnalyze(question)}
        className="gradient-button mt-2"
      >
        Analyze Question
      </button>
    </div>
  )
}