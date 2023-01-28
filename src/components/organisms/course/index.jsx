import React from 'react'
import PropTypes from 'prop-types'

import { Container } from '../../../constants'
import { CourseCard } from '../../molecules'
import style from './course.module.scss'

const Course = ({ content }) => {
  const { header, cards } = content
  const cardsDisplay = cards.map((card, index) => {
    return <CourseCard key={index} card={card} />
  })
  return (
    <Container>
      <section className={style.course}>
        <h3 className={style.title}>{header.title}</h3>
        <div className={style.courseCardGroup}>{cardsDisplay}</div>
      </section>
    </Container>
  )
}

Course.propTypes = {
  content: PropTypes.object.isRequired,
}

export default Course
