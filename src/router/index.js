import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import CommentsAll from '@/components/CommentsAll'

Vue.use(Router)

let router = new Router({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Homepage,
		},
		{
			path: '/comments',
			name: 'comments',
			component: CommentsAll,
		}
	],
	scrollBehavior: function (to) {
		if (to.hash) {
		  return {
		    selector: to.hash
		  }
		}
	},
})

export default router
