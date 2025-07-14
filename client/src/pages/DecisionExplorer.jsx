import TopicBreakdown from '../components/TopicBreakdown'
import { brexitData } from '../data/brexitData.js'
import { ukraineData } from '../data/ukraineData.js'
import { wealthTaxData } from '../data/wealthTaxData.js'
import { useState } from 'react'
import ThoughtBubbleModal from '../components/ThoughtBubbleModal'

const TREES = [
  { key: 'brexit', label: 'Should the UK leave the EU?', data: brexitData },
  { key: 'ukraine', label: 'Should America help Ukraine?', data: ukraineData },
  { key: 'wealth', label: 'Should the UK tax wealth and the rich?', data: wealthTaxData }
]

function DecisionExplorer() {
  const [openKey, setOpenKey] = useState(null)
  const currentTree = TREES.find(t => t.key === openKey)
  return (
    <>
      <div className="main-container">
        <div className="demo-header">
          <h1 className="demo-title">Decision Explorer</h1>
          <p className="demo-description">
            Navigate the complexity behind major policy decisions. Uncover the interconnected factors that shape our choices.
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
          {TREES.map(tree => (
            <button
              key={tree.key}
              className="thought-button"
              onClick={() => setOpenKey(tree.key)}
            >
              {tree.label}
              <span className="thought-bubble-dot" style={{ left: '20px', bottom: '-18px', width: '24px', height: '24px' }} />
              <span className="thought-bubble-dot" style={{ left: '40px', bottom: '-28px', width: '14px', height: '14px' }} />
            </button>
          ))}
        </div>
        <ThoughtBubbleModal open={!!openKey} onClose={() => setOpenKey(null)}>
          {currentTree && <TopicBreakdown treeData={currentTree.data} />}
        </ThoughtBubbleModal>
      </div>
    </>
  )
}

export default DecisionExplorer