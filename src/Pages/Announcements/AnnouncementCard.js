import React from 'react'
import './AnnouncementCard.scss'
import CountDown from './CountDown'
import { motion } from 'framer-motion'
import { Text } from '../../containers/Language'

const AnnouncementCard = ({ data, isArabic }) => {
  if (data.length !== 0) {
    return data.map((item, id) => {
      // destructing countdown format
      const { end_time, end_date } = item
      let tempHours = 0
      let tempMins = 0
      if (end_time.includes('AM')) {
        tempHours = Number(end_time.split(':')[0])
        tempMins = Number(end_time.split(':')[1].split(' ')[0])
      } else if (end_time.includes('PM')) {
        tempHours = Number(end_time.split(':')[0]) + 12
        tempMins = Number(end_time.split(':')[1].split(' ')[0])
      }

      return (
        <motion.div
          className='announcement-card   text-center py-5 p-md-5'
          key={id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className='announcement-card-details'>
            <h1 className='text-capitalize mb-3'>
              {isArabic ? item.title_ar : item.title}
            </h1>

            <CountDown
              isArabic={isArabic}
              targetDate={end_date}
              targetTime={`${tempHours}:${tempMins}:00`}
            />
          </div>
          <div className='announcement-card-image'>
            <a href={item.image_link}>
              <img
                className='  img-fluid'
                id='announcement-card-img'
                src={item.image_source}
                alt='pic'
                width='700'
                height='600'
              />
            </a>
          </div>
        </motion.div>
      )
    })
  } else {
    return (
      <motion.div
        className='text-center  text-capitalize mx-auto d-block pt-5 mt-5'
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        <div className='text-center no-data-available'>
          <Text tid='noDataAvailable' />
        </div>
      </motion.div>
    )
  }
}

export default AnnouncementCard
