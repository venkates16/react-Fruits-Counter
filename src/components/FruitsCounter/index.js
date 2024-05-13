// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mango = () => {
    this.setState(each => ({mango: each.mango + 1}))
  }
  banana = () => {
    this.setState(each => ({banana: each.banana + 1}))
  }

  render() {
    
    const {banana, mango} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1>
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div className="align">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
              />
              <button onClick={this.mango}>Eat Mango</button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button onClick={this.banana}>Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
