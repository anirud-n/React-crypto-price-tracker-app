// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachObj} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = eachObj
  return (
    <li>
      <div className="table-lists">
        <div className="column-1-list">
          <img src={currencyLogo} className="icon-images" alt={currencyName} />
          <p>{currencyName}</p>
        </div>
        <div className="column-2-list">
          <p>{usdValue}</p>
        </div>
        <div className="column-3-list">
          <p>{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
