import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return { user: {}, isAuthenticated: false, token: null }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    setUser(user: any, token: any) {
      this.user = user
      this.isAuthenticated = !!user
      this.token = token
    },
    logout() {
      this.user = {}
      this.isAuthenticated = false
      this.token = null
      useCookie('token').value = null
    }
  },
  persist: true,
})