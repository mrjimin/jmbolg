/**
 * js常用函数（https://www.yuque.com/yizo/web/xwb7ik）
 * */
/**
 * @function 判断数据类型
 * @method types(o)
 * @example
 * types("") // "string"
types({}); // "object"
types([]); // "array"
types(5); // "number"
types(null); // "null"
types(); // "undefined"
types(/abcd/); // "regex"
types(new Date()); // "date"
 * 
 */
const types = (o) => {
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};




/**
 * @function 防抖函数，规定时间内点击多次，只执行最后一次
 * @method debounce(callback,wait);
 * @param {function} callback       需要执行的函数
 * @param {number} [wait=300]     等待时间（毫秒）,默认等待时间为300毫秒,为0的话就不需要防抖函数了
 * @example 
    const func = () => {
        console.log("1234567");
    };
    const dianji = () => {
        debounce(func, 500);
    };
 */
const debounce = (() => {
    let timer = 0;
    return function (callback, wait = 300) {
        clearTimeout(timer);
        timer = setTimeout(callback, wait);
    };
})();

/**
 * @function 节流函数，连续点击多次，规定时间内只执行一次
 * @method throttle(callback,wait);
 * @param {function} callback       需要执行的函数
 * @param {number} [wait=300]     等待时间（毫秒）,默认等待时间为300毫秒
 * @example 
    const func = () => {
        console.log("1234567");
    };
    const dianji = () => {
        throttle(func, 500);
    };
 */
const throttle = (() => {
    var timer = null;
    return function (callback, wait = 300) {
        var context = this;
        var args = arguments;
        if (!timer && callback) {
            timer = setTimeout(function () {
                callback.apply(context, args);
                timer = null;
            }, wait);
        }
    };
})();


/** 
 * @description 时间戳转化为年 月 日 时 分 秒 
 * @method formatTime(num,format)
 * @param {number} num 时间戳 new Date().getTime(); 获取当前时间戳（毫秒）
 * @param {string} [format='YYYY-mm-dd HH:MM:SS'] 时间格式 默认'YYYY-mm-dd HH:MM:SS' ,更改只需替换中间连接符号就行'YYYY年mm月dd日 HH时MM分SS秒'
 * @example 
 * var sjc = 1472048779952; //js一般获取的时间戳是13位，PHP一般是10位
 * formatTime(sjc, 'YYYY-mm-dd HH:MM:SS')
 */

