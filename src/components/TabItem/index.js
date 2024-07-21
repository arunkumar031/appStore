// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeTabClassName = isActive ? 'active-tab' : ''

  const onClickTabItem = () => {
    onClickTab(tabId)
  }

  return (
    <li>
      <button
        className={`tab ${activeTabClassName}`}
        onClick={onClickTabItem}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
