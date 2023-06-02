import React from 'react'
import { Col } from 'react-bootstrap'

const AppCard = ({ app, isArabic }) => {
  return (
    <Col sm='6' xs='12' md='2' lg='2'>
      <a
        className='appicon'
        id={'app' + app.name}
        href={app.link}
        target={app.target ? app.target : '_blank'}
        rel='noreferrer'
      >
        <img id={'icon' + app.name} src={app.image} alt={app.name} />
      </a>
      <p>{isArabic ? app.name_ar : app.name}</p>
    </Col>
  )
}

export default AppCard
