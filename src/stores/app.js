import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    num: 1
  }),
  getters: {
    doubleNum: state => state.num * 2
  },
  actions: {
    resetNum(num) {
      this.num = num
      // this 是 store 实例
      console.log('this:', this)
      console.log('this.num', this.num)
    }
  }

})