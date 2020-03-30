import axios from 'axios'
// import { getToken } from '@/utils/auth'
import BASE_URL from '@/constant/baseUrl'
const service = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 15 * 1000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // config.headers['Authorization'] = getToken()
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  Hamburgerresponse => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    if (res.status !== 200) {
      /* Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 3 * 1000
      }) */
      /* if (res.status === 510) {
        removeToken()
        return redirectUrl('/login?code=510')
      } */
      return Promise.reject(res)
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    /* Message({
      message: error.msg,
      type: 'error',
      duration: 5 * 1000
    }) */
    return Promise.reject(error)
  }
)

export default service
