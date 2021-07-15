<!-- 
参考案例
vue3引入tinymce（https://www.cnblogs.com/huihuihero/p/13877589.html）
-->
<template>
  <div class="tinymce-box">
    <Editor v-model="mvalue" :init="init" :disabled="disabled"></Editor>
  </div>
</template>

<script setup>
//引入tinymce编辑器
import Editor from "@tinymce/tinymce-vue";

//引入node_modules里的tinymce相关文件文件
import tinymce from "tinymce/tinymce"; //tinymce默认hidden，不引入则不显示编辑器
import "tinymce/themes/silver"; //编辑器主题，不引入则报错
import "tinymce/icons/default"; //引入编辑器图标icon，不引入则不显示对应图标

// 引入编辑器插件（基本免费插件都在这儿了）
import "tinymce/plugins/advlist"; //高级列表
import "tinymce/plugins/anchor"; //锚点
import "tinymce/plugins/autolink"; //自动链接
import "tinymce/plugins/autoresize"; //编辑器高度自适应,注：plugins里引入此插件时，Init里设置的height将失效
import "tinymce/plugins/autosave"; //自动存稿
import "tinymce/plugins/charmap"; //特殊字符
import "tinymce/plugins/code"; //编辑源码
import "tinymce/plugins/codesample"; //代码示例
import "tinymce/plugins/directionality"; //文字方向
import "tinymce/plugins/emoticons"; //表情
import "tinymce/plugins/fullpage"; //文档属性
import "tinymce/plugins/fullscreen"; //全屏
import "tinymce/plugins/help"; //帮助
import "tinymce/plugins/hr"; //水平分割线
import "tinymce/plugins/image"; //插入编辑图片
import "tinymce/plugins/importcss"; //引入css
import "tinymce/plugins/insertdatetime"; //插入日期时间
import "tinymce/plugins/link"; //超链接
import "tinymce/plugins/lists"; //列表插件
import "tinymce/plugins/media"; //插入编辑媒体
import "tinymce/plugins/nonbreaking"; //插入不间断空格
import "tinymce/plugins/pagebreak"; //插入分页符
import "tinymce/plugins/paste"; //粘贴插件
import "tinymce/plugins/preview"; //预览
import "tinymce/plugins/print"; //打印
import "tinymce/plugins/quickbars"; //快速工具栏
import "tinymce/plugins/save"; //保存
import "tinymce/plugins/searchreplace"; //查找替换
// import 'tinymce/plugins/spellchecker'  //拼写检查，暂未加入汉化，不建议使用
import "tinymce/plugins/tabfocus"; //切入切出，按tab键切出编辑器，切入页面其他输入框中
import "tinymce/plugins/table"; //表格
import "tinymce/plugins/template"; //内容模板
import "tinymce/plugins/textcolor"; //文字颜色
import "tinymce/plugins/textpattern"; //快速排版
import "tinymce/plugins/toc"; //目录生成器
import "tinymce/plugins/visualblocks"; //显示元素范围
import "tinymce/plugins/visualchars"; //显示不可见字符
import "tinymce/plugins/wordcount"; //字数统计

import {
  ref,
  reactive,
  defineProps,
  defineEmit,
  watchEffect,
  onBeforeMount,
} from "vue";

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  plugins: {
    type: [String, Array],
    default:
      "print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount textpattern autosave emoticons axupimgs indent2em",
    //
  },
  toolbar: {
    type: [String, Array],
    default: [
      "fullscreen undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | styleselect formatselect fontselect fontsizeselect",
      "bullist numlist | blockquote subscript superscript removeformat |  table image axupimgs media emoticons charmap hr pagebreak insertdatetime  selectall visualblocks searchreplace | code print preview | indent2em lineheight formatpainter",
    ],

    // default:
    //   " fullscreen undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent |  styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat |  table image axupimgs media emoticons charmap hr pagebreak insertdatetime  selectall visualblocks searchreplace | code print preview | indent2em lineheight formatpainter",
  },
});

