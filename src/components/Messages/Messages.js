import React, { Component } from 'react'
import { Segment, Comment } from 'semantic-ui-react'
import MessageForm from './MessageForm'
import MessagesHeader from './MessagesHeader'

class Messages extends Component {
  render() {
    return (
      <React.Fragment>
        <MessagesHeader />

        <Segment>
          <Comment.Group className='messages'>{/* messages */}</Comment.Group>
        </Segment>

        <MessageForm />
      </React.Fragment>
    )
  }
}

export default Messages
