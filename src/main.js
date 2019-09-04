// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/*
The main.js file is the primary entry point for the application and is where you will register 
the Vue instance and extensions such as vue-router and vuex. As you can see this is where the 
Vue instance resides. The instance is registered to the app div discussed previously, plus it is 
fed the router object and the high-level App component.
*/

import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

/new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');