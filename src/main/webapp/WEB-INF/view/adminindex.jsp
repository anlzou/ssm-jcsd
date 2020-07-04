<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%--<%@page isELIgnored="false"%>--%>
<html>
<head>
    <title>管理员的管理页面</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/themes/icon.css">
    <%--下面三个js文件必须是按顺序进行，不能搞乱顺序--%>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/easyui-lang-zh_CN.js"></script>
    <%--  各个模块的动态功能  --%>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/models/main.js"></script>
    <%--  各个模块变量  --%>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/models/admin.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/models/category.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/models/classse.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/models/course.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/models/department.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/models/jc.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/models/levels.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/models/major.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/models/publisher.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/models/teacher.js"></script>

    <script type="text/javascript">
        $(function () {
            /*jquery easyui的代码在这里写*/
            $('#tt').tree({
                onClick : function(node) {
                    /*单击导航栏中的管理员列表结点*/
                    if(node.id == "adminlistall"){
                        /*单击管理员列表时把中间区域的标题设置为管理管理*/
                        $(".layout-panel-center .panel-title").text("管理员管理");
                        //动态加js文件
                        if(typeof(initadmin) !="function"){
                            $.getScript("${pageContext.request.contextPath}/js/models/admin.js",function(){
                                initadmin();
                            })
                        }else{
                            initadmin();
                        }
                    }
                    /*单击导航栏中的单位信息列表结点*/
                    if (node.id == "departmentlist") {
                        /*单击单位列表时把中间区域的标题设置为单位信息列表*/
                        $(".layout-panel-center .panel-title").text("单位信息列表");
                        //动态加js文件
                        if(typeof(initdepartment) !="function"){
                            $.getScript("${pageContext.request.contextPath}/js/models/department.js",function(){
                                initdepartment();
                            })
                        }else{
                            initdepartment();
                        }
                    }
                    /*单击导航栏中的专业信息列表结点*/
                    if (node.id == "categorylist") {
                        /*单击专业列表时把中间区域的标题设置为管理管理*/
                        $(".layout-panel-center .panel-title").text("教材类别信息列表");
                        //动态加js文件
                        if(typeof(initcategory) !="function"){
                            $.getScript("${pageContext.request.contextPath}/js/models/category.js",function(){
                                initcategory();
                            })
                        }else{
                            initcategory();
                        }
                    }

                    /*单击导航栏中的班级信息列表结点*/
                    if (node.id == "classselist") {
                        /*单击班级列表时把中间区域的标题设置为班级信息列表*/
                        $(".layout-panel-center .panel-title").text("班级信息列表");
                        //动态加js文件
                        if(typeof(initclasse()) !="function"){
                            $.getScript("${pageContext.request.contextPath}/js/models/classse.js",function(){
                                initclasse();
                            })
                        }else{
                            initclasse();
                        }
                    }

                    /*单击导航栏中的教师信息列表结点*/
                    if (node.id == "teacherlist") {
                        /*单击教师信息列表时把中间区域的标题设置为信息列表*/
                        $(".layout-panel-center .panel-title").text("教师信息列表");
                        //动态加js文件
                        if(typeof(initteacher()) !="function"){
                            $.getScript("${pageContext.request.contextPath}/js/models/teacher.js",function(){
                                initteacher();
                            })
                        }else{
                            initteacher();
                        }
                    }

                    /*单击导航栏中的层次信息列表结点*/
                    if (node.id == "levelslist") {
                        /*单击教材层次列表列表时把中间区域的标题设置为教材层次列表*/
                        $(".layout-panel-center .panel-title").text("教材层次列表");
                        //动态加js文件
                        if(typeof(initlevels) !="function"){
                            $.getScript("${pageContext.request.contextPath}/js/models/levels.js",function(){
                                initlevels();
                            })
                        }else{
                            initlevels();
                        }
                    }

                    /*单击导航栏中的类别信息列表结点*/
                    if (node.id == "majorlist") {
                        /*单击教材类别信息列表时把中间区域的标题设置为教材类别信息列表*/
                        $(".layout-panel-center .panel-title").text("专业信息列表");
                        //动态加js文件
                        if(typeof(initmajor) !="function"){
                            $.getScript("${pageContext.request.contextPath}/js/models/major.js",function(){
                                initmajor();
                            })
                        }else{
                            initmajor();
                        }
                    }

                    /*单击导航栏中的出版社信息列表结点*/
                    if (node.id == "publisherlist") {
                        /*单击出版社信息列表时把中间区域的标题设置为出版社信息列表*/
                        $(".layout-panel-center .panel-title").text("出版社信息列表");
                        //动态加js文件
                        if(typeof(initpublisher) !="function"){
                            $.getScript("${pageContext.request.contextPath}/js/models/publisher.js",function(){
                                initpublisher();
                            })
                        }else{
                            initpublisher();
                        }
                    }

                    /*单击导航栏中的课程信息列表结点*/
                    if (node.id == "courselist") {
                        /*单击课程信息列表时把中间区域的标题设置为课程信息列表*/
                        $(".layout-panel-center .panel-title").text("课程信息列表");
                        //动态加js文件
                        if(typeof(initcourse()) !="function"){
                            $.getScript("${pageContext.request.contextPath}/js/models/course.js",function(){
                                initcourse();
                            })
                        }else{
                            initcourse();
                        }
                    }

                    /*单击导航栏中的课程安排信息列表结点*/
                    if (node.id == "kclist") {
                        /*单击课程安排信息列表时把中间区域的标题设置为程信息列表课程安排信息列表*/
                        $(".layout-panel-center .panel-title").text("课程安排信息列表");
                    }

                    /*单击导航栏中的教材征订信息列表结点*/
                    if (node.id == "jclist") {
                        /*单击教材征订信息列表时把中间区域的标题设置为教材征订信息列表*/
                        $(".layout-panel-center .panel-title").text("课程安排信息列表");
                        //动态加js文件
                        if(typeof(initjc) !="function"){
                            $.getScript("${pageContext.request.contextPath}/js/models/jc.js",function(){
                                initjc();
                            })
                        }else{
                            initjc();
                        }
                    }

                    /*单击导航栏中的教材征订信息列表结点*/
                    if (node.id == "adminlist") {
                        /*单击教材征订信息列表时把中间区域的标题设置为教材征订信息列表*/
                        $(".layout-panel-center .panel-title").text("修改信息列表");
                    }

                    /*单击导航栏中的教材征订信息列表结点*/
                    if (node.id == "exitlist") {
                        /*单击教材征订信息列表时把中间区域的标题设置为教材征订信息列表*/
                        $(".layout-panel-center .panel-title").text("退出系统");
                        self.location = "/jcsdproject_war_exploded/login"
                    }
                }
            });
        });
    </script>
