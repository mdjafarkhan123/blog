<script setup>
import { onMounted, ref } from "vue";
import useFetch from "../composables/useFetch";
import { useRouter } from "vue-router";
import DOMPurify from "dompurify";

const router = useRouter();
const data = ref([]);
const loading = ref(true);
const error = ref(null);
function handleNavigation(id) {
    router.push({ name: "SingleBlog", params: { id } });
}

onMounted(() => {
    useFetch({
        link: "https://lifehacking.kicker.axiomthemes.com/wp-json/wp/v2/posts?_embed",
        data,
        loading,
        error,
    });

    setTimeout(() => {
        console.log(data.value[0]);
    }, 2000);
});

const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

const sanitizeHTML = (html) => DOMPurify.sanitize(html);
</script>

<template>
    <section id="hero" class="hero">
        <div class="container">
            <div class="hero__data">
                <h1 class="hero__title">
                    Heartfelt Reflections: Stories of Love, Loss, and Growth
                </h1>
                <p class="description" v-if="data.length > 0"></p>
            </div>
        </div>
    </section>

    <section class="category">
        <div class="container">
            <div class="category__data">Here some category</div>
        </div>
    </section>

    <section class="posts">
        <div class="container">
            <div v-if="loading" class="loader"></div>
            <div v-if="error" class="error error--message"></div>
            <div class="posts__data" v-if="!loading">
                <article
                    @click="handleNavigation(post.id)"
                    class="posts__post post"
                    v-for="post in data"
                    :key="post.id"
                >
                    <div class="post__image">
                        <img
                            :src="
                                post._embedded?.['wp:featuredmedia']?.[0]
                                    ?.media_details?.sizes?.['kicker-thumb-med']
                                    ?.source_url
                            "
                            alt="Post image"
                        />
                    </div>
                    <div class="post__content">
                        <div class="post__categories">
                            <span class="post__category">
                                {{ post._embedded["wp:term"][0][0].name }}
                            </span>
                        </div>
                        <h4
                            @click="handleNavigation(post.id)"
                            class="post__title"
                        >
                            {{ post.title.rendered }}
                        </h4>
                        <div class="post__meta">
                            <div class="post__author">
                                {{ post._embedded.author[0].name }}
                            </div>
                            <div class="post__date">
                                {{ (formatDate(post.date), post.id) }}
                            </div>
                        </div>
                        <p
                            class="post__excerpt"
                            v-html="sanitizeHTML(post.excerpt.rendered)"
                        ></p>
                        <p></p>
                        <a href="#" class="btn btn--primary">Read more</a>
                    </div>
                </article>
            </div>
            <aside class="posts__sidebar"></aside>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.error {
    position: relative;
    display: inline-block;
    text-align: center;
    color: rgb(199, 0, 0);
    font-size: 15px;
    font-weight: 400;
    background-color: rgb(255, 216, 216);
    padding: 10px 20px;
    border-radius: 4px;
    &--message {
        &::before {
            content: "Opps! There is an error occurred. Data can not be loaded";
        }
    }

    &--indicator::after {
        content: "";
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        background-color: rgb(255, 216, 216);
        top: -6px;
        left: 10px;
        z-index: -1;
        rotate: -45deg;
        border-radius: 3px;
    }
}

.container {
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(0, 1fr) 370px;

    .posts {
        &__data {
            --item-gap: 30px;
            display: grid;
            gap: var(--item-gap);
        }
        &__post {
            width: 100%;
            --gap: 1.25rem;
            display: grid;
            grid-template-columns: 350px calc(100% - 350px - var(--gap));
            gap: var(--gap);

            &:not(&:first-child) {
                padding-top: var(--item-gap);
                border-top: 1px solid var(--color-border);
            }

            .post__excerpt {
                display: -webkit-box;
                line-clamp: 2;
                -webkit-line-clamp: 2; // Limit to 2 lines
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                max-height: 3em; // Approximate height for 2 lines
                line-height: 1.5em; // Adjust based on font-size
            }

            .post__image {
                background-color: rgb(222, 222, 222);
            }
        }
    }
}

@media only screen and (max-width: 1024px) {
    .container {
        grid-template-columns: minmax(0, 1fr);
    }
    aside {
        display: none;
    }
}
</style>
