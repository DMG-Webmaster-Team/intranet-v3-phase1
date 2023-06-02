import React, { Component } from 'react'

import './feed.css'
import halfDmgLogo from './images/half-dmg-logo.png'

class Feed extends Component {
  state = {
    isArabic: false,
  }
  componentDidMount() {
    const defaultLanguage = window.localStorage.getItem('rcml-lang')

    if (defaultLanguage === 'ar') {
      this.setState({ isArabic: true })
    } else {
      this.setState({ isArabic: false })
    }
  }

  render() {
    const { isArabic } = this.state

    return (
      <>
        {/* <div className="row" id="idbody">
          <img id="background" src={halfDmgLogo} /> */}
        <div className='latest-news-container'>
          {this.props.data ? (
            this.props.data.map((n, key) => (
              <div className='news-bar' key={key}>
                <h2 className='newTitle'>
                  {isArabic ? n.title_ar : n.title}
                  {/* {n.title} */}
                </h2>
                <img className='imgNews' src={n.image} alt='pic' />

                <p className='newDesc'>{isArabic ? n.details_ar : n.details}</p>
                <p className='authorNew'>{isArabic ? n.author_ar : n.author}</p>
              </div>
            ))
          ) : (
            <h4>No announcements</h4>
          )}
          {/* </div> */}
        </div>
      </>
    )
  }
}

export default Feed
