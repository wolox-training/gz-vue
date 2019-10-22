import { create } from 'apisauce'

export const api = create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
})
