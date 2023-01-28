import React from 'react'
import PropTypes from 'prop-types'

import { Container } from '../../../constants'
import { Banner } from '../../molecules'
import { Button } from '../../atoms'
import style from './adbanner.module.scss'

const AdBanner = ({ content }) => {
  return (
    <section className={style.adBanner}>
      <Container>
        <Banner isSocial className={style.BannerII}>
          <div className='ms-3 ms-lg-40 text-white py-20 py-xl-0'>
            <span className={style.caption}>{content.header.caption}</span>
            <h3 className={style.header}>{content.header.title}</h3>
            <div className={style.contentContainer}>
              {content.schedule.map((item, index) => (
                <div key={index} className={style.content}>
                  <div className={style.contentTitle}>
                    <div>
                      <img src={item.icon} alt='icon' />
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>

            <div className={style.btnContainer}>
              <Button
                linkHref='/'
                linkText='Appply Now'
                solidBtn
                navBtn
                width={`12`}
              />
            </div>
          </div>
        </Banner>
      </Container>
    </section>
  )
}

AdBanner.propTypes = {
  content: PropTypes.object.isRequired,
}

export default AdBanner
