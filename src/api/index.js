import axios from '@/utils/request'

export const requestAllModule = params => axios.get('/saas/resConf/allModule', { params })

export const requestOperateMenuTenant = data => axios.post('/saas/resConf/operateMenuTenant', data)
