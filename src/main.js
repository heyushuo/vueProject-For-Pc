// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import axios from 'axios'
import routerConfig from './Router.config.js'
Vue.use(VueRouter)
//配置axios
axios.defaults.baseURL='http://localhost:8080/';  //设置访问的根路径
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了
const router=new VueRouter({
	mode: 'history', //切换路径模式，变成history模式
	scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes:routerConfig
})                   
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
