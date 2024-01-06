// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  countingMangoes = () => {
    this.setState(previousMangoCount => ({
      mangoesCount: previousMangoCount.mangoesCount + 1,
    }))
  }

  countingBananas = () => {
    this.setState(previousBananaCount => ({
      bananasCount: previousBananaCount.bananasCount + 1,
    }))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div className="backgroundContainer">
        <div className="contentContainer">
          <h1 className="heading">
            Bob ate <span className="count">{mangoesCount}</span> mangoes
            <span className="count"> {bananasCount}</span> bananas
          </h1>
          <div className="image-container">
            <div className="mangoesContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mangoes-img"
              />
              <button
                className="mangoes-btn"
                type="button"
                onClick={this.countingMangoes}
              >
                Eat Mango
              </button>
            </div>
            <div className="bananasContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="bananas-img"
              />
              <button
                className="bananas-btn"
                type="button"
                onClick={this.countingBananas}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
