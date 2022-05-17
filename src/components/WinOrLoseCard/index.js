// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {clickedList, emojiList, playAgainGame} = props

  const isWin = clickedList.length === emojiList.length

  const WinEmoji = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const LoseEmoji = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const finalEmoji = isWin ? WinEmoji : LoseEmoji
  const scoreTitle = isWin ? 'Best Score' : 'Score'
  const winOrLoseText = isWin ? 'You Won' : 'You Lose'

  return (
    <div className="win-or-lose-card">
      <img src={finalEmoji} className="emoji-win-or-style" alt="win or lose" />
      <h1 className="win-lose-text">{winOrLoseText}</h1>
      <p className="para-score-title">{scoreTitle}</p>
      <p className="score-num-style">{clickedList.length}/12</p>
      <button
        type="button"
        className="button-play-style"
        onClick={playAgainGame}
      >
        Play Again
      </button>
    </div>
  )
}

export default WinOrLoseCard
