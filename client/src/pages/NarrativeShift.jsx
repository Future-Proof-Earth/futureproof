import { useState } from 'react'
import {
  leftRightArticles,
  authLibArticles,
  economicHierarchicalArticles,
  extremeLeftRightArticles
} from '../data/articles'

const ARTICLE_SETS = [
  {
    key: 'leftRight',
    label: 'Left ⟷ Right',
    data: leftRightArticles,
    spectrumLabels: { left: 'Far Left', center: 'Neutral', right: 'Far Right' },
    ideologyLabels: value => {
      if (value === 0) return 'Neutral'
      if (value <= -4) return 'Far Left'
      if (value <= -2) return 'Left'
      if (value >= 4) return 'Far Right'
      if (value >= 2) return 'Right'
      return value < 0 ? 'Center Left' : 'Center Right'
    }
  },
  {
    key: 'authLib',
    label: 'Authoritarian ⟷ Libertarian',
    data: authLibArticles,
    spectrumLabels: { left: 'Authoritarian', center: 'Neutral', right: 'Libertarian' },
    ideologyLabels: value => {
      if (value === 0) return 'Neutral'
      if (value <= -4) return 'Strongly Authoritarian'
      if (value <= -2) return 'Moderately Authoritarian'
      if (value >= 4) return 'Strongly Libertarian'
      if (value >= 2) return 'Moderately Libertarian'
      return value < 0 ? 'Slightly Authoritarian' : 'Slightly Libertarian'
    }
  },
  {
    key: 'economic',
    label: 'Economic Collectivist ⟷ Economic Individualist',
    data: economicHierarchicalArticles,
    spectrumLabels: { left: 'Collectivist', center: 'Neutral', right: 'Individualist' },
    ideologyLabels: value => {
      if (value === 0) return 'Neutral'
      if (value <= -4) return 'Extreme Capitalist'
      if (value <= -2) return 'Capitalist'
      if (value >= 4) return 'Extreme Socialist'
      if (value >= 2) return 'Socialist'
      return value < 0 ? 'Center Capitalist' : 'Center Socialist'
    }
  },
  {
    key: 'extreme',
    label: 'Extreme Left ⟷ Extreme Right',
    data: extremeLeftRightArticles,
    spectrumLabels: { left: 'Extreme Left', center: 'Neutral', right: 'Extreme Right' },
    ideologyLabels: value => {
      if (value === 0) return 'Neutral'
      if (value <= -4) return 'Far Extreme Left'
      if (value <= -2) return 'Extreme Left'
      if (value >= 4) return 'Far Extreme Right'
      if (value >= 2) return 'Extreme Right'
      return value < 0 ? 'Center Extreme Left' : 'Center Extreme Right'
    }
  }
]

function NarrativeShift() {
  const [articleSetKey, setArticleSetKey] = useState('leftRight')
  const [sliderValue, setSliderValue] = useState(0)

  const currentSet = ARTICLE_SETS.find(set => set.key === articleSetKey)
  const articles = currentSet.data
  const getCurrentText = () => articles.versions[sliderValue.toString()] || articles.versions['0']
  const getIdeologyLabel = () => currentSet.ideologyLabels(sliderValue)
  const getSpectrumLabels = () => currentSet.spectrumLabels

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
        {/* Article Set Dropdown */}
        <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <label htmlFor="article-set-select" style={{ fontWeight: 500, fontSize: '1.1rem', color: 'white' }}>Article Set:</label>
          <select
            id="article-set-select"
            value={articleSetKey}
            onChange={e => setArticleSetKey(e.target.value)}
            className="spectrum-select"
          >
            {ARTICLE_SETS.map(set => (
              <option key={set.key} value={set.key}>{set.label}</option>
            ))}
          </select>
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
            onChange={e => setSliderValue(parseInt(e.target.value))}
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