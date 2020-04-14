<template>
    <div class="portfolio">
        <div class="card-viewer" v-for="card in cards" v-bind:key="card.idx">
            <PortfolioCard v-bind="card"/>
        </div>
    </div>
</template>

<script>
    import PortfolioCard from "../PortfolioCard";
    import CardService from "../../CardService";
    export default {
        name: "Portfolio",
        components: {
            PortfolioCard
        },
        computed: {
            cards() {
                let self = this;
                return CardService.getCards(self.$route.params.cardset);
            }
        }
    }
</script>

<style scoped>
    div {
        margin-top: 16px;
        margin-bottom: 16px;
        align-content: center;
        justify-content: center;
        min-height: border-box;
        height: 100%;
    }
    div.card-viewer {
        display: flex;
        justify-content: center;
        align-items:center;
    }
</style>