</head>

    <body class="easyui-layout">
    <%--这是北边的区域用于显示系统的主标题--%>
    <div data-options="region:'north',split:true"
         style="mapping-left:10px; height:100px;font-size:46px;text-align: center;">基于ssm教材征订系统设计与应用
    </div>

    <%--这是南边的区域用于显示系统的版权相关的信息--%>
    <div data-options="region:'south',split:true" style="height:100px; text-align: center">
        <p>专业：软件工程&nbsp;&nbsp;&nbsp;&nbsp;班级：软件172&nbsp;&nbsp;&nbsp;&nbsp;学号：2017107628&nbsp;&nbsp;&nbsp;&nbsp;姓名：农安作</p>
    </div>

    <!-- 布局中的东边区域去掉    <div data-options="region:'east',iconCls:'icon-reload',title:'East',split:true" style="width:100px;"></div>    -->
    <%--这是西边的区域用于作为系统的侧边导航--%>
    <div data-options="region:'west',title:'管理员操作导航',split:true" style="width:210px;">
        <%--下边的无序列表是构成我们的树型导航--%>
        <ul id="tt" class="easyui-tree">
            <li>
                <span>管理员管理</span>
                <ul>
                    <li id="adminlistall">
                        <span>管理员信息列表</span>
                    </li>
                </ul>
            </li>

            <li>
                <span style="padding: 1px">基本数据管理</span>
                <ul>
                    <li id="departmentlist">
                        <span>单位信息列表</span>
                    </li>
                    <li id="majorlist">
                        <span>专业信息列表</span>
                    </li>
                    <li id="classselist">
                        <span>班级信息列表</span>
                    </li>
                    <li id="teacherlist">
                        <span>教师信息列表</span>
                    </li>
                    <li id="levelslist">
                        <span>教材层次信息列表</span>
                    </li>
                    <li id="categorylist">
                        <span>教材类别信息列表</span>
                    </li>
                    <li id="publisherlist">
                        <span>出版社信息列表</span>
                    </li>
                </ul>
            </li>
            <li>
                <span>课程管理</span>
                <ul>
                    <li id="courselist">
                        <span>课程信息列表</span>
                    </li>
                    <li id="jclist">
                        <span>课程安排信息列表</span>
                    </li>
                </ul>
            </li>
            <li>
                <span>个人信息管理</span>
                <ul>
<%--                    <li id="adminlist">--%>
<%--                        <span>修改信息列表</span>--%>
<%--                    </li>--%>
                    <li id="exitlist">
                        <span>退出系统</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>

    <%--这是中间区域用于显示我们操作中心--%>
    <div data-options="region:'center',title:'工作区域'" style="padding:5px;background:#eee;">
        <%--显示区域--%>
        <div id="tab">
            <p>
                系统功能：<br/>
                1. 完成所有模块功能。<br/>
                2. 控制器访问数据库权限设置，需要先注册&登录。
            </p>
        </div>
    </div>
</body>
</html>