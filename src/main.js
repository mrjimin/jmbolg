import { createApp } from 'vue'
import App from '@/App.vue'

import route from '@/route/index.js'    //导入路由
import stores from '@/stores/index.js'    //导入vuex（自定义）

import header from '@comp/common/header.vue';   //公共头部组件
import footer from '@comp/common/footer.vue';    //公共底部部组件
import right from '@comp/common/right.vue';    //公共底部部组件


// ElementPlus引入
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'

// e-icon-picker图标选择器（https://e-icon-picker.cnovel.club/v1/use/quickstart.html）
import eiconPicker from 'e-icon-picker';
import "e-icon-picker/lib/symbol.js"; //基本彩色图标库
import 'e-icon-picker/lib/index.css'; // 基本样式，包含基本图标
import 'font-awesome/css/font-awesome.min.css'; //font-awesome 图标库
// import 'element-plus/lib/theme-chalk/el-icon.css'; //element-plus 图标库


const app = createApp(App); //创建实例


// 挂载到全局，（vue3.0版本挂载方式）
// app.config.globalProperties.$api = api

app.config.errorHandler = (err, vm, info) => {
    // 处理错误
    // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
    // console.log(err);
    // console.log(vm);
    // console.log(info);
}

app.use(route);
app.use(stores);
app.use(ElementPlus, { locale })
app.use(eiconPicker, {
    FontAwesome: true,
    ElementUI: true,
    eIcon: true,//自带的图标，来自阿里妈妈
    eIconSymbol: false//是否开启彩色图标
});

app.component('Header', header)
app.component('Footer', footer)
app.component('Right', right)

app.mount('#app')
