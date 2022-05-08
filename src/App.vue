<script setup>
// components
import Home from "./components/Home.vue";

// store
import { useAppStore } from './stores/app'
import { useUserStore } from './stores/user'
import { storeToRefs } from 'pinia'

const app = useAppStore()
const user = useUserStore()

// 只能解构state getters，不能解构action
const { name: myName, fullName } = storeToRefs(user)


</script>

<template>
  <Home></Home>

  <hr>
  <div>
    app.num: {{ app.num }}
  </div>
  <button @click="app.resetNum(app.num + 1)">+1</button>
  <hr>
  <div>myName: {{ myName }} ---- fullName: {{ fullName }}</div>
  <button @click="user.setName('Amber')">change name</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
