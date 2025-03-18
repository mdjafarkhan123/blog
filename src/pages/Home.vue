<script setup>
import { ref, onMounted, watch } from "vue";
import useFetch from "../composables/useFetch";
import DOMPurify from "dompurify";
import { useRouter } from "vue-router";

const router = useRouter();
const postData = ref([]);
const postLoading = ref(true);
const postError = ref(false);
const categoryData = ref([]);
const categoryLoading = ref(true);
const categoryError = ref(false);
let limit = 10;
const currentPage = ref(1);
const totalPage = ref(null);

const cleanDOM = (html) => DOMPurify.sanitize(html);

function handleNavigation(id) {
    router.push({ name: "SingleBlog", params: { id } });
}
watch(currentPage, () => {
    useFetch({
        link: `https://demo-themewinter.com/digiqole/wp-json/wp/v2/posts?_embed&per_page=${limit}&page=${currentPage.value}`,
        data: postData,
        loading: postLoading,
        error: postError,
        totalPage,
    });
});
function loadMore() {
    currentPage.value++;
}

onMounted(() => {
    useFetch({
        link: `https://demo-themewinter.com/digiqole/wp-json/wp/v2/posts?_embed&per_page=${limit}&page=${currentPage.value}`,
        data: postData,
        loading: postLoading,
        error: postError,
        totalPage,
    });
    useFetch({
        link: `https://demo-themewinter.com/digiqole/wp-json/wp/v2/categories`,
        data: categoryData,
        loading: categoryLoading,
        error: categoryError,
    });

    setTimeout(() => {
        console.log(totalPage.value);
    }, 2000);
});
</script>

<template>
    <section class="hero">
        <div class="hero__container container">
            <div class="hero__content">
                <h1 class="hero__heading">
                    Heartfelt Reflections: Stories of Love, Loss, and Growth
                </h1>
                <p class="hero__subheading">
                    Revision Welcomes to ultimate source for fresh perspectives!
                    Explore curated content to enlighten, entertain and engage
                    global readers.
                </p>
            </div>
        </div>
    </section>
    <section class="topics">
        <div class="container topics__container">
            <div class="topics__data">
                <h5 class="topics__heading">Recommend for you:</h5>
                <div v-if="categoryLoading" class="loader-wrapper">
                    <div class="loader"></div>
                </div>
                <ul v-if="!categoryLoading" class="topics__list-wrapper">
                    <li
                        v-for="category in categoryData"
                        :key="category.id"
                        class="topics__list-item"
                    >
                        <span class="topics__list-item__icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path
                                    d="M14 18V20L16 21V22H8L7.99639 21.0036L10 20V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H14ZM4 14V16H20V14H4Z"
                                ></path>
                            </svg>
                        </span>
                        <span class="topics__list-item__title">
                            {{ category.name }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="content">
        <div class="container content__container">
            <div
                v-if="postLoading && postData.length < 1"
                class="loader-wrapper"
            >
                <div class="loader"></div>
            </div>
            <div v-if="postError" class="error error--message"></div>
            <div v-if="postData.length > 0" class="content__data">
                <article
                    v-for="post in postData"
                    :key="post.id"
                    class="content__post post"
                >
                    <div class="post__image">
                        <img
                            :src="
                                post._embedded?.['wp:featuredmedia']?.[0]
                                    ?.media_details?.sizes?.['digiqole-medium']
                                    ?.source_url
                            "
                            alt=""
                        />
                    </div>
                    <div class="post__content">
                        <div class="post__category">
                            {{ post._embedded["wp:term"][0][0].name }}
                        </div>
                        <h4 class="post__title">{{ post.title.rendered }}</h4>
                        <div class="post__meta">
                            <span class="post__meta-name">
                                By
                                <span>{{ post._embedded.author[0].name }}</span>
                            </span>
                            <span class="post__meta-date">20 Jan 2020</span>
                        </div>
                        <p
                            class="post__description"
                            v-html="cleanDOM(post.excerpt.rendered)"
                        ></p>
                        <button
                            type="button"
                            class="btn btn--primary"
                            @click="handleNavigation(post.id)"
                        >
                            read more
                        </button>
                    </div>
                </article>
                <div v-if="postLoading" class="loader-wrapper">
                    <div class="loader"></div>
                </div>
                <div class="content__pagination">
                    <button
                        v-if="currentPage < totalPage && !postLoading"
                        type="button"
                        class="btn btn--primary"
                        @click="loadMore"
                    >
                        View more...
                    </button>
                </div>
            </div>

            <aside class="content__sidebar"></aside>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/utils" as u;

.hero {
    padding-block: 3em;
    &__container {
        min-height: 10vh;
        justify-content: center;
        align-items: center;
        .hero__content {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            border-bottom: 1px solid var(--color-border);
            padding-block-end: 2em;
            .hero__subheading,
            .hero__heading {
                text-align: center;
            }

            .hero__heading {
                font-size: var(--fs-2xl);
            }
        }
    }
}

.topics {
    &__data {
        display: flex;
        width: 100%;
        flex-flow: column;
        justify-content: center;
        gap: 40px;
    }

    &__heading {
        text-align: center;
        text-transform: uppercase;
        color: var(--color-subheading);
    }
    &__list-wrapper {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    &__list-item {
        background-color: var(--color-white);
        padding: 10px 20px;
        border-radius: 50px;
        display: block;
        box-shadow: 0 5px 25px 0 rgba(21, 33, 56, 0.074);
        cursor: pointer;
        &__icon svg {
            vertical-align: middle;
            width: 24px;
            height: auto;
            margin-right: 10px;
        }
        &__title {
            font-weight: 600;
            line-height: 1em;
            color: var(--color-heading);
        }
    }
}

.content {
    padding-top: var(--space-l-xl);
    --gap: 30px;
    &__container {
        flex-flow: row;
    }

    &__data {
        display: grid;
        gap: var(--gap);
        width: calc(100% - 360px);
        .post {
            display: grid;
            grid-template-columns: 46% 1fr;
            gap: var(--gap);
            &:not(&:first-child) {
                padding-top: var(--gap);
                border-top: 1px solid var(--color-border);
            }
            &__content {
                display: flex;
                flex-direction: column;
                gap: 10px;
                justify-content: center;
                align-items: flex-start;
            }
            &__category {
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.4px;
                color: var(--color-subheading);
            }

            &__image {
                img {
                    border-radius: 10px;
                    overflow: hidden;
                    width: 100%;
                    object-fit: cover;
                    aspect-ratio: 5/3;
                }
            }

            &__meta {
                display: flex;
                gap: 10px;
                width: 100%;
                font-size: 12px;
                text-transform: uppercase;
                font-weight: 600;
                color: var(--color-subheading);
                &-name span {
                    color: var(--color-heading);
                }
            }

            &__description {
                display: -webkit-box;
                line-clamp: 2;
                -webkit-line-clamp: 2; // Limit to 2 lines
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

    &__sidebar {
        width: 360px;
    }
}

@include u.respond-to("lg") {
    .content {
        &__data {
            width: 100%;
        }
        &__sidebar {
            width: 0;
            display: none;
        }
    }
}

@include u.respond-to("sm") {
    .content {
        &__data {
            gap: 30px;
        }
        .post {
            grid-template-columns: 1fr;
        }
    }
}
</style>
