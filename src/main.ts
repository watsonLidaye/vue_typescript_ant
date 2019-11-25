import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/cssrest.css'
import './assets/css/public.css'
import $utill from './assets/js/util'
import { Button, message } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

//Vue挂载
Vue.use(Button,message)
Vue.prototype.$utill = $utill

declare global {
  interface Window { bus: any; }
}
//window挂载
interface window {
  bus: Object;
}
const bus = new Vue()
window.bus = bus

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
