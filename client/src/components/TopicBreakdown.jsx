import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { brexitData } from '../data/brexitData.js'

const FactorItem = ({ factor, expandedItems, toggleItem }) => (
  <div className="ml-6 mb-4">
    <div 
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => toggleItem(factor.id)}
      style={{ marginBottom: '0.5rem' }}
    >
      {expandedItems.has(factor.id) ? 
        <ChevronDown size={24} /> : 
        <ChevronRight size={24} />
      }
      <span style={{ fontWeight: 500 }}>{factor.title}</span>
    </div>
    {expandedItems.has(factor.id) && (
      <div className="topic-card" style={{ marginLeft: '1.5rem' }}>
        <p style={{ marginBottom: '1rem' }}>{factor.summary}</p>
        
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Expert Views:</h4>
          <p style={{ marginBottom: '0.5rem' }}>• {factor.expertViews.perspective1}</p>
          <p>• {factor.expertViews.perspective2}</p>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Sources:</h4>
          {factor.sources.map((source, index) => (
            <p key={index} style={{ marginBottom: '0.25rem' }}>• {source}</p>
          ))}
        </div>

        <div>
          <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Key Considerations:</h4>
          {factor.subfactors.map((subfactor, index) => (
            <p key={index} style={{ marginBottom: '0.25rem' }}>• {subfactor}</p>
          ))}
        </div>
      </div>
    )}
  </div>
)

const SubtopicItem = ({ subtopic, expandedItems, toggleItem }) => (
  <div style={{ marginBottom: '1rem' }}>
    <div 
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => toggleItem(subtopic.id)}
      style={{ marginBottom: '0.5rem' }}
    >
      {expandedItems.has(subtopic.id) ? 
        <ChevronDown size={24} /> : 
        <ChevronRight size={24} />
      }
      <span style={{ fontWeight: 600, fontSize: '1.25rem' }}>{subtopic.title}</span>
    </div>
    {expandedItems.has(subtopic.id) && (
      <div>
        <p style={{ marginLeft: '2rem', marginBottom: '1rem', opacity: 0.9 }}>
          {subtopic.summary}
        </p>
        {subtopic.factors.map((factor) => (
          <FactorItem 
            key={factor.id} 
            factor={factor} 
            expandedItems={expandedItems}
            toggleItem={toggleItem}
          />
        ))}
      </div>
    )}
  </div>
)

const TopicBreakdown = ({ treeData = brexitData }) => {
  const [expandedItems, setExpandedItems] = useState(new Set())

  const toggleItem = (id) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <div className="glassmorphic">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontWeight: 700, fontSize: '1.5rem' }}>{treeData.title}</h2>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.5rem' }}>
        {treeData.subtopics.map((subtopic) => (
          <SubtopicItem 
            key={subtopic.id} 
            subtopic={subtopic} 
            expandedItems={expandedItems}
            toggleItem={toggleItem}
          />
        ))}
      </div>
    </div>
  )
}

export default TopicBreakdown