require('./bootstrap');

import Vue from 'vue';
import App from './App.vue';

import routes from "./routes";

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router: routes, // Add the Vue Router instance here
});
