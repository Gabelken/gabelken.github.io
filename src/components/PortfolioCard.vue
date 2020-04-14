<template>
    <router-link :to="to">
        <div class="card" v-bind:style="{ backgroundImage: 'url(' + require(`@/assets/${src}`) + ')' }">
            <h1>{{title}}</h1>
            <div class="overlay">
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "PortfolioCard",
        props: {
            title: {
                type: String,
                required: true,
                default: ""
            },
            src: {
                type: String,
                required: true,
                default: ""
            },
            alt: {
                type: String,
                required: true,
                default: "SOS"
            },
            to: {
                type: String,
                required: true,
                default: '/'
            }
        },
        methods: {
            resolve_img_url: function (path) {
                let images = require.context('../assets/', false, /\.png$|\.jpg$/)
                return images("./"+path)
            }
        }
    }
</script>

<style scoped>
    .card {
        position: relative;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 20em;
        height: 15em;
        max-width: 75%;
        max-height: 83%;
        margin: 0.85em;
        padding: 0.5em;
        border-radius: 1em;
        top: 0;
        transition: height;
    }
    .overlay {
        background-color: #ebebeb;
        opacity: 0.5;
        width: 100%;
        height: 3em;
        border-radius: 0 0 1em 1em;
        position: absolute;
        bottom: 0;
    }
    h1 {
        color: #333943;
        font-size: 1.5em;
        opacity: 1;
        z-index: 1;
    }

</style>