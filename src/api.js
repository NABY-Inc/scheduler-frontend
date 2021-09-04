// api.js
import axios from 'axios'

export default axios.create({
  baseURL: 'https://lecturescheduler.herokuapp.com/api'
});