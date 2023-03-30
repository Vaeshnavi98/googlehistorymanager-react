import './index.css'

const HistoryItems = props => {
  const {userDetails, key, deleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = userDetails

  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="user-card-container" key={key}>
      <div className="div-deco">
        <p className="user-designation"> {timeAccessed} </p>
        <div className="user-details-container">
          <img src={logoUrl} className="profile-pic" alt="domain logo" />
          <p className="para-deco">{title}</p>
          <p>{domainUrl}</p>
        </div>
      </div>
      <button
        className="delete-button"
        onClick={onDelete}
        type="button"
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default HistoryItems
