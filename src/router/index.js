import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import CommentsAll from '@/components/CommentsAll'
import SingleComment from '@/components/SingleComment'

Vue.use(Router)

let router = new Router({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/',
			component: Homepage,
		},
		{
			path: '/comments',
			component: CommentsAll
		},
		{
			path: '/comments/:id',
			component: SingleComment
		}
	],
	scrollBehavior: function (to) {
		if (to.hash) {
			return {
				selector: to.hash
			}
		} else {
			return { x: 0, y: 0 };
		}
	},
})

export default router
