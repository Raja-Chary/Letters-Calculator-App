// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputText: '',
  }

  onChangeInputText = event => {
    this.setState({
      inputText: event.target.value,
    })
  }

  render() {
    const {inputText} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-container">
            <label className="para" htmlFor="phraseText">
              Enter the phrase
            </label>
            <br />

            <input
              id="phraseText"
              onChange={this.onChangeInputText}
              type="text"
              placeholder="Enter the phrase"
              className="text-input"
              value={inputText}
            />
          </div>
          <div className="letters-count-container">
            <p className="count-text">No.of letters: {inputText.length}</p>
          </div>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
