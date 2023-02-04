import React from 'react'
import PropTypes from 'prop-types'

const CourseCard = ({ card }) => {
  return (
    <div className='d-flex flex-column text-center'>
      <div className='imgContainer mb-7'>
        <img src={card.img} alt='number' />
      </div>
      <h6
        style={{ fontWeight: 600, color: '#292929', fontSize: '18px' }}
        className='mb-3'
      >
        {card.title}
      </h6>
      <p className='card-text'>{card.text}</p>
    </div>
  )
}

CourseCard.propTypes = {
  card: PropTypes.object.isRequired,
}

export default CourseCard
