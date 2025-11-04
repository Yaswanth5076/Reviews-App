import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {currentIndex: 0}

  onClickLeftIcon = () => {
    const {currentIndex} = this.state
    if (currentIndex > 0) {
      this.setState(prevState => ({currentIndex: prevState.currentIndex - 1}))
    }
  }

  onClickRightIcon = () => {
    const {currentIndex} = this.state
    const {reviewsList} = this.props
    if (currentIndex < reviewsList.length - 1) {
      this.setState(prevState => ({currentIndex: prevState.currentIndex + 1}))
    }
  }

  reviewCard = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="review-card">
        <img src={imgUrl} alt={username} className="profile-img" />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {currentIndex} = this.state
    const {reviewsList} = this.props
    const currentReviewCard = reviewsList[currentIndex]

    return (
      <div className="bg-container">
        <h1 className="reviews-heading">Reviews</h1>
        <div className="details-container">
          <button
            className="arrow-button"
            type="button"
            data-testid="leftArrow"
            onClick={this.onClickLeftIcon}
          >
            <img
              className="arrow-icon-left"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          {this.reviewCard(currentReviewCard)}

          <button
            className="arrow-button"
            type="button"
            data-testid="rightArrow"
            onClick={this.onClickRightIcon}
          >
            <img
              className="arrow-icon-right"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
