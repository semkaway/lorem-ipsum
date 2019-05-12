import vuex from 'vuex'
import { HTTP } from './http-common'
import Vue from 'vue'

Vue.use(vuex)

export default new vuex.Store ({
    state : {
        comments: [],
        comment: ''
    },
    actions: {
        loadComments({commit}) {
            HTTP
                .get()
                .then(result => {
                    let comments = result.data
                    commit('SET_COMMENTS', comments)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        loadSingleComment({commit}, commentId) {
            HTTP
                .get(commentId)
                .then(result => {
                    let comment = result.data
                    commit('SET_COMMENT', comment)
                })
                .catch(error => {
                    console.log(error)
                })
        },
    },
    mutations: {
        SET_COMMENTS(state, comments) {
            state.comments = comments
        },
        SET_COMMENT(state, comment) {
            state.comment = comment
        }
    }
});
