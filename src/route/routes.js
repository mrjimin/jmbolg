import Layout from "@/layout/index.vue";        //结构布局页面
import Blank from "@/layout/blank.vue";         //空白页（登录、注册、404等页面使用）


const errorRoute = [
    {
        path: "/error",
        name: "error",
        redirect: '/404',
        component: Blank,
        children: [
            {
                path: '401',
                name: '401',
                component: () => import('@/views/error/404.vue')
            },
            {
                path: '404',
                name: '404',
                component: () => import('@/views/error/404.vue')
            },
            {
                path: '500',
                name: '500',
                component: () => import('@/views/error/404.vue')
            }
        ]
    },
]
const routes = [
    {
        path: "/",
        name: "index",
        component: Layout,
        meta: {
            title: '什么都不懂'
        },
        children: [
            {
                path: "home",
                name: "home",
                alias: ["/"],   //路由别名，/也能进来这个页面（首页重定向到这个页面的情况）
                component: () =>
                    import("@/views/home/index.vue"),
            },
            {
                path: "list",
                name: "list",
                component: () =>
                    import("@/views/list/index.vue"),
            },
            {
                path: "about",
                name: "about",
                component: () =>
                    import("@/views/about/index.vue"),
            },
            {
                path: "times",
                name: "times",
                component: () =>
                    import("@/views/times/index.vue"),
            },
            {
                path: "link",
                name: "link",
                component: () =>
                    import("@/views/link/index.vue"),
            },
            {
                path: "comp",
                name: "comp",
                component: () =>
                    import("@/views/comp/index.vue"),
            },
        ]
    },
    {
        path: "/",
        name: "Blank",
        component: Blank,
        meta: {
            title: '空白页'
        },
        children: [
            {
                path: "tool/:type?",
                name: "tool",
                component: () =>
                    import("@/views/tools/index.vue"),
                meta: {
                    title: '(｡◕‿◕｡)JMtool'
                }
                // children: [
                //     {
                //         path: "tool",
                //         name: "tool",
                //         component: () =>
                //             import("@/views/tools/index.vue"),
                //     },
                // ]
            },
        ]
    },

    ...errorRoute       //es6扩展运算符，这里是合并作用
];

export default routes