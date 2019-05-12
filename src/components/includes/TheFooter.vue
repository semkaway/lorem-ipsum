<template>
    <div class="footer">
        <p class="footer__text footer__text__contacts">mail@mailtest.com<br>+30-6977664062</p>
        <p class="footer__text footer__text__copyright">Copyright &copy; 2019 Test All Rights Reserved.</p>
    </div>
</template>

<script>
    export default {
        name: 'TheFooter'
    }
</script>

<style lang="scss">

    .footer {
        height: 6.3em;
        background-color: color(dark);
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 22px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;

        .footer__text {
            margin: 0;
        }

        .footer__text__contacts {
            font-size: 0.8em;
            color: color(primary);

            @include desktop {
                font-size: 1em;
                line-height: 30px;
            }
        }

        .footer__text__copyright {
            margin-left: auto;
            font-size: 0.6em;
            color: color(text-color-shaded);

            @include desktop {
                font-size: 0.8em;
                margin-left: auto;
                margin-top: 18px;
                text-align: right;
            }
        }

        @include desktop {
            padding-left: 50px;
            padding-right: 50px;
        }
    }

</style>
