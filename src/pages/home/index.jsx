import React from 'react'

import { Layout } from '../../components/templates'
import { Course, CourseOutline, Hero } from '../../components/organisms'
import { FACEBOOK_CONTENT } from './content'
import styles from './home.module.scss'

const HomePage = () => {
  const { heroSection, sectionTwo, sectionThree, sectionFour, sectionFive } =
    FACEBOOK_CONTENT
  return (
    <Layout>
      <Hero content={heroSection} />
      <Course content={sectionTwo} />
      <section className={styles.sectionThree}>
        <CourseOutline content={sectionThree} />
      </section>
    </Layout>
  )
}

export default HomePage
