import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-container">
      <Link to="/" className="nav-logo">Futureproof</Link>
      <div className="nav-demo-container">
        <Link to="/narrative-shift" className="nav-demo-button">Narrative Shift</Link>
        <Link to="/decision-explorer" className="nav-demo-button">Decision Explorer</Link>
      </div>
    </nav>
  )
}

export default Navbar