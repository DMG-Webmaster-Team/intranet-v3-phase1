import React, { useEffect, useState, useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IntranetContext } from '../../context'
import { motion } from 'framer-motion'
import { Text } from '../../containers/Language'

const Article = (props) => {
  const [news, setNews] = useState([])
  const [isArabic, setIsArabic] = useState(false)

  const { getLang, fetchData } = useContext(IntranetContext)

  useEffect(() => {
    fetchData('news').then((res) => {
      setNews(res.news)
    })
    setIsArabic(getLang())
  }, [])

  const { id } = props.match.params

  const article = news && news.find((item) => item.count === Number(id))

  return (
    <div className='container mt-5'>
      {article ? (
        <div className='row '>
          <img
            src={article.image}
            className='mx-auto d-block col-12 col-md-8'
            height='300'
            width='200'
            alt='...'
          />
          <div className='col-12  mt-5 '>
            <div className='details'>
              <h2 className={isArabic ? 'text-right mb-4' : 'mb-4  '}>
                {isArabic ? article.title_ar : article.title}
              </h2>
              <p className={isArabic ? 'text-right' : 'text-muted'}>
                {isArabic ? article.details_ar : article.details}
              </p>
            </div>
          </div>
          <div className=' mx-auto text-center  '>
            <Link to='/news' style={{ marginTop: '2rem' }}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                }}
              >
                <Button className='default-btn text-center'>
                  <Text tid='returnNews' />
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      ) : (
        <div className='text-center'>
          <h1>no data available</h1>
          <Link to='/news' style={{ marginTop: '2rem', background: '#C4AB7D' }}>
            <Button className='default-btn ' style={{ background: '#C4AB7D' }}>
              <Text tid='returnNews' />
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Article
