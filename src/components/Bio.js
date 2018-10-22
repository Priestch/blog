import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src="https://avatars1.githubusercontent.com/u/2059801?s=460&v=4"
          alt={`Priestch`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Priesth</strong> who lives and works in Xi'an building useful things.{' '}
          <a href="https://github.com/Priestch">
            You should follow him on Github
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
