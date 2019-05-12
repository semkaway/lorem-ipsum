<template>
    <header class="header">
        <div class="header__logo">
            <router-link :to="{ path: '/'}">
                <img src="@/assets/img/logo.png" alt="logo" class="header__logo__image">
            </router-link>
        </div>
        <div class="header__buttons" id="headerButtons">
            <router-link    to="/#aboutUs"
                            class="header__buttons__button"
                            :class="{ 'header__buttons__button--active': buttonBool[0].bool }"
                            @click.native="showOutline('button1')">about us</router-link>
            <router-link    to="/#writeComment"
                            class="header__buttons__button"
                            :class="{ 'header__buttons__button--active': buttonBool[1].bool }"
                            @click.native="showOutline('button2')">write comment</router-link>
            <router-link    :to="{ path: '/comments'}"
                            class="header__buttons__button"
                            :class="{ 'header__buttons__button--active': buttonBool[2].bool }"
                            @click.native="showOutline('button3')">comments</router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'TheHeader',
        data() {
            return {
                buttonBool: [
                    {
                        name: "button1",
                        bool: false
                    },
                    {
                        name: "button2",
                        bool: false
                    },
                    {
                        name: "button3",
                        bool: false
                    }
                ]
            }
        },
        methods: {
            showOutline(buttonNumber) {
                for (let i = 0; i < this.buttonBool.length; i++) {
                    if (this.buttonBool[i].name == buttonNumber) {
                        console.log("yuyuy")
                        this.buttonBool[i].bool = true
                    } else {
                        this.buttonBool[i].bool = false
                    }
                }
            }
        }
    }
</script>

<style lang="scss">

    @import url('https://fonts.googleapis.com/css?family=Poppins:400,600,700');

    .header {
        display: flex;
        position: sticky;
        top: 0;
        background-color: color(primary);

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
            box-sizing: border-box;

            .header__buttons__button {
                border: none;
                outline-color: white;
                background-color: color(primary);
                text-transform: uppercase;
                font-family: 'Poppins', sans-serif;
                font-weight: 600;
                font-size: 0.8em;
                text-decoration: none;
                color: color(text-color-header);
                cursor: pointer;

                @include desktop {
                    letter-spacing: 1.6px;
                }
            }

            .header__buttons__button--active {
                border-top: solid 2px color(accent-yellow);
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
