import { createApp } from 'vue'
import App from './App.vue'

// 注册svg脚本
// 获取所有的SymbolId： import ids from 'virtual:svg-icons-names'
import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon/index.vue'

const app = createApp(App)
// 全局注册svg组件
app.component('SvgIcon', SvgIcon)

app.mount('#app')
