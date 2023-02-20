import React, { useState, useReducer } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { toast } from 'react-toastify'
import axios from 'axios'

import useAppProvider from '../../../hooks/useAppProvider'
import { formReducers, initialFormState } from './reducers/formReducer'
import { Images } from '../../../assets'
import styles from './registermodal.module.scss'

const RegisterModal = () => {
  const { handleRegisterModal } = useAppProvider()
  const [loading, setLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [{ firstName, lastName, email, phoneNumber }, dispatch] = useReducer(
    formReducers,
    initialFormState
  )

  const handleFormChange = (e) => {
    dispatch({
      type: 'HANDLE_INPUT_TEXT',
      field: e.target.name,
      payload: e.target.value,
    })
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post(
        'https://api.techstudio.academy/api/facebookAd',
        {
          firstName,
          lastName,
          email,
          phoneNumber,
        }
      )
      console.log(res)
      setShowSuccessModal(true)
    } catch (error) {
      console.log(error)
      toast.warn('Please, Try again')
    }
    setLoading(false)
  }
  return (
    <div className={styles.container}>
      {showSuccessModal ? (
        <div className={styles.success}>
          <AiOutlineClose
            className={styles.close}
            onClick={handleRegisterModal}
          />
          <div className={styles.successImg}>
            <img src={Images.success} alt='success' />
          </div>
          <h3>Registration Successful!!!</h3>
          <p>
            Your details have been received and our Customer Care Representative
            will contact you shortly.
          </p>
        </div>
      ) : (
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
                  name='firstName'
                  className='form-control'
                  aria-describedby='firstnameHelpBlock'
                  placeholder='First Name'
                  value={firstName}
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>
                <label htmlFor='lastname' className='form-label'>
                  Last Name
                </label>
                <input
                  type='text'
                  id='lastname'
                  name='lastName'
                  className='form-control'
                  aria-describedby='lastnameHelpBlock'
                  placeholder='Last Name'
                  value={lastName}
                  onChange={(e) => handleFormChange(e)}
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
                  name='phoneNumber'
                  className='form-control'
                  aria-describedby='phoneHelpBlock'
                  placeholder='Phone Number'
                  value={phoneNumber}
                  onChange={(e) => handleFormChange(e)}
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
                  name='email'
                  className='form-control'
                  aria-describedby='emailHelpBlock'
                  placeholder='example@example.com'
                  value={email}
                  onChange={(e) => handleFormChange(e)}
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
      )}
    </div>
  )
}

export default RegisterModal
