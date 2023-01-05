import './index.css'

const CommentItem = props => {
  const {object, onDelete, onLike} = props

  const deleteComment = () => {
    onDelete(object.id)
  }

  const likeComment = () => {
    onLike(object.id)
  }

  return (
    <li className="li">
      <div className="detailsContainer">
        <button className={`profileimg ${object.color}`} type="button">
          {object.name[0]}
        </button>
        <div className="usercommentContainer">
          <div className="usertimeContainer">
            <h1 className="userheading">{object.name}</h1>
            <p className="time">{object.time}</p>
          </div>
          <p className="commentpara">{object.comment}</p>
        </div>
      </div>
      <div className="likedeleteContainer">
        <div className="likeContainer">
          {object.isliked && (
            <img
              className="likeimg"
              alt="like"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
            />
          )}
          {!object.isliked && (
            <img
              className="likeimg"
              alt="like"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            />
          )}
          <button
            type="button"
            onClick={likeComment}
            className={object.isliked ? 'liked' : 'like'}
          >
            Like
          </button>
        </div>

        <button
          onClick={deleteComment}
          data-testid="delete"
          type="button"
          className="deletebutton"
        >
          <img
            className="deleteicon"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
