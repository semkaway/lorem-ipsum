<template>
        <main class="single-comment-container">
            <img class="bottom-text-container__button__arrow" src="@/assets/img/icon-arrow.svg" alt="arrow to go back to homepage"/>
            <router-link :to="{ path: '/comments'}" class="back-to-comments">Back to comments</router-link>
            <div class="main-text-container">
                <h1 class="main-text-container__title">{{ comment.title }}</h1>
                <p class="main-text-container__body">{{ comment.body }}</p>
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

    export default {
        name: 'SingleComment',
        mounted() {
			this.$store.dispatch('loadSingleComment', this.$route.params.id)
		},
        computed: {
            ...mapState([
                'comment'
            ])
        }
    }
</script>

<style lang="scss">

    .single-comment-container {
        padding-top: 76px;

        .back-to-comments {
            margin-left: 14px;
            text-decoration: underline;
            color: color(dark);
        }

        .main-text-container {
            box-sizing: border-box;
            margin-top: 45px;

            .main-text-container__title {
                font-size: 1.5em;

                @include desktop {
                    font-size: 2.5em;
                    line-height: 59px;
                }
            }

            .main-text-container__body {
                margin-top: 38px;
                line-height: 30px;
            }
        }

        @include desktop {
            padding-left: 300px;
            padding-right: 300px;
        }
    }

</style>
