import axios from 'axios'

const baseUrl = 'https://api.techstudio.academy/api'

export default axios.create({
  baseURL: baseUrl,
})
