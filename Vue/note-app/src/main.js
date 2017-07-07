import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import NoteList from './components/NotesList'

Vue.use(VueRouter)
//define your routes
const routes = [

    { path: '/', component: NoteList },

  ]

// create the router instance and pass routes option
const router = new VueRouter ({
  routes,//same as routes: routes
  mode: 'history',

});



/* eslint-disable no-new */

//instantiate vue instance
new Vue({
  //define the selector for the root component
  el: '#app',
  // pass the template to the root component
  template: '<App/>',
  // declare the components that the root component can access
  components: { App },
  // pass in the router to the Vue instance
  router,

  localStorage: {
    notes: {
      type: Array,
      default: [],
    }
  }

  render: h => h(App)

}).$mount('#app')
