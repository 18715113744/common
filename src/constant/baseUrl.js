const BASE_URL_PROD = '/api'
const BASE_URL_DEV = 'http://10.99.101.162:8082/api'

export default process.env.NODE_ENV === 'production' ? BASE_URL_PROD : BASE_URL_DEV