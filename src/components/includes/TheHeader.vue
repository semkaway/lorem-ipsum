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

    @import url('https://fonts.googleapis.com/css?family=Poppins:400,600,700');

    .header {
        display: flex;

        .header__logo {

            flex-basis: 70%;

            .header__logo__image {
                height: 40px;

                @include desktop {
                    height: 66px;
                }
            }

        }

        .header__buttons {
            flex-basis: 30%;
            display: inline-flex;
            align-items: flex-start;
            justify-content: space-around;

            .header__buttons__button {
                border: none;
                outline-color: white;
                background-color: color(primary);
                text-transform: uppercase;
                font-family: 'Poppins', sans-serif;
                font-weight: 600;
                color: color(text-color-header);
                cursor: pointer;

                @include desktop {
                    letter-spacing: 1.6px;
                }
            }

            @include desktop {
                display: flex;
                align-items: center;
            }
        }

        @include desktop {
            padding-left: 3.7%;
            padding-right: 2.9%;
        }
    }

</style>
