<template>
    <vs-navbar
            class="nabarx"
            color="#4b435c"
            text-color="rgba(255,255,255,.6)"
            active-text-color="rgba(255,255,255,1)"
            margin="8"
            v-model="activeItem">
        <div slot="title">
            <vs-navbar-title>Gabriella Kenna</vs-navbar-title>
        </div>
<!--        <vs-navbar-item index="0">-->
<!--            <router-link to="/home">Home</router-link>-->
<!--        </vs-navbar-item>-->
<!--        <vs-navbar-item index="1">-->
<!--            <router-link to="/home">Portfolio</router-link>-->
<!--        </vs-navbar-item>-->
    </vs-navbar>
</template>

<script>
    export default {
        name: "TitleBar",
        data:() => ({
            activeItem: 0
        })
    }
</script>

<style scoped>
    header {
        min-height: 48px;
    }
</style>