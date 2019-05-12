<template>
        <main class="single-comment-container">
            <img class="bottom-text-container__button__arrow" src="@/assets/img/icon-arrow.svg" alt="arrow to go back to homepage"/>
            <router-link :to="{ path: '/comments'}" class="back-to-comments">Back to comments</router-link>
            <div v-if="edit" class="main-text-container">
                <h1 class="main-text-container__title">{{ comment.title }}</h1>
                <p class="main-text-container__body">{{ comment.body }}</p>
            </div>
            <div v-else>
                <form class="form-holder" @submit="checkForm">
                    <p v-if="errors.length">
                        <b>Please correct the following error(s):</b>
                        <ul>
                            <li v-for="error in errors" :key="error.id">{{ error }}</li>
                        </ul>
                    </p>
                    <input
                        class="form-holder__input form-holder__input--thin"
                        type="text"
                        v-model="comment.title">
                    <textarea
                        class="form-holder__input form-holder__input--thick"
                        type="text"
                        v-model="comment.body"></textarea>
                    <button type="submit" class="form-holder__button">Send</button>
                </form>
            </div>
            <div v-if="edit" class="buttons-holder">
                <button class="buttons-holder__button buttons-holder__button--green" type="button" @click="editComment">Edit comment</button>
                <button class="buttons-holder__button buttons-holder__button--red" type="button" @click="deleteComment">Delete comment</button>
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
        data () {
            return {
                edit: true,
                errors: []
            }
        },
        methods: {
            editComment() {
                this.edit = false
            },
            checkForm(e) {
                e.preventDefault()
                this.success = false
                if (this.comment.title && this.comment.body) {
                    let editComment = {"title": this.comment.title, "body": this.comment.body, "id": this.comment.id}
                    this.$store.dispatch('editComment', editComment)
                    this.errors = []
                    this.edit = true
                    return true
                }

                this.errors = []

                if (!this.comment.title) {
                    this.errors.push('Title required.')
                }
                if (!this.comment.body) {
                    this.errors.push('Text required.')
                }

            },
            deleteComment() {
                this.$store.dispatch('deleteComment', this.comment.id)
                this.$router.push({ path: '/comments' })
            }
        },
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

        .buttons-holder {

            .buttons-holder__button {
                border: none;
                border-radius: 3px;
                box-sizing: border-box;
                font-size: 0.9em;
                margin-top: 25px;
                margin-right: 10px;
                height: 55px;
                padding: 5px;
                width: 150px;
                text-align: center;
                text-transform: uppercase;
                cursor: pointer;
            }

            .buttons-holder__button--green {
                background-color: color(accent-green);
                outline-color: color(accent-green);
            }

            .buttons-holder__button--red {
                background-color: color(accent-red);
                outline-color: color(accent-red);
            }

        }

        .form-holder {
            width: 80%;
            display: flex;
            flex-direction: column;
            margin-top: 50px;

            .form-holder__input {
                margin-bottom: 30px;
                width: 100%;
                border: solid 1px;
                border-color: color(accent-green);
                background-color: color(primary);
                border-radius: 3px;
                margin-bottom: 16px;
                box-sizing: border-box;
                color: color(dark);
                padding-left: 17px;
                padding-top: 5px;
                padding-bottom: 5px;
                font-size: 1.1em;
            }

            .form-holder__input--thick {
                resize: none;
                height: 200px;
            }

            .form-holder__button {
                border: none;
                border-radius: 3px;
                box-sizing: border-box;
                font-size: 0.9em;
                margin-right: 10px;
                height: 55px;
                padding: 5px;
                width: 150px;
                background-color: color(accent-green);
                outline-color: color(accent-green);
                text-align: center;
                text-transform: uppercase;
                cursor: pointer;
            }
        }

        @include desktop {
            padding-left: 300px;
            padding-right: 300px;
        }
    }

</style>
