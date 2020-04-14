<template>
    <div class="container">
        <vue-glide type="carousel">
            <vue-glide-slide v-for="i in carouselImages" :key="i.id">
                <img class="rotated"
                     :src="require(`@/assets/${i.src}`)"
                     v-if="i.isPortrait" />
                <img class="standard"
                     :src="require(`@/assets/${i.src}`)"
                     v-if="!i.isPortrait"/>
            </vue-glide-slide>
            <template slot="control">
                <button data-glide-dir="<">prev</button>
                <button data-glide-dir=">">next</button>
            </template>
        </vue-glide>
    </div>
</template>

<script>
    export default {
        name: "PhotoCardViewer",
        props: {
            carouselImages: {
                type: Array,
                required: true,
                default: function () {return []}
            },
        },
        data() {
            return {
                carouselSettings: {
                    type: "carousel"
                }
            }
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        margin: 16px;
        padding: 16px;
        align-items: center;
        justify-content: center;
    }
    .carousel {
        display: flex;
        margin: 16px;
        width: 80%;
        justify-content: center;
        align-items: center;
        color: #333943;
    }
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
    img.standard {
        max-width: 100%;
        max-height: 30em;
        object-fit: contain;
    }
    img.rotated {
        max-height: 100%;
        max-width: 30em;
        object-fit: contain;
        transform: rotate(90deg);
    }

</style>