const formatTime = (num, format = "YYYY-mm-dd HH:MM:SS") => {
    let ret, date, renum;
    if (num) {
        // 处理时间戳，js一般获取的时间戳是13位，PHP一般是10位,根据实际情况做判断处理
        if (num.toString().length == 10) {
            date = new Date(parseInt(num) * 1000);
        } else if (num.toString().length == 13) {
            date = new Date(parseInt(num));
        } else {
            date = new Date(parseInt(num));
        }
        const opt = {
            "Y+": date.getFullYear().toString(), // 年
            "m+": (date.getMonth() + 1).toString(), // 月
            "d+": date.getDate().toString(), // 日
            "H+": date.getHours().toString(), // 时
            "M+": date.getMinutes().toString(), // 分
            "S+": date.getSeconds().toString() // 秒
            // 目前用的是这六种符号,有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (var k in opt) {
            ret = new RegExp("(" + k + ")").exec(format);
            if (ret) {
                renum = (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")) //根据复数前面是否补零,如“mm”补零，单“m”前面不补零
                format = format.replace(ret[1], renum)
            };
        };
        return format;
    }
};


/**
 * 发布时间显示函数
 * @method timeFormat(time)
 * @param {number} time 时间戳（必填）
 * @example  var text=timeFormat(1472048779952);
@ 1、< 60s, 显示为“刚刚”
@ 2、>= 1min && < 60 min, 显示与当前时间差“XX分钟前”
@ 3、>= 60min && < 1day, 显示与当前时间差“今天 XX:XX”
@ 4、>= 1day && < 1year, 显示日期“XX月XX日 XX:XX”
@ 5、>= 1year, 显示具体日期“XXXX年XX月XX日 XX:XX”
*/
const timeFormat = (time) => {
    let date;
    if (time) {
        if (time.toString().length == 10) {
            date = new Date(parseInt(time) * 1000);
        } else if (time.toString().length == 13) {
            date = new Date(parseInt(time));
        } else {
            date = new Date(parseInt(time));
        }

        let curDate = new Date(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hour = date.getHours(),
            minute = date.getMinutes(),
            curYear = curDate.getFullYear(),
            curHour = curDate.getHours(),
            timeStr;

        if (year < curYear) {
            timeStr = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute;
        } else {
            let pastTime = curDate - date,
                pastH = pastTime / 3600000;

            if (pastH > curHour) {
                timeStr = month + '月' + day + '日 ' + hour + ':' + minute;
            } else if (pastH >= 1) {
                timeStr = '今天 ' + hour + ':' + minute + '分';
            } else {
                let pastM = curDate.getMinutes() - minute;
                if (pastM > 1) {
                    timeStr = pastM + '分钟前';
                } else {
                    timeStr = '刚刚';
                }
            }
        }
        return timeStr;
    }

}



/**
 * 字符串截取、字符串替换（例如手机号、身份证等号码隐藏）
 * @method strCut(str,start,len,rep)
 * @param {string}  str	为去要截取的字符串(类型为字符串)
 * @param {number}  start	为从第几位开始截取(不是下标)
 * @param {number}  [len]	截取的长度(不填从开始截取到最后)
 * @param {string}  [rep='']	需要替换的字符（例如："*"）默认为空
 * @example  var value=strCut('18011223344',4,4,'*')
 */
const strCut = (str, start, len, rep = '') => {

    if (str && (str.length - start) > 0) {	//判断开始截取的位置,字符串的长度需大于截取的长度
        let repnum = '', strnum = '';
        if (len) {
            strnum = (str.length - start) > len ? len : (str.length - start);  //到最后能够替换字符的个数
        } else {
            strnum = str.length - start;
        }

        for (let i = 0; i < strnum; i++) {
            repnum += rep
        }
        let strre = str.substr(start - 1, len);	//截取（start-1）对应截取的位置
        let strend = str.replace(strre, repnum);	//替换
        return strend;
    } else {
        return str;
    }
}

/**
 * @function 去除字符串左侧指定字符
 * @method  ltrim(str,char)
 * @param {string} str  需要去除指定字符的字符串
 * @param {string} [char] 左侧需要去除的字符,（不填默认去除空格）
 * @example ltrim("&&&1234a&11&&","&")    //1234a&11&&
 */
const ltrim = (str, char) => {
    let lstr;
    if (char) {
        lstr = str.replace(new RegExp('^[' + char + ']+', 'g'), '');
    } else {
        lstr = str.replace(new RegExp('^\\s+', 'g'), '');
    }
    return lstr;
}

/**
 * @function 去除字符串右侧指定字符
 * @method  rtrim(str,char)
 * @param {string} str  需要去除指定字符的字符串
 * @param {string} [char] 右侧需要去除的字符,（不填默认去除空格）
 * @example rtrim("&&&1234a&11&&","&")    //&&&1234a&11
 */
const rtrim = (str, char) => {
    let rstr;
    if (char) {
        rstr = str.replace(new RegExp('[' + char + ']+$', 'g'), '');
    } else {
        rstr = str.replace(new RegExp('\\s+$', 'g'), '');
    }
    return rstr;
}

/**
 * @function 去除字符串左右两边指定字符,直接调用上面ltrim()和rtrim()方法
 * @method  trim(str,char)
 * @param {string} str  需要去除指定字符的字符串
 * @param {string} [char] 左侧需要去除的字符,（不填默认去除两边空格）
 * @example trim("&&&1234a&11&&","&")    //1234a&11
 */
const trim = (str, char) => {
    let endstr;
    if (char) {
        endstr = rtrim(ltrim(str, char), char);
    } else {
        endstr = str.trim();
    }
    return endstr;
}



/**
 * 判断浏览器函数,判断用户是PC端、移动端
 * @method isMobile()
 */
function isMobile() {
    if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        return true;  // 移动端
    } else {
        return false;  // PC端
    }
}



/**
 * 简单封装ajax，用于请求数据,未作跨域处理，
 * 参数说明：
 * @param {object} opts: {'可选参数'}
 * @param {string} method: 请求方式:GET/POST,默认值:'GET';
 * @param {string} url:    发送请求的地址, 默认值: 当前页地址;
 * @param {any} data: 发送给后台的数据, string,json;
 * @param {boolean} async: 是否异步:true/false,默认值:true;
 * @param {boolean} cache: 是否缓存：true/false,默认值:true;
 * @param {string} contentType: HTTP头信息，默认值：'application/x-www-form-urlencoded';
 * @param {function} success: 请求成功后的回调函数;
 * @param {function} error: 请求失败后的回调函数;
 * @example ajax({
    url: "http://poetry.apiopen.top/sentences",
    success: function (res) {
      console.log(res);
    },
  })
 */
const ajax = (opts) => {
    //一.设置默认参数
    var defaults = {
        method: 'GET',
        url: '',
        data: '',
        async: true,
        cache: true,
        contentType: 'application/x-www-form-urlencoded',
        success: function () { },
        error: function () { }
    };

    //二.用户参数覆盖默认参数    
    for (var key in opts) {
        defaults[key] = opts[key];
    }

    //三.对数据进行处理
    if (typeof defaults.data === 'object') { //处理 data
        var str = '';
        for (var key in defaults.data) {
            str += key + '=' + defaults.data[key] + '&';
        }
        defaults.data = str.substring(0, str.length - 1);
    }

    defaults.method = defaults.method.toUpperCase(); //处理 method,统一转成大写方便后面处理
    defaults.cache = defaults.cache ? '' : '&' + new Date().getTime(); //处理 cache

    if (defaults.method === 'GET' && (defaults.data || defaults.cache)) {
        defaults.url += '?' + defaults.data + defaults.cache; //处理 url 
    }


    //四.开始编写ajax
    //1.创建ajax对象
    var oXhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    //2.和服务器建立联系，告诉服务器你要取什么文件
    oXhr.open(defaults.method, defaults.url, defaults.async);
    //3.发送请求
    if (defaults.method === 'GET')
        oXhr.send(null);
    else {
        oXhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //post请求会变为charset=UTF-8形式,这里重新定义请求头
        oXhr.send(defaults.data);
    }


    //4.等待服务器回应
    oXhr.onreadystatechange = function () {
        if (oXhr.readyState === 4) {
            if (oXhr.status === 200) {
                var endData;
                try {
                    endData = eval('(' + oXhr.responseText + ')');

                } catch (e) {
                    endData = oXhr.responseText;
                }
                defaults.success.call(oXhr, endData);
            } else {
                defaults.error();
            }
        }
    };
}

/**
 * @function 回到顶部
 * @param {string} el 需要返回顶部的标签元素,默认是DOM页面
 * @example goTop(".el-scrollbar .el-scrollbar__wrap")
 */
const goTop = (el) => {
    let timer = '';
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
        let oTop, dom;
        //需要重新获取元素、滚动条高度
        if (el) {
            dom = document.querySelector(el);
            oTop = dom.scrollTop;
        } else {
            dom = window;
            oTop = document.body.scrollTop || document.documentElement.scrollTop;
        }

        if (oTop > 0) {
            // dom.scrollTo(0, (oTop - 100));
            dom.scrollTo(0, (oTop - oTop / 10));
            dom.onmousewheel = function () { return false }
            timer = requestAnimationFrame(fn);
        } else {
            dom.onmousewheel = function () { return true }
            cancelAnimationFrame(timer);
        }
    });
}


