import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import NoteList from '@/components/NotesList'
import Note from '@/components/Note'
import VueLocalStorage from 'vue-localstorage'

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(VueLocalStorage)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'All Notes',
      component: NoteList,
    },
    {
      path: '/view/:id',
      name: 'View Note',
      component: Note,
      props: true,
    },
  ]
})
