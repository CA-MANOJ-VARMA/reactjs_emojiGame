/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    TopScore: 0,
    count: 0,
    firstClickedId: '',
    displayedScore: 0,
    gamefinished: false,
    idsClicked: [],
  }

  cardDisplayFunction = () => {
    const {emojisList} = this.props
    console.log(emojisList)
    emojisList.sort(() => Math.random() - 0.5)
    return (
      <ul className="css-displayEmoji-container">
        {emojisList.map(eachItem => (
          <EmojiCard
            eachItem={eachItem}
            shuffleFunction={this.onClickShuffleFunction}
            key={eachItem.id}
          />
        ))}
      </ul>
    )
  }

  onClickShuffleFunction = clickedId => {
    const {
      count,
      firstClickedId,
      score,
      TopScore,
      displayedScore,
      idsClicked,
    } = this.state
    console.log(clickedId, count, firstClickedId)
    // if (count === 0) {
    //   idsClicked.push(clickedId)
    //   this.setState(prevState => ({
    //     firstClickedId: clickedId,
    //     count: prevState.count + 1,
    //     idsClicked,
    //   }))
    // }
    if (!idsClicked.includes(clickedId)) {
      idsClicked.push(clickedId)
      this.setState(prevState => ({
        score: prevState.score + 1,
        idsClicked,
      }))
    } else {
      this.setState(prevState => ({
        score: 0,
        TopScore: prevState.score > prevState.TopScore ? score : TopScore,
        displayedScore: score,
        gamefinished: true,
      }))
    }

    if (idsClicked.length === 12) {
      this.setState(prevState => ({
        TopScore: score >= prevState.TopScore ? score : TopScore,
        displayedScore: score,
        gamefinished: true,
      }))
    }

    this.cardDisplayFunction()
  }

  playAgainFunction = () => {
    this.setState({gamefinished: false, idsClicked: []})
  }

  render() {
    const {
      score,
      TopScore,
      gamefinished,
      displayedScore,
      idsClicked,
    } = this.state
    console.log(TopScore)
    return (
      <div className="css-bg-container">
        <NavBar
          score={score}
          topScore={TopScore}
          idsClicked={idsClicked.length}
        />

        <div className="css-ul-bg-container">
          {!gamefinished ? (
            this.cardDisplayFunction()
          ) : (
            <WinOrLoseCard
              displayedScore={displayedScore}
              idsClicked={idsClicked}
              playAgainFunction={this.playAgainFunction}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
