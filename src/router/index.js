import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Blog from "../pages/Blog.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/post/:id", component: Blog, props: true, name: "SingleBlog" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
