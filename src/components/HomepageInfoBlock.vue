<template>
    <div class="container">
        <img class="container__icon" :src="getImgUrl(data.icon)" alt="info-logo">
        <h3 class="container__heading">{{ data.heading }}</h3>
        <ul class="container__list" v-for="paragraph in data.text" :key="paragraph.id">
            <li class="container__list__list-item">{{paragraph}} </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'HomepageInfoBlock',
        props: ['data'],
        methods: {
            getImgUrl(pic) {
                return require('../assets/'+pic)
            }
        }
    }

</script>

<style lang="scss">

    .container {
        color: color(text-color-main);
        margin: 0;
        padding: 10px;

        .container__icon {
            height: 30px;

            @include desktop {
                height: 33px;
            }
        }

        .container__heading {
            font-size: 2em;
            font-weight: bold;
            margin-top: 9px;
            margin-bottom: 23px;
        }

        .container__list {
            margin: 0;
            padding-left: 0.5px;
            width: 90%;
            list-style-position: inside;
            font-size: 0.9em;

            @include desktop {
                width: 69%;
            }
        }

        .container__list__list-item {
            margin-bottom: 10px;
        }

        @include desktop {
            padding: 112px 0 0 0;
        }
    }


</style>
