<script setup>
import { ref, onMounted } from "vue";
import DOMPurify from "dompurify";

const posts = ref([]); // Stores posts
const page = ref(1); // Tracks current page
const loading = ref(false);
const allLoaded = ref(false); // Check if all posts are loaded

const fetchPosts = async () => {
    if (loading.value || allLoaded.value) return; // Prevent multiple fetches

    loading.value = true;
    try {
        const response = await fetch(
            `https://lifehacking.kicker.axiomthemes.com/wp-json/wp/v2/posts?_embed&per_page=10&page=${page.value}`
        );
        if (!response.ok) throw new Error("Failed to fetch posts");

        const newPosts = await response.json();

        if (newPosts.length > 0) {
            posts.value.push(...newPosts);
            page.value++;
        } else {
            allLoaded.value = true; // No more posts available
        }
    } catch (error) {
        console.error("Error fetching posts:", error);
    } finally {
        loading.value = false;
    }
};

// Load initial posts on mount
onMounted(fetchPosts);

// Function to sanitize HTML
const cleanContent = (html) => DOMPurify.sanitize(html);
</script>

<template>
    <section class="posts">
        <div class="container posts__container">
            <article v-for="post in posts" :key="post.id" class="post">
                <h2 class="post__title">{{ post.title.rendered }}</h2>
                <p
                    class="post__excerpt"
                    v-html="cleanContent(post.excerpt.rendered)"
                ></p>
            </article>

            <div class="load-more">
                <button
                    v-if="!allLoaded"
                    @click="fetchPosts"
                    :disabled="loading"
                >
                    {{ loading ? "Loading..." : "Load More" }}
                </button>
                <p v-else>No more posts to load.</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.posts {
    padding: 20px;
}

.post {
    padding: 20px;
    border-bottom: 1px solid #ddd;
}

.load-more {
    text-align: center;
    margin-top: 20px;

    button {
        padding: 10px 20px;
        border: none;
        background: #0073aa;
        color: white;
        cursor: pointer;
        border-radius: 5px;
        transition: 0.3s;
    }

    button:disabled {
        background: gray;
        cursor: not-allowed;
    }
}
</style>
