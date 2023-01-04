import './index.css'

import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentList: [], name: '', comment: ''}

  submitComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      time: formatDistanceToNow(new Date()),
      isliked: false,
      color:
        initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)],
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  addName = event => {
    this.setState({name: event.target.value})
  }

  addComment = event => {
    this.setState({comment: event.target.value})
  }

  onLike = id => {
    const {commentList} = this.state

    this.setState({
      commentList: commentList.map(each => {
        if (each.id === id) {
          return {...each, isliked: !each.isliked}
        }
        return each
      }),
    })
  }

  onDelete = id => {
    const {commentList} = this.state

    const list = [...commentList]

    const index = list.findIndex(each => {
      if (each.id === id) {
        return true
      }
      return false
    })

    list.splice(index, 1)

    this.setState({commentList: list})
  }

  render() {
    const {commentList, name, comment} = this.state

    return (
      <div className="mainContainer">
        <h1 className="heading">Comments</h1>
        <div className="commentingSection">
          <img
            className="mainimg"
            alt="comments"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          />
          <form onSubmit={this.submitComment} className="inputContainer">
            <p className="sub-heading">Say something about 4.0 Technologies</p>
            <input
              onChange={this.addName}
              value={name}
              type="input"
              placeholder="Your Name"
              className="nameInput"
            />
            <textarea
              rows="7"
              onChange={this.addComment}
              value={comment}
              placeholder="Your Comment"
              className="commentInput"
            />
            <button type="submit" className="submitbutton">
              Add Comment
            </button>
          </form>
        </div>
        <div className="commentsSection">
          <h1 className="totalheading">
            <button className="totalbutton" type="button">
              {commentList.length}
            </button>{' '}
            Comments
          </h1>
          <ul className="commentsContainer">
            {commentList.map(each => (
              <CommentItem
                object={each}
                onLike={this.onLike}
                onDelete={this.onDelete}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
