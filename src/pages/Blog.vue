<script setup>
import { ref, onMounted } from "vue";
import useFetch from "../composables/useFetch";
import DOMPurify from "dompurify";

const { id } = defineProps(["id"]);
const data = ref([]);
const loading = ref(true);
const error = ref(false);
const cleanContent = (html) => DOMPurify.sanitize(html);

onMounted(() => {
    useFetch({
        link: `https://demo-themewinter.com/digiqole/wp-json/wp/v2/posts/${id}?_embed`,
        data,
        loading,
        error,
    });

    setTimeout(() => {
        console.log(data.value);
    }, 2000);
});
</script>

<template>
    <section class="post">
        <div class="container post__container">
            <div v-if="loading" class="loader-wrapper">
                <div class="loader"></div>
            </div>
            <div v-if="!loading" class="post__entry-content">
                <div class="post__meta">
                    <span class="post__meta-name">
                        By
                        <span>{{ data._embedded?.author?.[0].name }}</span>
                    </span>
                    <span class="post__meta-date">20 Jan 2020</span>
                </div>
                <h1 class="post__title">
                    {{ data.title.rendered }}
                </h1>
                <div class="post__category">
                    {{ data._embedded?.["wp:term"][0][0].name }}
                </div>
                <div class="post__image">
                    <img
                        :src="
                            data._embedded?.['wp:featuredmedia']?.[0]
                                ?.media_details?.sizes?.['full']
                                ?.source_url
                        "
                        alt=""
                    />
                </div>
            </div>
            <div class="post__main-content">
                <div class="post__data">
                    <p v-html="cleanContent(data?.content?.rendered)"></p>
                </div>
                <aside class="post__sidebar"></aside>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.post {
    padding-block: var(--space-l-xl);
    &__container {
        flex-flow: row wrap;
        gap: 40px;
    }
    &__entry-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        .post__category {
            font-weight: 600;
            font-size: 13px;
            color: var(--color-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            line-height: 1;
            padding: 5px 10px;
            border-radius: 4px;
            background-color: var(--color-white);
            box-shadow: 0 0 20px 0 rgba(181, 181, 181, 0.241);
        }

        .post__meta-name {
            span {
                font-weight: 600;
                color: var(--color-heading);
                margin-right: 10px;
            }
        }
    }
    &__title {
        text-align: center;
    }

    &__image {
        img {
            border-radius: 10px;
        }
    }
}
</style>
