<script setup></script>

<template>
    <router-view v-slot="{ Component }">
        <keep-alive exclude="Blog">
            <component :is="Component"></component>
        </keep-alive>
    </router-view>
</template>

<style lang="scss" scoped></style>
