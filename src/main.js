import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'

Vue.component("app-header", Header);
Vue.component("app-footer", Footer);
Vue.component("app-ninjas", Ninjas);

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
