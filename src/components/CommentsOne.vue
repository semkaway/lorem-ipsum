<template>
        <div class="comment-container">
            <h3>{{ comment.title }}</h3>
            <p class="comment-container__body">{{ comment.body }}</p>
            <div class="comment-container__button">
                <router-link :to="{ path: '/comments/' + comment.id }">Read more</router-link>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'CommentsOne',
        props: ['comment']
    }
</script>

<style lang="scss">

    .comment-container {
        border-radius: 3px;
        box-shadow: 6.5px 11.258px 30px rgba(17,21,24,0.04);
        box-sizing: border-box;
        padding-top: 18px;
        padding-left: 10px;
        width: 100%;
        padding-bottom: 45px;
        margin-bottom: 45px;

        .comment-container__body {
            display: block;
            text-overflow: ellipsis;
            word-wrap: break-word;
            overflow: hidden;
            max-height: 8em;
            font-size: 0.9em;
            padding-right: 40px;
            line-height: 1.6em;
        }

        .comment-container__button {
            border: none;
            border-radius: 3px;
            background-color: color(accent-green);
            box-sizing: border-box;
            font-size: 1em;
            margin-top: 25px;
            height: 55px;
            padding: 17px;
            width: 150px;
            text-align: center;

            a {
                color: color(dark);
            }
        }

        @include desktop {
            padding-left: 30px;
        }

    }

</style>
