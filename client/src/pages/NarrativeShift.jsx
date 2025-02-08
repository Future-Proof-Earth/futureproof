import { useState } from 'react'
import { leftRightArticles, authLibArticles } from '../data/articles'

function NarrativeShift() {
  const [activeSpectrum, setActiveSpectrum] = useState('leftRight')
  const [sliderValue, setSliderValue] = useState(0)

  const getCurrentText = () => {
    const articles = activeSpectrum === 'leftRight' ? leftRightArticles : authLibArticles
    return articles.versions[sliderValue.toString()] || articles.versions["0"]
  }

  const getIdeologyLabel = () => {
    if (sliderValue === 0) return "Neutral"
    
    if (activeSpectrum === 'leftRight') {
      if (sliderValue <= -4) return "Far Left"
      if (sliderValue <= -2) return "Left"
      if (sliderValue >= 4) return "Far Right"
      if (sliderValue >= 2) return "Right"
      return sliderValue < 0 ? "Center Left" : "Center Right"
    } else {
      if (sliderValue <= -4) return "Strongly Authoritarian"
      if (sliderValue <= -2) return "Moderately Authoritarian"
      if (sliderValue >= 4) return "Strongly Libertarian"
      if (sliderValue >= 2) return "Moderately Libertarian"
      return sliderValue < 0 ? "Slightly Authoritarian" : "Slightly Libertarian"
    }
  }

  const getSpectrumLabels = () => {
    if (activeSpectrum === 'leftRight') {
      return { left: "Far Left", center: "Neutral", right: "Far Right" }
    }
    return { left: "Authoritarian", center: "Neutral", right: "Libertarian" }
  }

  return (
    <div className="main-container">
      <div className="demo-header">
        <h1 className="demo-title">Narrative Shift</h1>
        <p className="demo-description">
          Explore how the same facts can be shaped into different narratives across multiple political dimensions. 
          Toggle between spectrums and adjust the slider to see how different ideological lenses influence story presentation.
        </p>
      </div>

      <div className="ideology-container">
        <div className="spectrum-toggle">
          <button 
            onClick={() => setActiveSpectrum('leftRight')}
            className={`spectrum-button ${activeSpectrum === 'leftRight' ? 'active' : ''}`}
          >
            Left ⟷ Right
          </button>
          <button 
            onClick={() => setActiveSpectrum('authLib')}
            className={`spectrum-button ${activeSpectrum === 'authLib' ? 'active' : ''}`}
          >
            Authoritarian ⟷ Libertarian
          </button>
        </div>

        <div className="slider-container">
          <div className="slider-labels">
            <span>{getSpectrumLabels().left}</span>
            <span>{getSpectrumLabels().center}</span>
            <span>{getSpectrumLabels().right}</span>
          </div>
          <input 
            type="range"
            min={-5}
            max={5}
            step={1}
            value={sliderValue}
            onChange={(e) => setSliderValue(parseInt(e.target.value))}
          />
          <div className="position-label">
            Current Position: {getIdeologyLabel()} ({sliderValue})
          </div>
        </div>
        
        <div className="article-container">
          <h2 className="article-title">{getCurrentText().title}</h2>
          <h3 className="article-subtitle">{getCurrentText().subtitle}</h3>
          <hr /><br />
          {getCurrentText().paragraphs.map((paragraph, index) => (
            <p key={index} className="article-text">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NarrativeShift