// Write your code here
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="bg-cont">
        <div>
          <h1 className="heading">Cryptocurrency Tracker</h1>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <ul className="table">
          <li>
            <div className="table-header">
              <div className="column-1">Coin Type</div>
              <div className="column-2">USD</div>
              <div className="column-3">EURO</div>
            </div>
          </li>
          <CryptocurrenciesList />
        </ul>
      </div>
    )
  }
}

export default CryptocurrencyTracker
