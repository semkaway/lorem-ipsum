<template>
    <header class="header">
        <div class="header__logo">
            <img src="@/assets/img/logo.png" alt="logo" class="header__logo__image">
        </div>
        <div class="header__buttons">
            <button type="button" class="header__buttons__button">about us</button>
            <button type="button" class="header__buttons__button">write comment</button>
            <button type="button" class="header__buttons__button">comments</button>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'TheHeader'
    }
</script>

<style lang="scss">

    @import url('https://fonts.googleapis.com/css?family=Poppins');

    .header {
        display: flex;
        padding-left: 50px;
        padding-right: 41px;

        .header__logo {

            flex-basis: 70%;

            .header__logo__image {
                height: 66px;
            }

        }

        .header__buttons {
            flex-basis: 30%;
            display: flex;
            justify-content: space-around;

            .header__buttons__button {
                border: none;
                outline-color: white;
                background-color: color(primary);
                text-transform: uppercase;
                letter-spacing: 1.6px;
                font-family: 'Poppins', sans-serif;
                font-weight: bold;
                color: color(text-color);
                cursor: pointer;
            }
        }
    }

</style>
