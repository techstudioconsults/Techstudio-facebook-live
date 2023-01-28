import React from 'react'
import { PropTypes } from 'prop-types'

import { Navbar, Footer } from '../../organisms'
import styles from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <main className={styles.main}>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default Layout
