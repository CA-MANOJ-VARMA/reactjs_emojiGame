// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {idsClicked, playAgainFunction, displayedScore} = props
  console.log('asfdgh')
  console.log(idsClicked.length)
  const PlayAgainFunction = () => {
    playAgainFunction()
  }
  return (
    <div className="css-winOrLose-Card">
      <div className="css-left-Container">
        {displayedScore === 12 ? <h1>You Won</h1> : <h1>You Lose</h1>}
        {displayedScore === 12 ? <p>Best Score</p> : <p>Score</p>}
        {displayedScore !== 12 ? <p>{displayedScore}/12</p> : <p>12/12</p>}
        <button
          type="button"
          onClick={PlayAgainFunction}
          className="css-playagainButton-itself"
        >
          Play Again
        </button>
      </div>
      <div className="css-right-Container">
        <img
          src={
            displayedScore === 12
              ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
          }
          alt="win or lose"
          className="css-winlose-image"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
