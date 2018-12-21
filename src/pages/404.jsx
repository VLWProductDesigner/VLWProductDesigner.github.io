import React from 'react'
import Frame from '../components/Frame'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Frame>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Frame>
    )
  }
}

export default NotFoundPage
