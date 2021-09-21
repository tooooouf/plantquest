import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Quest from '../views/quest.vue'
import Submit from '../views/submit.vue'
import Getcoupon from '../views/getcoupon.vue'
import Result from '../views/result.vue'
import Collection from '../views/collection.vue'
import Collection_detail from '../views/collection_detail.vue'
import Coupons from '../views/coupons.vue'

const routes = [{
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/quest',
        name: 'quest',
        component: Quest
    },
    {
        path: '/submit',
        name: 'submit',
        component: Submit
    },
    {
        path: '/getcoupon',
        name: 'getcoupon',
        component: Getcoupon
    },
    {
        path: '/result',
        name: 'result',
        component: Result
    },
    {
        path: '/collection',
        name: 'collection',
        component: Collection
    },
    {
        path: '/collection_detail',
        name: 'collection_detail',
        component: Collection_detail
    },
    {
        path: '/coupons',
        name: 'coupons',
        component: Coupons
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router