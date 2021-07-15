//axios封装地址案例https://learnku.com/articles/30504
const url = 'api';
const cnodejs = 'cnodejs';
export default {
    // 首页
    Index: {
        index: 'https://read.douban.com/j/graphql',
        loca: './testData/data.json',   //在public文件夹下
        loca2: './testData/data.php',   //在public文件夹下
        loca3: './testData/wangyiNews.php',   //在public文件夹下

        hero: 'https://storyapi.naice.me/api/hero',
        heroDetail: 'https://storyapi.naice.me/api/heroDetail',

    },
    // App
    App: {

        api1: 'https://api.apiopen.top/searchMusic',    //歌曲搜索
        api2: 'http://poetry.apiopen.top/sentences',       //随机古诗名言
        api3: 'http://poetry.apiopen.top/poetryFull',
        api4: 'https://www.apiopen.top/weatherApi',          //获取天气
        api5: 'https://api.apiopen.top/getJoke',
        api6: 'https://api.apiopen.top/getWangYiNews',    //网易新闻
        api7: 'https://api.apiopen.top/getImages',       //图片推荐
        // api8: 'https://www.apiopen.top/femaleNameApi?page=1',  //网名推荐
    },


    // 个人中心
    Home: {
        UserInfo: '/user/info'
    },

    // 当然也可以用文件方式进行管理
    // Goods: Goods
    Goods: {
        // getData: 'http://www.test.com/datas/lianjie.php',
        getData: `${url}/lianjie.php`,
    },
    menu: {
        get_menu: `${url}/menu.php`,
    },
    cnodejs: {
        //api来源https://cnodejs.org/api
        topics: `${cnodejs}/topics`,    //文章列表
        topic: `${cnodejs}/topic`,  //获取单条文章内容
    }


}