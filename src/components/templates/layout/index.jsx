import React from 'react'
import { PropTypes } from 'prop-types'

import { Navbar, Footer, RegisterModal } from '../../organisms'
import styles from './layout.module.scss'
import useAppProvider from '../../../hooks/useAppProvider'

const Layout = ({ children }) => {
  const { registerModal } = useAppProvider()
  return (
    <>
      {registerModal && <RegisterModal />}
      <main className={styles.main}>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
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
