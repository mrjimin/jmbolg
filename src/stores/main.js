/**
 * Vue3 - 新的状态管理方式,不使用vuex的情况（https://learnku.com/vuejs/t/52430）
 * vue3状态管理js、ts（https://github.com/Mario-Brendel/Vue3-Tests）
 */

import { reactive, readonly } from 'vue';
export class Store {
    constructor() {
        let data = this.data();
        this.setup(data);
        this.state = reactive(data);
    }
    setup(data) {   //可以省略,也可以追加数据
        // data.aa = 1;
    }
    getState() {
        let foo = readonly(this.state);
        return foo;
    }
}