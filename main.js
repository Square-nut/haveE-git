import Vue from 'vue'
import App from './App.vue'
import router from '@/route/index'
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted() {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
})