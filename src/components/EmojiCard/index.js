// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachItem, shuffleFunction} = props

  const ShuffleFunction = id => {
    shuffleFunction(id)
  }

  return (
    <li key={eachItem.id}>
      <button
        type="button"
        className="css-emojiCard-button"
        onClick={() => ShuffleFunction(eachItem.id)}
      >
        <img src={eachItem.emojiUrl} alt={eachItem.emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
