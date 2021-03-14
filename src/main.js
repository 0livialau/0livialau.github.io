import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import routes from './router.js';

Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    mode: 'history', // for removing # from url
});

// scroll to top of page on route change
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next();
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
