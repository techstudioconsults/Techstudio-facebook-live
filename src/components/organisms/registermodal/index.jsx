import React from 'react'
import { FaEye } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

import useAppProvider from '../../../hooks/useAppProvider'
import styles from './registermodal.module.scss'

const RegisterModal = () => {
  const { handleRegisterModal } = useAppProvider()
  return (
    <div className={styles.container}>
      <section className={[styles.signup, `cc-shadow`].join(' ')}>
        <AiOutlineClose
          className={styles.close}
          onClick={handleRegisterModal}
        />
        <div className={styles.header}>
          <h4 className='text-blue fw-bolder mb-3'>
            One last step, let’s get to know you
          </h4>
          <p className={styles.subTitle}>Create an account with Us</p>
        </div>
        <form className={[styles.form].join(' ')}>
          <div className={styles.row}>
            <div>
              <label htmlFor='firstname' className='form-label'>
                First Name
              </label>
              <input
                type='text'
                id='firstname'
                className='form-control'
                aria-describedby='firstnameHelpBlock'
                placeholder='First Name'
              />
            </div>
            <div>
              <label htmlFor='lastname' className='form-label'>
                Last Name
              </label>
              <input
                type='text'
                id='lastname'
                className='form-control'
                aria-describedby='lastnameHelpBlock'
                placeholder='Last Name'
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.phoneNumber}>
              <label htmlFor='phone' className='form-label'>
                Your Phone Number
              </label>
              <input
                type='number'
                id='phone'
                className='form-control'
                aria-describedby='phoneHelpBlock'
                placeholder='Phone Number'
              />
            </div>
            <div>
              <label htmlFor='subject' className='form-label'>
                Course
              </label>
              <input
                type='text'
                id='time-schedule'
                className='form-control'
                aria-describedby='lastnameHelpBlock'
                value={'Facebook Live Class'}
                readOnly
              />
            </div>
          </div>

          <div className={styles.secondRow}>
            <div className={styles.email}>
              <label htmlFor='email' className='form-label'>
                Email Address
              </label>
              <input
                type='email'
                id='email'
                className='form-control'
                aria-describedby='emailHelpBlock'
                placeholder='example@example.com'
              />
            </div>

            <div>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <div className={[styles.password, 'input-group mb-3'].join(' ')}>
                <input
                  type='password'
                  id='password'
                  className='form-control'
                  aria-describedby='passwordHelpBlock'
                  placeholder='Password'
                />
                <span
                  className={['input-group-text', styles.showPassword].join(
                    ' '
                  )}
                  id='passwordHelpBlock'
                >
                  <FaEye />
                </span>
              </div>
            </div>
            <div>
              <label htmlFor='password' className='form-label'>
                confirm Password
              </label>
              <div className={[styles.password, 'input-group mb-3'].join(' ')}>
                <input
                  type='password'
                  id='confirm-password'
                  className='form-control'
                  aria-describedby='passwordHelpBlock'
                  placeholder='confirm password'
                />
                <span
                  className={['input-group-text', styles.showPassword].join(
                    ' '
                  )}
                  id='passwordHelpBlock'
                >
                  <FaEye />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <button type='submit'>Register</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default RegisterModal
