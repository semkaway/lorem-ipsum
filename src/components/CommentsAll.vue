<template>
    <main>
        <div class="text-holder">
            <h1 class="text">Comments</h1>
        </div>
        <div class="all-comments-holder">
            <single-comment class="all-comments-holder__container" v-for="comment in comments" :key="comment.id" :comment="comment"/>
        </div>
        <div class="bottom-text-container">
            <h2 class="bottom-text-container__text">Lorem Ipsum is text of the typesetting industry</h2>
            <div class="bottom-text-container__button">
                <img class="bottom-text-container__button__arrow" src="@/assets/img/icon-arrow.svg" alt="arrow to go back to homepage"/>
                <router-link :to="{ path: '/'}">Back to homepage</router-link>
            </div>
        </div>
    </main>
</template>

<script>
    import { mapState } from 'vuex'
    import CommentsOne from '@/components/CommentsOne'

    export default {
        name: 'CommentsAll',
        components: {
            'single-comment': CommentsOne
        },
        mounted() {
			this.$store.dispatch('loadComments')
		},
        computed: {
            ...mapState([
                'comments'
            ])
        }
    }
</script>

<style lang="scss">
    .all-comments-holder {
        margin-top: 85px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        .all-comments-holder__container {
            flex-basis: 48%;

            @include desktop {
                padding-left: 180px;
                padding-right: 175px;
            }
        }

        @include desktop {
            flex-direction: row;
        }
    }

    .bottom-text-container {
        text-align: center;

         .bottom-text-container__text {
             margin-top: 40px;
             font-size: 1.35em;
             color: color(text-color-header);
         }

         .bottom-text-container__button {
             height: 58px;
             width: 210px;
             border: 1px solid;
             border-radius: 3px;
             border-color: color(accent-green);
             font-size: 0.9em;
             box-sizing: border-box;
             padding-left: 5px;
             padding-top: 18px;
             margin: 0 auto;
             margin-top: 35px;
             margin-bottom: 70px;

             .bottom-text-container__button__arrow {
                 height: 12px;
                 margin-right: 14px;
             }

             a {
                 color: color(dark);
             }
         }
    }
</style>
