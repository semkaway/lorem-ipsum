<template>
    <main>
        <div class="text-holder">
            <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
        <div class="image-holder">
            <img class="image" src="@/assets/img/homepage-people.png" alt="people working">
        </div>
        <div class="info-holder">

        </div>
    </main>
</template>

<script>
    export default {
        name: 'Homepage'
    }
</script>

<style lang="scss">

    @import url('https://fonts.googleapis.com/css?family=Poppins');

    .text-holder {

        padding-left: 183px;
        padding-right: 211px;
        padding-top: 10px;

        .text {
            font-size: 3.8em;
            font-family: 'Poppins', sans-serif;
            font-weight: bold;
            letter-spacing: 2px;
            line-height: 73px;
            color: color(text-color);
        }
    }

    .image-holder {
        margin-top: 4.6em;
        height: 470px;
        width: 100%;

        .image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .info-holder {
        height: 535px;
        background-color: color(shade);
    }

</style>
