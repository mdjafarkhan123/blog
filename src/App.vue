<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
Footer;
</script>

<template>
    <Header></Header>
    <main>
        <router-view v-slot="{ Component }">
            <component :is="Component"></component>
        </router-view>
    </main>
    <Footer></Footer>
</template>

<style lang="scss" scoped></style>
