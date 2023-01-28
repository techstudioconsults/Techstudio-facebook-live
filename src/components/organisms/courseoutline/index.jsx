import React from 'react'
import PropTypes from 'prop-types'

import { ShortStepper } from '../../atoms'
import { Container } from '../../../constants'
import styles from './courseoutline.module.scss'

const CourseOutline = ({ content }) => {
  const { header, list } = content
  return (
    <Container paddingBlock={0}>
      <div className={styles.CourseOutline}>
        <h2 className={styles.socialTitle}>{header.title}</h2>
        <div className={styles.stepperList}>
          <ShortStepper isCourses lists={list} />
        </div>
      </div>
    </Container>
  )
}

CourseOutline.propTypes = {
  content: PropTypes.object.isRequired,
}

export default CourseOutline
