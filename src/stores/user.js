import { defineStore} from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Justin'
  }),
  getters: {
    fullName: state => state.name + ' Yang'
  },
  actions: {
    setName(name) {
      this.name = name
    }
  }
})