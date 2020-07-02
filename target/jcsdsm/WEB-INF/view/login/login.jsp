<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>管理员登录</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/themes/icon.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/themes/login/css/demo.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/themes/login/css/style.css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.easyui.min.js"></script>
</head>
<body style="text-align: center">
<div style="width: 500px ;margin-left:auto;margin-right:auto;margin-top:300px">
    <div class="easyui-panel" title="登录" style="width:100%;max-width:400px;padding:30px 60px;">
        <form id="ff" method="post">
            <div style="margin-bottom:20px">
                <input class="easyui-textbox" id="name" name="name" style="width:100%"
                       data-options="label:'用户名:',required:true">
            </div>
            <div style="margin-bottom:20px">
                <input class="easyui-textbox" id="password" name="password" style="width:100%"
                       data-options="label:'密码:',required:true,validType:'password'">
            </div>
        </form>
        <div style="text-align:center;padding:5px 0">
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="submitForm()" style="width:80px">确定</a>
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="clearForm()" style="width:80px">清除</a>
        </div>
        <div style="text-align: right">
            <p><a id="to_register" href="/jcsdproject_war_exploded/register">注册</a></p>
        </div>
    </div>
</div>
<script>
    function submitForm() {
        var name = "";
        var password = "";
        $('#name').val();
        $('#password').val();
        $('#ff').form({
            url: 'selectlogin',
            data: {
                name: name, //要删除数据行对应的id字符串
                password: password
            },
            onSubmit: function () {
                // do some check
                // return false to prevent submit;
                return $(this).form('validate');
            },
            success: function (data) {
                // alert(data);
                // $.messager.alert('Info', data, 'info');
                if (data == "error") {
                    $.messager.alert('Info', '输入用户名或密码不正确<br>请重新输入', 'info');
                } else
                    self.location = data;
                // $.messager
                // alert('Info', '输入用户名或密码不正确<br>请重新输入');
            }
        });
        $('#ff').form('submit');
    }

    function clearForm() {
        $('#ff').form('clear');
    }

    // // // submit the form
    // $('#ff').submit();
</script>
</body>
</html>