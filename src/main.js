import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

// var cmp = {
//   data: function() {
//     return {
//       status: 'Critical'
//     }
//   },
//   template: '<p>Server Status: {{ status }}</p>'
// }

Vue.component('app-server-status', Home)

new Vue({
  el: '#app',
  render: h => h(App)
})
