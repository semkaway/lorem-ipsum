<template>
    <main>
        <div class="text-holder">
            <h1 class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
        </div>
        <div class="image-holder">
            <img class="image" src="@/assets/img/homepage-people.png" alt="people working">
        </div>
        <div class="info-holder" id="aboutUs">
            <info-block class="info-holder__block" v-for="block in info" :key="block.id" :data="block"/>
        </div>
        <div class="write-comment" id="writeComment">
            <h2 class="write-comment__title">Write<br>comment<br><div class="write-comment__rectangle"></div></h2>
            <form class="write-comment__form" @submit="checkForm">
                <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" :key="error.id">{{ error }}</li>
                    </ul>
                </p>
                <p v-if="success">
                    <b>Your comment was successfully added!</b>
                </p>
                <input
                    class="write-comment__form__input write-comment__form__input--thin"
                    type="text"
                    placeholder="Title"
                    v-model="title">
                <textarea
                    class="write-comment__form__input write-comment__form__input--thick"
                    type="text"
                    placeholder="Your comment"
                    v-model="text"></textarea>
                <button type="submit" class="write-comment__form__button">Send</button>
            </form>
        </div>
        <div class="divider-holder">
            <hr class="divider">
        </div>
    </main>
</template>

<script>

    import HomepageInfoBlock from '@/components/HomepageInfoBlock'
    import info from '@/components/data/info'

    export default {
        name: 'Homepage',
        components: {
            'info-block': HomepageInfoBlock
        },
        data() {
            return {
                info: info,
                title: null,
                text: null,
                errors: [],
                success: false
            }
        },
        methods: {
            checkForm(e) {
                e.preventDefault()
                this.success = false
                if (this.title && this.text) {
                    let comment = {"title": this.title, "body": this.text}
                    this.$store.dispatch('addComment', comment)
                    this.title = null
                    this.text = null
                    this.errors = []
                    this.success = true
                    return true
                }

                this.errors = []

                if (!this.title) {
                    this.errors.push('Title required.')
                }
                if (!this.text) {
                    this.errors.push('Text required.')
                }

            }
        }
    }
</script>

<style lang="scss">

    .text-holder {

        padding-left: padding(inner-left);
        padding-right: padding(inner-right);
        padding-top: 10px;

        .text {
            font-size: 1.5em;
            letter-spacing: 0.5px;
            color: color(text-color);

            @include desktop {
                line-height: 120%;
                font-size: 3.8em;
                font-weight: bold;
            }
        }

        @include desktop {
            padding-top: 30px;
        }
    }

    .image-holder {
        height: 29.4em;
        width: 100%;
        margin-top: 1.8em;

        .image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        @include desktop {
            margin-top: 4.5em;
        }
    }

    .info-holder {
        background-color: color(shade);
        display: flex;
        flex-direction: column;

        .info-holder__block {
            width: 100%;

            @include desktop {
                width: 26.6em;
            }
        }

        @include desktop {
            flex-direction: row;
            height: 33.4em;
            padding-left: padding(inner-left);
            padding-right: 5%;
        }
    }

    .write-comment {
        height: 34em;
        color: white;
        padding: 20px;
        background-color: color(dark);
        display: flex;
        flex-direction: column;

        .write-comment__title {
            flex-basis: 28%;

            .write-comment__rectangle {
                height: 5px;
                width: 70px;
                background-color: color(accent-yellow);

                @include desktop {
                    margin-top: 30px;
                }
            }

            @include desktop {
                font-size: 3em;
                line-height: 50px;
                letter-spacing: 0.5px;
                flex-basis: 42%;
            }
        }

        .write-comment__form {

            .write-comment__form__input {
                width: 100%;
                border: solid 1px;
                border-color: color(accent-green);
                background-color: color(dark);
                border-radius: 3px;
                margin-bottom: 16px;
                box-sizing: border-box;
                color: color(accent-green);
                padding-left: 17px;
                padding-top: 13px;
                font-size: 1.1em;
            }

            ::placeholder {
                margin: 0;
                color: color(accent-green);
            }

            .write-comment__form__input--thin {
                height: 55px;
            }

            .write-comment__form__input--thick {
                height: 150px;
                resize: none;
            }

            .write-comment__form__button {
                margin-top: -7px;
                border: none;
                border-radius: 3px;
                background-color: color(accent-green);
                outline-color: color(accent-green);
                width: 100%;
                height: 55px;
                box-sizing: border-box;
                font-size: 1em;
                cursor: pointer;

                @include desktop {
                    width: 150px;
                }
           }

           @include desktop {
               margin-top: 39px;
               width: 606px;
           }

        }

        @include desktop {
            flex-direction: row;
            padding-top: 101px;
            padding-left: padding(inner-left);
            padding-right: 180px;
            padding-bottom: 0;
            height: 29.7em;
        }
    }

    .divider-holder {
        background-color: color(dark);

        .divider {
            margin-top: 0;
            margin-bottom: 0;
            background-color: color(dark);
            border-top: 1px solid color(darken);
            border-bottom: none;
            border-left: none;
            border-right: none;
            width: 100%;
        }

        @include desktop {
            padding-left: 50px;
            padding-right: 50px;
        }
    }

</style>
