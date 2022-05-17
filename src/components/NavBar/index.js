// Write your code here.
import './index.css'

const NavBar = props => {
  const {finalScore, score, isGameOn} = props
  const getParaText = () => {
    if (isGameOn === true) {
      return (
        <div className="score-card-style">
          <p className="score-style">Score: {score}</p>
          <p className="score-style">Top Score: {finalScore}</p>
        </div>
      )
    }
    return null
  }
  return (
    <nav className="nav-card">
      <div className="image-title-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-style"
        />

        <h1 className="emoji-game-heading">Emoji Game</h1>
      </div>
      {getParaText()}
    </nav>
  )
}

export default NavBar
