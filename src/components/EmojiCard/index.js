// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiValues, clickedEmojiList} = props
  const {id, emojiName, emojiUrl} = emojiValues

  const clickedEmoji = () => {
    clickedEmojiList(emojiName)
  }

  return (
    <li className="emoji-list-style">
      <button type="button" className="button-style" onClick={clickedEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-style" />
      </button>
    </li>
  )
}

export default EmojiCard
