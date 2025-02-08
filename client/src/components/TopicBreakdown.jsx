// src/components/TopicBreakdown.jsx
import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { testConnection, generatePolicyAnalysis } from '../services/anthropicService'

const TopicBreakdown = () => {
  const [policyData, setPolicyData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [expandedItems, setExpandedItems] = useState(new Set())
  const [isExpanded, setIsExpanded] = useState(false)

  const handleTestAPI = async () => {
    setLoading(true);
    try {
      const result = await testConnection();
      alert(result);
    } catch (error) {
      alert('Error connecting to API: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  const analyzePolicyQuestion = async (question) => {
    setLoading(true);
    try {
      const analysis = await generatePolicyAnalysis(question);
      setPolicyData(analysis);
      setIsExpanded(true);
    } catch (error) {
      console.error('Error analyzing policy:', error);
      alert('Error analyzing policy: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  const toggleItem = (id) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

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

  return (
    <div className="glassmorphic">
      <button
        onClick={handleTestAPI}
        className="gradient-button mb-4"
      >
        Test API Connection
      </button>

      <PolicyQuestionInput onAnalyze={analyzePolicyQuestion} />
      
      {loading && <div>Loading...</div>}
      
      {isExpanded && policyData && (
        <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.5rem' }}>
          {policyData.subtopics.map((subtopic) => (
            <SubtopicItem 
              key={subtopic.id} 
              subtopic={subtopic} 
              expandedItems={expandedItems}
              toggleItem={toggleItem}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default TopicBreakdown