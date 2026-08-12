import SignIn from './views/component/auth/SignIn.vue';
import SignUp from './views/component/auth/SignUp.vue';
import Dashboard from './views/component/page/Dashboard.vue';
import SignOut from './views/component/auth/Signout.vue';
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        name: 'SignIn',
        component: SignIn,
        meta:{guarded: false}
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
        meta:{guarded: false}
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta:{guarded: true}
    },
    {
        path: '/signout',
        name: 'SignOut',
        component: SignOut,
    },
    ///:pathMatch(.*)* every /thing else will redirect to SignIn
    { path: '/:pathMatch(.*)*', redirect: { name: 'SignIn' } },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;