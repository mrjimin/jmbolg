import axios from "./axios.js"  //导入封装后的axios
import api from "./api.js"      //统一的接口文件

// console.log(api);

//请求示例
//get
const get_hero = (data) => {
    return axios({
        url: api.Index.hero,
        method: "get",
        data,
        config: {
            headers: {
                'Request-Type': 'wechat'
            },
            timeout: 10000
        }
    })
}
// 获取导航菜单
const get_menu = (data) => {
    return axios({
        url: api.menu.get_menu,
        method: "get",
        data
    })
}

// 使用post测试
const goodsList = (data) => {
    return axios({
        url: api.Goods.getData,
        method: "post",
        data,
    })
}

const pageList = (data) => {
    return axios({
        url: api.cnodejs.topics,
        method: "get",
        data,
    })
}
const pageDetail = (data) => {
    return axios({
        url: api.cnodejs.topic + '/' + data,
        method: "get",
    })
}

export default { get_hero, get_menu, goodsList, pageList, pageDetail }