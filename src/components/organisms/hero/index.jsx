import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '../../atoms'
import useAppProvider from '../../../hooks/useAppProvider'

import style from './hero.module.scss'

const Hero = ({ content }) => {
  const { registerModal, handleRegisterModal } = useAppProvider()
  return (
    <header
      className={
        registerModal ? style.hero : [style.hero, style.margin].join(' ')
      }
    >
      <section className={`${style.heroWrapper} container`}>
        <div className={style.heroText}>
          <h1>{content.title}</h1>
          <p>{content.subTitle}</p>
          <div className={style.btn}>
            <Button
              linkText='Enroll Now'
              linkHref='/'
              solidBtn
              width={`7.5`}
              paddingInline={0}
              onClick={handleRegisterModal}
            />
          </div>
        </div>
        <div className={style.heroImg}>
          <img src={content.img} alt='hero-img' />
        </div>
      </section>
    </header>
  )
}
Hero.propTypes = {
  content: PropTypes.object.isRequired,
}

export default Hero
