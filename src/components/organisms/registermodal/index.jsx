import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { toast } from 'react-toastify'
import axios from 'axios'

import useAppProvider from '../../../hooks/useAppProvider'
import styles from './registermodal.module.scss'

const RegisterModal = () => {
  const { handleRegisterModal } = useAppProvider()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [loading, setLoading] = useState(false)
  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post(
        process.env.REACT_APP_BASE_URL + '/facebookAd',
        {
          firstName,
          lastName,
          email,
          phoneNumber,
        }
      )
      console.log(res)
      toast.success(`Registration successfully`)
    } catch (error) {
      console.log(error)
      toast.warn('Please, Try again')
    }
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhoneNumber('')
    setLoading(false)
  }
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
        <form onSubmit={handleRegister} className={[styles.form].join(' ')}>
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.btnContainer}>
            <button type='submit'>
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default RegisterModal
