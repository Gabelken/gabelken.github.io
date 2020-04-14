<template>
    <router-link :to="to">
        <div class="card" v-bind:style="{ backgroundImage: 'url(' + require(`@/assets/${src}`) + ')' }">
            <div class="txt-container">
                <h1>{{title}}</h1>
            </div>
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
                default: ""
            },
            to: {
                type: String,
                required: true,
                default: '/'
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
        margin: 0.85em;
        padding: 0.5em;
        border-radius: 1em;
        top: 0;
    }
    .overlay {
         background-color: #ebebeb;
         opacity: 0.5;
         width: 100%;
         height: 3em;
         border-radius: 0 0 1em 1em;
         position: absolute;
         bottom: 0;
         margin:0;
     }
    .txt-container {
        width: 100%;
        height: 3em;
        position: absolute;
        bottom: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        margin:0;
    }
    h1 {
        color: #333943;
        font-size: 1em;
        opacity: 1;
    }

</style>