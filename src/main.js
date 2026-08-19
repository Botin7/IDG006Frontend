import 'admin-lte/plugins/jquery/jquery.min.js'
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'
import 'admin-lte/dist/js/adminlte.min.js'


import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { createPinia } from 'pinia'
import { useUserStore } from "@/stores/users";
import { apiVerify } from "@/function/api/auth.js";

const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')

const userStore = useUserStore();
axios.interceptors.request.use((config) => {
    const token = userStore.getSanctumToken();
    if (token && !config.headers['Authorization']) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

router.beforeEach(async (to, from) => {
    const { guarded } = to.meta;
    if (guarded === undefined) { // if the route is not guarded, we don't need to verify the token
        return;
    }

    try {
        const token = userStore.getSanctumToken();
        const response = await apiVerify(token);
        const { data } = response;
        userStore.setState(data.user);
    } catch (error) {
        userStore.reset();
    }

    if (guarded && !userStore.isAuthenticated) { // if the route is guarded and the user is not authenticated, redirect to signin page
        return { name: 'SignIn' };
    }
    if (!guarded && userStore.isAuthenticated) { // if the route is not guarded and the user is authenticated, redirect to dashboard page
        return { name: 'Dashboard' };
    }
});