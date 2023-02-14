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
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.figma.com/proto/ygzRLfgIPUo8eMtjOrL41X/Postit-Landing-Page?page-id=0%3A1&node-id=0%3A3&viewport=389%2C427%2C0.19&scaling=scale-down-width&starting-point-node-id=0%3A3'
            >
              Website Landing Page
            </a>
          </div>
          <div className={styles.sectionImgs_main}>
            <img src={content.sample2} alt='alt3' />
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.figma.com/proto/ygzRLfgIPUo8eMtjOrL41X/Postit-Landing-Page?page-id=128%3A2&node-id=128%3A7&viewport=373%2C920%2C0.44&scaling=scale-down-width'
            >
              Form Creation
            </a>
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
