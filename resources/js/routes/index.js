// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import ExampleComponent from "../components/ExampleComponent";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: ExampleComponent, // Make sure the component is imported and used correctly
        name: 'home',
    },
    // Add more routes as needed
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
