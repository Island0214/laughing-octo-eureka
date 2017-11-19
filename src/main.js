// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import './index.css'
// import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.css'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.use(VueRouter)

const i18n = new VueI18n({
  locale: 'en', // 语言标识
  messages: {
    'zh': require('../common/lang/zh'),
    'en': require('../common/lang/en'),
    'ar': require('../common/lang/ar')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  router,
  i18n,
  template: '<App/>',
  components: {App}
})
