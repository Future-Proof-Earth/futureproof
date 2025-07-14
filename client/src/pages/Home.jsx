import { Link } from 'react-router-dom'
import ChangingText from '../components/ChangingText'
import ContentSection from '../components/ContentSection'

function Home() {
  return (
    <div className="main-container">
      <div className="text-container">
        <ChangingText />
        <span className="proof">proof</span>
      </div>
      <div className="tagline">Removing ego from decision making</div>

      <ContentSection>
        <p>We are involved in a battle with truth, data and our attention. In a world of bot-created content, targeted feeds,
          crafted narratives and media echo-chambers, how can we, as a society, better evaluate information to
          make decisions that improve our collective wellbeing?</p>
        <p>Every decision carries the weight of our biases, beliefs, and ego. And the stories told to us carry the
          weight of someone else's. But what if we could strip all that away? What if we could see through the
          manipulation of data in every major decision?</p>
        <p>Futureproof is building tools to strip away bias and reveal the true complexity behind seemingly simple
          choices in an effort to improve how we live in society.
          We expose how the stories we're presented with often diverge from the data underneath. This
          shapes our understanding, and our understanding shapes our decisions.
          By better navigating this complex field, we hone what we give our attention and can live more fulfilling lives.</p>
        <p style={{ textAlign: 'center' }}><strong>Understanding reality shouldn't be a privilege - it should be our shared foundation.</strong></p>
        <form action="https://formspree.io/f/mqaajbwj" method="POST" className="signup-form">
          <input type="email" name="email" placeholder="Enter your email" required className="email-input" />
          <button type="submit" className="cta-button">Join the waitlist</button>
        </form>
      </ContentSection>

      <ContentSection>
        <div style={{ marginTop: '2rem' }}>
          <h2 style={{ textAlign: 'left' }}>Interactive Demos</h2><br />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1rem' }}>
            <DemoItem
              title="Narrative Shift"
              description="Explore how media bias shapes narratives and understand how the same story can be told from different ideological perspectives."
              link="/narrative-shift"
            />
            <DemoItem
              title="Decision Explorer"
              description="Discover the true complexity behind seemingly simple policy decisions and explore the many factors that should inform our choices."
              link="/decision-explorer"
            />
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div style={{ marginTop: '2rem' }}>
          <h2 style={{ textAlign: 'left' }}>Articles & Opinions</h2><br />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1rem' }}>
            <DemoItem
              title="Our vision of the future"
              description="Reimagining society through better systems, data, and collective action"
              link="/vision"
              buttonText="Read"
            />
            <DemoItem
              title="Future-Proofing Governance"
              description="An exploration of how modern software development principles could revolutionize political systems to create more adaptive, representative, and evidence-based governance."
              link="/future-proofing-governance"
              buttonText="Read"
            />
          </div>
        </div>
      </ContentSection>
    </div>
  )
}

// Helper component for demo and article items
const DemoItem = ({ title, description, link, buttonText = "Try Demo" }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <div style={{ flex: 1, textAlign: 'left', paddingRight: '2rem' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <Link to={link} className="link-button" style={{ flexShrink: 0 }}>{buttonText}</Link>
  </div>
)

export default Home