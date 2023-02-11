// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewNo: 0}

  onClickRightArrow = () => {
    const {activeReviewNo} = this.state
    const {reviewsList} = this.props

    if (activeReviewNo < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewNo: prevState.activeReviewNo + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeReviewNo} = this.state

    if (activeReviewNo > 0) {
      this.setState(prevState => ({
        activeReviewNo: prevState.activeReviewNo - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewNo} = this.state
    const currentReviewDetails = reviewsList[activeReviewNo]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="container">
          <button
            className="button"
            type="button"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            className="button"
            type="button"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
          >
            <img
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
