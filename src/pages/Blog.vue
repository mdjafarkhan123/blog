<script setup>
import { onMounted, ref } from "vue";
import useFetch from "../composables/useFetch";
import DOMPurify from "dompurify";

const { id } = defineProps(["id"]);

const data = ref([]);
const loading = ref(true);
const error = ref(null);
console.log(id);

onMounted(() => {
    useFetch({
        link: `https://lifehacking.kicker.axiomthemes.com/wp-json/wp/v2/posts/${id}?_embed`,
        data,
        loading,
        error,
    });

    setTimeout(() => {
        console.log(data.value);
        console.log(loading.value);
    }, 2000);
});

const sanitizeHTML = (html) => DOMPurify.sanitize(html);
</script>

<template>
    <section>
        <div class="container">
            <div class="post">
                <div v-if="loading" class="loader"></div>
                <div v-if="error" class="error error--message"></div>
                <div v-if="!loading" class="post__data">
                    {{ data.title.rendered }}
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
