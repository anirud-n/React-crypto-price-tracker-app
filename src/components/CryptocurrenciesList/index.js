// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    currencyData: [],
    isFetched: false,
  }

  componentDidMount() {
    this.getData()
  }

  formatData = data => {
    const updatedDataList = data.map(eachObj => ({
      currencyName: eachObj.currency_name,
      usdValue: eachObj.usd_value,
      euroValue: eachObj.euro_value,
      id: eachObj.id,
      currencyLogo: eachObj.currency_logo,
    }))
    return updatedDataList
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = this.formatData(data)
    this.setState({
      currencyData: updatedData,
      isFetched: true,
    })
  }

  render() {
    const {currencyData, isFetched} = this.state
    return (
      <div>
        {isFetched ? (
          currencyData.map(eachObj => (
            <CryptocurrencyItem eachObj={eachObj} key={eachObj.id} />
          ))
        ) : (
          <div data-testid="loader">
            <Loader
              type="Rings"
              color="#00e7ff"
              height={80}
              width={80}
              className="loader"
            />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
