import { createRouter, createWebHistory } from "vue-router";

// 引入routes.js里定义的路由
import routes from "./routes";


// 构建路由实例
const router = createRouter({
    // history: createWebHistory(),
    history: createWebHistory('/jmbolg/'),  //github上使用的，http://localhost:3000/jmbolg/
    routes,
    // scrollBehavior(to, from, savedPosition) {
    //     // return 期望滚动到哪个的位置
    //     console.log(to);
    //     console.log(from);
    //     console.log(savedPosition);
    // }
});


// 前置守卫
router.beforeEach((to, from, next) => {
    // console.log(to);
    // console.log(from);

    if (to.matched.length === 0) {  //如果未匹配到路由
        // console.log(11);
        next({ name: "404" });
        // from.name ? next({ name: from.name }) : next({name:"404"});   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
    } else {
        next();    //如果匹配到正确跳转
    }
});
// 后置守卫（可设置TKD）
router.afterEach((to, from) => {
    // window.scrollTo(0, 0);   //切换页面后回到顶部
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }


})

export default router;