const init = reactive({
  language_url: "/tinymce/langs/zh_CN.js", //引入语言包文件
  language: "zh_CN", //语言类型

  skin_url: "/tinymce/skins/ui/oxide", //皮肤：浅色
  // skin_url: '/tinymce/skins/ui/oxide-dark',//皮肤：暗色

  // 通过设置base_url可以解决contnet.css和emojis.js等路径报错的问题
  base_url: "/tinymce", //定义一下基础路径,部分文件迁到/public/tinymce,解决控制器报错GET http://localhost:3000//skins/content/default/content.css net::ERR_ABORTED 404 (Not Found)

  // content_style: "img {max-width:100%;}", //直接自定义可编辑区域的css样式
  // content_css: "/tinymce/skins/content/default/content.css", //以css文件方式自定义可编辑区域的css样式，css文件需自己创建并引入
  // emoticons_database_url: "/tinymce/plugins/emoticons/js/emojis.js", //表情插件无法成功加载,更改表情包文件引入路径

  //自己新增的插件
  external_plugins: {
    indent2em: "/tinymce/plugins/indent2em/plugin.js", //首行缩进
    axupimgs: "/tinymce/plugins/axupimgs/plugin.js", //多图上传
  },

  plugins: props.plugins, //插件配置
  toolbar: props.toolbar, //工具栏配置，设为false则隐藏
  // menubar: "file edit my1", //菜单栏配置，设为false则隐藏，不配置则默认显示全部菜单，也可自定义配置--查看 http://tinymce.ax-z.cn/configure/editor-appearance.php --搜索“自定义菜单”

  fontsize_formats:
    "12px 14px 16px 18px 20px 22px 24px 28px 32px 36px 48px 56px 72px", //字体大小
  font_formats:
    "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;", //字体样式
  lineheight_formats: "0.5 0.8 1 1.2 1.5 1.75 2 2.5 3 4 5", //行高配置，也可配置成"12px 14px 16px 20px"这种形式

  placeholder: "在这里输入文字", //textarea中的提示信息

  min_width: 320,
  min_height: 220,
  // max_width: "100%",
  height: 400, //注：引入autoresize插件时，此属性失效
  resize: "both", //编辑器宽高是否可变，false-否,true-高可变，'both'-宽高均可，注意引号

  branding: false, //tiny技术支持信息是否显示
  // statusbar: false,  //最下方的元素路径和字数统计那一栏是否显示
  elementpath: false, //元素路径是否显示

  // images_upload_url: '/apib/api-upload/uploadimg',  //后端处理程序的url，建议直接自定义上传函数image_upload_handler，这个就可以不用了
  // images_upload_base_path: '/demo',  //相对基本路径--关于图片上传建议查看--http://tinymce.ax-z.cn/general/upload-images.php
  paste_data_images: true, //图片是否可粘贴
  //此处为图片上传处理函数
  images_upload_handler: (blobInfo, success, failure) => {
    // 这里用base64的图片形式上传图片,包括多图上传也是
    let reader = new FileReader(); //本地预览
    reader.readAsDataURL(blobInfo.blob());
    reader.onloadend = function () {
      const imgbase64 = reader.result;
      success(imgbase64);
    };
  },

  file_picker_types: "file image media", //file image media分别对应三个类型文件的上传：link插件，image和axupimgs插件，media插件。想屏蔽某个插件的上传就去掉对应的参数
  // 文件上传处理函数
  file_picker_callback: function (callback, value, meta) {
    // 使用案例http://tinymce.ax-z.cn/general/upload-images.php
    // meta.filetype  //根据这个判断点击的是什么file image media

    let filetype =
      ".pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .mp3, .mp4, .jpg"; //限制文件的上传类型
    let inputElem = document.createElement("input"); //创建文件选择
    inputElem.setAttribute("type", "file");
    inputElem.setAttribute("accept", filetype);
    inputElem.click();
    inputElem.onchange = () => {
      let file = inputElem.files[0]; //获取文件信息

      // 官方，所有都转成base64文件流
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        // Note: Now we need to register the blob in TinyMCEs image blob
        // registry. In the next release this part hopefully won't be
        // necessary, as we are looking to handle it internally.
        let id = "blobid" + new Date().getTime();
        let blobCache = tinymce.activeEditor.editorUpload.blobCache;
        let base64 = reader.result.split(",")[1];
        let blobInfo = blobCache.create(id, file, base64);
        blobCache.add(blobInfo);

        // call the callback and populate the Title field with the file name
        callback(blobInfo.blobUri(), { title: file.name });
      };
    };
  },
});

// 需要重新定义value的值,不然打包后会报错
const mvalue = ref(props.value);

// 子传父,定义方法
const emit = defineEmit(["update:value"]);

watchEffect(() => {
  // console.log(props.value);
  emit("update:value", mvalue.value);
});

onBeforeMount(() => {
  tinymce.init({}); //初始化
});
// tinymce.init({});
</script>

<style lang="scss">
.tinymce-box .tox-tinymce {
  max-width: 100%;
}
</style>
