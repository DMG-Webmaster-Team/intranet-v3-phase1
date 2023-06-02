import React, { Component } from 'react'

import footerIcons from './images/footer-icon.png'

import './footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className='mt-5 p-4 '>
        <img className='img-fluid footer-img' src={footerIcons} alt='footer' />
      </footer>
    )
  }
}

export default Footer
