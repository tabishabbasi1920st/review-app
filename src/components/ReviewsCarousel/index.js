import './index.css'

const ReviewsCarousel = props => {
  const {
    onRightArrowClicked,
    onLeftArrowClicked,
    imgUrl,
    username,
    companyName,
    description,
  } = props

  const leftArrowClicked = () => {
    onLeftArrowClicked()
  }

  const rightArrowClicked = () => {
    onRightArrowClicked()
  }

  return (
    <li className="review-container">
      <div className="image-container">
        <img src={imgUrl} alt={username} />
      </div>
      <div className="arrow-and-name-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
          alt="left arrow"
          onClick={leftArrowClicked}
        />
        <p>{username}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
          alt="right arrow"
          onClick={rightArrowClicked}
        />
      </div>
      <div className="description-container">
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}

export default ReviewsCarousel
