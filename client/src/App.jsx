import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import NarrativeShift from './pages/NarrativeShift'
import DecisionExplorer from './pages/DecisionExplorer'
import Vision from './pages/Vision'
import FutureProofingGovernance from './pages/FutureProofingGovernance'
import Footer from './components/Footer'
import ScrollToTop from './utils/ScrollToTop';
import './styles/App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/narrative-shift" element={<NarrativeShift />} />
        <Route path="/decision-explorer" element={<DecisionExplorer />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/future-proofing-governance" element={<FutureProofingGovernance />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App