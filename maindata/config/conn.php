<?php
// 禁止用户直接从浏览器输入地址直接访问php的方法文件
if ($_SERVER['HTTP_REFERER'] == "") {
    // 方法一，跳转
    // $fromurl = "/datas"; //跳转这个地址。
    // header("Location:" . $fromurl);      //重定向跳转到index.php这个文件

    // 方法二，直接输出禁止访问
    // die("禁止访问");    //注释这行就能直接访问了
}

$servername = "127.0.0.1";
$username = "root";
$password = "root";
$dbname = "1000";
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset('utf8');

// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

function dump($a)
{
    echo '<pre>';
    var_dump($a);
    echo '</pre>';
}
