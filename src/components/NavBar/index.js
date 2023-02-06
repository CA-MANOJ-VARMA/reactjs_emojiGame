// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, idsClicked} = props
  return (
    <nav className="css-navbar-container">
      <ul className="css-ul-container">
        <li>
          <div className="css-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
              className="css-logo-image-itself"
            />
            <h1>Emoji Game</h1>
          </div>
        </li>
        <li>
          <div className="css-score-container">
            <p>{idsClicked !== 12 && `Score: ${score}`}</p>
            <p>{idsClicked !== 12 && `Top Score: ${topScore}`}</p>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
