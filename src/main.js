import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 注册svg脚本、svg组件
// 若需要获取所有的SymbolId： import ids from 'virtual:svg-icons-names'
import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon/index.vue'
app.component('SvgIcon', SvgIcon)

import { createPinia } from 'pinia'
app.use(createPinia())

app.mount('#app')
