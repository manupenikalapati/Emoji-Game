/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {clickedList: [], isGameOn: true, topScore: 0}

  playAgainGame = () => {
    const {clickedList} = this.state
    this.setState({topScore: clickedList.length})
    this.setState({clickedList: [], isGameOn: true})
  }

  displayWinOrLose = () => {
    const {emojisList} = this.props
    const {clickedList} = this.state
    return (
      <div>
        <WinOrLoseCard
          emojiList={emojisList}
          clickedList={clickedList}
          playAgainGame={this.playAgainGame}
        />
      </div>
    )
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickedEmojiList = name => {
    const {clickedList, topScore} = this.state
    const {emojisList} = this.props
    const isEmojiFind = clickedList.includes(name)
    const clickedListLength = clickedList.length

    if (isEmojiFind) {
      if (clickedListLength > topScore) {
        this.setState({isGameOn: false})
      }
    } else {
      this.setState(lastValue => ({
        clickedList: [...lastValue.clickedList, name],
      }))
    }
  }

  getShuffledList = () => {
    const shuffledList = this.shuffledEmojisList()

    return (
      <ul className="unOrderList-style">
        {shuffledList.map(eachItem => (
          <EmojiCard
            key={eachItem.id}
            emojiValues={eachItem}
            clickedEmojiList={this.clickedEmojiList}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameOn, topScore, clickedList} = this.state

    return (
      <div className="main-card">
        <NavBar
          finalScore={topScore}
          score={clickedList.length}
          isGameOn={isGameOn}
        />
        <div className="emoji-game-card">
          {isGameOn ? this.getShuffledList() : this.displayWinOrLose()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
