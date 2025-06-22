import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const name = useLocalStorage('name', '')
  const email = useLocalStorage('email', '')

  const setUser = (user) => {
    name.value = user.name || ''
    email.value = user.email || ''
  }
  
  const clearUser = () => {
    name.value = ''
    email.value = ''
  }

  return { name, email, setUser, clearUser }
})
