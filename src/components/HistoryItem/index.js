import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteItem} = props
  const {id, logoUrl, timeAccessed, title, domainUrl} = historyDetails

  const Delete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-contianer">
      <div className="card">
        <p className="time">{timeAccessed}</p>
        <div className="logo-container">
          <div>
            <img className="domain-logo" src={logoUrl} alt="domain Logo" />
          </div>
          <div>
            <p className="title">{title}</p>
            <p className="url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button className="button" type="button" onClick={Delete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