/**
 * @function 设置localStorage,思路：封装成一个json数据存进去，保存时间、过期时间、保存的数据
 * @method setStorage(name)
 * @param {string} name  保存数据的key值,必填
 * @param {any} [value='']   需要保存的数据
 * @param {number} [time=0]   过期时间,以毫秒为单位,默认永不过期
 * @example setStorage("aa","123456",5000)
 */
const setStorage = (name, value = '', time = 0) => {
    time = isNaN(time - 0) ? 0 : time - 0;    //转换成数字,字符串类型的数字也转成数字
    time = time > 0 ? time : 0;     //有负数的情况

    let obj = {
        jm_save_value: value,
        jm_save_time: time,
        jm_save_startTime: new Date().getTime()//记录何时将值存入缓存，毫秒级
    }
    if (name) {
        localStorage.setItem(name, JSON.stringify(obj));
    } else {
        console.log("请先设置name名");
    }
}

/**
 * @function 获取localStorage
 * @method getStorage(name)
 * @param {string} name  保存数据的key值,必填
 * @example getStorage("aa")
 */
const getStorage = (name) => {
    let item = localStorage.getItem(name);
    if (item) {
        //先尝试进行json字符串转为对象,直接通过localStorage.setItem()存单个字符串的情况
        try {
            item = JSON.parse(item);
        } catch (error) {
            //如果不行就不是json的字符串，就直接返回
            item = item;
        }

        //  判断有没有设置过期时间、保存数据的格式
        //先判断设置时的时间大于0，是否为数字,过期时间是否也为数字
        if ((item.jm_save_startTime > 0) && (!isNaN(item.jm_save_startTime)) && (!isNaN(item.jm_save_time))) {

            let date = new Date().getTime();    //获取当前时间
            if (item.jm_save_time == 0) {   //等于0永不过期
                return item.jm_save_value;
            } else if (item.jm_save_time + item.jm_save_startTime > date) {    //开始时间+保存时间如果大于当前时间,（未过期）就返回值，否则清空
                return item.jm_save_value;
            } else {
                localStorage.removeItem(name);
                return false;
            }


        } else {
            //如果没有设置失效时间，直接返回值
            return item;
        }
    }

}


/**
 * @function 清除localStorage
 * @method removeStorage(name)
 * @param {string} [name]  保存数据的key值,不填清空所有缓存
 * @example removeStorage("aa")
 */
const removeStorage = (name) => {
    if (name) { //有参数清除单条数据
        localStorage.removeItem(name);
    } else {    //无参数清除所有缓存数据
        localStorage.clear();
    }
}




// export { types, debounce, throttle, formatTime, timeFormat, strCut, ltrim, rtrim, trim, isMobile, goTop, ajax }  //可解构

export default { types, throttle, debounce, formatTime, timeFormat, strCut, ltrim, rtrim, trim, isMobile, goTop, ajax, goTop, setStorage, getStorage, removeStorage } //不可解构