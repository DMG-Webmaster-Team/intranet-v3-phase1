import React from 'react'
import { Col } from 'react-bootstrap'
import AppCard from './AppCard'

const AppCards = ({ data, isArabic }) => {
  return data.map((app, key) => (
    <AppCard app={app} key={key} isArabic={isArabic} />
  ))
}

export default AppCards
