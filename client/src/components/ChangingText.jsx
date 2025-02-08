import { useState, useEffect } from 'react'

const ChangingText = () => {
  const words = [
    'Future',
    'Rumour',
    'Bias',
    'Lie',
    'Deceipt',
    'Cheat',
    'Fraud',
    'Scam',
    'Fake',
    'People'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const switchWord = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }

    const interval = setInterval(() => {
      switchWord()
    }, currentIndex === 0 ? 6000 : 300)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="changing-text">
      {words.map((word, index) => (
        <span
          key={word}
          className={`word ${index === currentIndex ? 'visible' : ''}`}
        >
          {word}
        </span>
      ))}
    </div>
  )
}

export default ChangingText