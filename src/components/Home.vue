<script setup>
import { ref } from 'vue'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star
} from '@element-plus/icons-vue'

const count = ref(0)
</script>

<template>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <hr/>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>
  <br/>
  <el-row class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>
  <br/>
  <el-row class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>
  <br/>
  <el-row>
    <el-button :icon="Search" circle/>
    <el-button type="primary" :icon="Edit" circle/>
    <el-button type="success" :icon="Check" circle/>
    <el-button type="info" :icon="Message" circle/>
    <el-button type="warning" :icon="Star" circle/>
    <el-button type="danger" :icon="Delete" circle/>
  </el-row>
  <div class="box">
    <div></div>
  </div>
  <hr>
  <SvgIcon name="next"></SvgIcon>
</template>

<style scoped lang="scss">
a {
  color: #42b983;
}

.box {
  & > div {
    width: 100px;
    height: 100px;
    background-color: red;
  }
}
</style>
