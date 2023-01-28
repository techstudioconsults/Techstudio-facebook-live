import React from 'react'

import { Layout } from '../../components/templates'
import { Course, Hero } from '../../components/organisms'
import { FACEBOOK_CONTENT } from './content'
import styles from './home.module.scss'

const HomePage = () => {
  const { heroSection, sectionTwo, sectionThree, sectionFour, sectionFive } =
    FACEBOOK_CONTENT
  return (
    <Layout>
      <Hero content={heroSection} />
      <Course content={sectionTwo} />
    </Layout>
  )
}

export default HomePage
