import TopicBreakdown from '../components/TopicBreakdown'

function DecisionExplorer() {
  return (
    <>
      <div className="demo-header">
        <h1 className="demo-title">Decision Explorer</h1>
        <p className="demo-description">
          Navigate the complexity behind major policy decisions. Uncover the interconnected factors that shape our choices.
        </p>
      </div>
      <div className="main-container">
        <TopicBreakdown />
      </div>
    </>
  )
}

export default DecisionExplorer