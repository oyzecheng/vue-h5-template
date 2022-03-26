import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// rem兼容
import 'amfe-flexible'
// vant导入
import '@/plugins/vant'
// 样式导入
import '@/assets/css/index.less'
// 路由鉴权
import '@/router/permission'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
