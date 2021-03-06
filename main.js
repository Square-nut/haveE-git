import Vue from 'vue'
import App from './App'
import {
  router
} from '@/route/index.js'

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted() {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
})