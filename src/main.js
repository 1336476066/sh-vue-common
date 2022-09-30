import Vue from 'vue'
import App from './App.vue'
// import Components from 'sf-vue-common';
Vue.config.productionTip = false
// Vue.use(Components);
new Vue({
  render: h => h(App),
}).$mount('#app')
