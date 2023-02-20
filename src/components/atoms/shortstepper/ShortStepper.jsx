import React from 'react'
import PropTypes from 'prop-types'

import { useGetScreenSize } from '../../../hooks/useMediaQuery'
import style from './stepper.module.scss'
const ShortStepper = ({ lists, isCourses }) => {
  const { smallScreen } = useGetScreenSize()

  const listsDisplay = lists.map((list) => {
    return (
      <div
        key={list.id}
        className={[
          style.step,
          list.id % 2 === 0 ? style.completed : null,
        ].join(' ')}
      >
        <div className={style.vStepper}>
          <div className={style.circle}></div>
          <div className={style.line}></div>
        </div>

        <div
          className={[style.content, isCourses ? style.contentFlex : null].join(
            ' '
          )}
        >
          <h4 className={style.socialTitle}>
            {/* IF length of string is greater than 2, it will display intro to web */}
            {!smallScreen && list.title.split(' ').length > 2 ? (
              <>
                INTRO TO WEB
                <br />
                DEVELOPMENT
              </>
            ) : (
              list.title
            )}
          </h4>
          <p className={style.text}>{list.desc}</p>
        </div>
      </div>
    )
  })
  return <div className={style.stepper}>{listsDisplay}</div>
}

ShortStepper.propTypes = {
  lists: PropTypes.array,
  isCourses: PropTypes.bool,
}

export default ShortStepper
