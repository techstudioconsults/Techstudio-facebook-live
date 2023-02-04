import React from 'react'
import PropTypes from 'prop-types'

import { Container } from '../../../constants'
import styles from './projectsamples.module.scss'

const ProjectSamples = ({ content }) => {
  return (
    <Container>
      <section className={styles.section}>
        <h5>{content.title}</h5>
        <p>{content.subTitle}</p>
        <div className={styles.sectionImgs}>
          <div className={styles.sectionImgs_dots}>
            <img src={content.img6} alt='alt1' />
          </div>
          <div className={styles.sectionImgs_main}>
            <img src={content.sample1} alt='alt2' />
            <span>Website Landing Page</span>
          </div>
          <div className={styles.sectionImgs_main}>
            <img src={content.sample2} alt='alt3' />
            <span>Form Creation</span>
          </div>
        </div>
      </section>
    </Container>
  )
}

ProjectSamples.propTypes = {
  content: PropTypes.object.isRequired,
}

export default ProjectSamples
