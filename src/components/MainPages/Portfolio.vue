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
    div.portfolio {
        margin: 16px 5%;
        min-height: border-box;
    }
    div.card-viewer {
        display: flex;
        justify-content: center;
        align-content: center;
        width: 100%;
    }
</style>