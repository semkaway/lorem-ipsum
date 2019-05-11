import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'

Vue.use(Router)

let router = new Router({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Homepage,
		}
	]
})

export default router
