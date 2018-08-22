import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/Home'
// import mail_draft from '@/pages/mail/draft'
// import mail_send from '@/pages/mail/send'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
  	{ path: '/', name:'main',component: Home}
  ]
})
