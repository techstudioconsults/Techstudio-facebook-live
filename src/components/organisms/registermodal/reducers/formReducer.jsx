export const formReducers = (state, action) => {
  switch (action.type) {
    case 'HANDLE_INPUT_TEXT':
      return {
        ...state,
        [action.field]: action.payload,
      }
    default:
      return state
  }
}

export const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
}

// export default formReducers
