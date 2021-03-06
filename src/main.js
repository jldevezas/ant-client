import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './components/App'
import MainView from './components/MainView'
import SearchView from './components/SearchView'
import AboutView from './components/AboutView'
import NotFoundView from './components/NotFoundView'

Vue.use(VueRouter)
Vue.use(VueResource)

export var router = new VueRouter({history: true})

// Vue.http.interceptors.push(function () {
//   return {
//     request: function (request) {
//       return request
//     },
//     response: function (response) {
//       return response
//     }
//   }
// })

router.map({
  '/': {
    name: 'home',
    component: MainView
  },
  '/search': {
    name: 'search',
    component: SearchView
  },
  '/about': {
    name: 'about',
    component: AboutView
  },
  '*': {
    name: 'notFound',
    component: NotFoundView
  }
})

router.afterEach(function (transition) {
  if (window.ga) {
    window.ga('send', 'pageview', { page: transition.to.path })
  }
  // console.log('Successfully navigated to: ' + transition.to.path)
})

router.start(App, '#app')
