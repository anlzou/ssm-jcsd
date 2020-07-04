function initjc() {
    /*判断页面中是否存在id等于dg的元素，若存在则进行删除*/
    if ($("#dg") != null) {
        $("#dg").remove(); //删除id="dg"的元素
    }
    $("#tab").empty();//把页面中id="tab"的元素内容清空
    /*在页面中id="tab"元素中添加一个id="dg"的div元素*/
    $("#tab").append("<div id='dg'></div>");
    /*下面采用jquery easyui的datagrie控制进行显示管理员的列表*/
    $('#dg').datagrid({
        //后台处理程序的地址
        url: 'listallJc',
        pagination: true,//显示分页工具
        pageNumber: 1,//表示显示第几页，第一页
        pageSize: 10,//表示每页显示的记录个数
        pageList: [10, 20, 30, 40, 50],//第一页显示记录个数列表
        toolbar: [{//显示工具栏
            text: '添加',
            iconCls: 'icon-add',
            handler: function () {
                jcinsert();
            }
        }, '-', {
            text: '更新',
            iconCls: 'icon-edit',
            handler: function () {
                var row = $('#dg').datagrid("getSelections");//获取用户选择的数据行
                if (row && row.length > 0) {
                    if (row.length > 1) {
                        alert("一次只能更新一条记录");
                        return false;
                    } else {
                        jcupdate(row);
                    }
                } else {
                    alert("请选择你要更新数据行，才能进行更新操作");
                }
            }
        }, '-', {
            text: '删除',
            iconCls: 'icon-remove',
            handler: function () {
                var row = $('#dg').datagrid("getSelections");//获取用户选择的数据行
                if (row && row.length > 0) { //判断用户是否选择了要进行删除的数据行
                    if (row.length >= 1) { //若row.length大于等于1，则表选择了要删除的数据行。
                        var strid = "";
                        //下面是遍历用户所选择的数据行所对应的id主关键字，
                        $(row).each(function (index, item) {
                            strid += item["id"] + ",";//把用户选择的数据行的id保串连起来构成如“1，2，3，”这里表示用户选择了id为1，2，3的数据行
                        });
                        strid = strid.substring(0, strid.length - 1);//把数据行最后的分号去掉
                        $.messager.confirm('确认', '您确认想要删除记录吗？', function (r) {
                            if (r) { //若确认要删除，则采用异步方式把要删除的数据行对应的id串传送给后台进行处理
                                $.ajax({
                                    type: "post",
                                    url: "deleteallJc",//后台处理程序
                                    data: {
                                        id: strid //要删除数据行对应的id字符串
                                    },
                                    success: function (data) {
                                        $('#dg').datagrid("reload"); //若删除成功则重新加载数据表的数据
                                    }
                                });
                            }
                        });
                    } else {
                        alert("你没有选择数据行，所以不能进行删除操作");
                        return false;
                    }
                }
            }
        }, '-', {
            text: '导入数据',
            iconCls: 'icon-help',
            handler: function () {
                alert('导入数据按钮')
            }
        }, '-', {
            text: '导出数据',
            iconCls: 'icon-help',
            handler: function () {
                alert("导出数据");
            }
        }, '-', {
            text: '搜索',
            iconCls: 'icon-search',
            handler: function () {
                alert("搜索数据");
            }
        }],
        columns: [[{
            field: 'id',
            title: '编号',
            width: 100,
            hidden: true
        }, {
            field: 'name',
            title: '教材名称',
            width: 200
        }, {
            field: 'isbn',
            title: '教材书号',
            width: 200
        }, {
            field: 'author',
            title: '作者',
            width: 200
        }, {
            field: 'publisherId',
            title: '出版社',
            width: 200
        }, {
            field: 'price',
            title: '价格',
            width: 200
        }, {
            field: 'pubdate',
            title: '开课时间',
            width: 200
        }, {
            field: 'categoryId',
            title: '专业编号',
            width: 200
        }, {
            field: 'majorText',
            title: '使用专业',
            width: 200
        }, {
            field: 'classseId',
            title: '班级编号',
            width: 200
        }, {
            field: 'classseText',
            title: '使用班级',
            width: 200
        }, {
            field: 'levelsId',
            title: '层次',
            width: 200
        }, {
            field: 'courseId',
            title: '课程编号',
            width: 200
        }, {
            field: 'courseName',
            title: '课程名称',
            width: 200
        }, {
            field: 'teacherUse',
            title: '教师用量',
            width: 200
        }, {
            field: 'yesorno',
            title: '是否审核通过',
            width: 200
        }, {
            field: 'sdDatetime',
            title: '申订日期',
            width: 200
        }, {
            field: 'sdTeacher',
            title: '申订教师编号',
            width: 200
        }, {
            field: 'kOverview',
            title: 'a到J不用写原因',
            width: 200
        }, {
            field: 'departOpinion',
            title: '部门审核意见',
            width: 200
        }, {
            field: 'companyOption',
            title: '单位审核意见',
            width: 200
        }, {
            field: 'createTime',
            title: '创建日期',
            width: 200
        }, {
            field: 'updateTime',
            title: '修改日期',
            width: 200
        }]]
    });
}

function jcinsert() {
    /*判断页面中是否存在id="dd"元素，若存在则进行删除*/
    if ($("#dd") != null) {
        $("#dd").remove();
    }
    /*在页面中id="tab"的元素中添加一个id="dd"的div元素*/
    $("#tab").append("<div id='dd'></div>");
    /*以页面中的id="dd"的元素作为对话框的内容*/
    $('#dd').dialog({
        title: '添加课程安排信息',//对话框的标题
        width: 300,//对话框的宽度
        closed: false,
        cache: false,//不允许有缓冲
        modal: true,//采用模式，即必须关闭对话框后才能做别的操作
        buttons: [{ //为对话框添加底部按钮
            text: '保存',
            handler: function () {
                $('#ff').form('submit', {
                    url: "insertSelectiveJc",
                    onSubmit: function () {
                        //在这里编写表单字段验证
                    },
                    success: function (data) {
                        $('#dd').dialog("close");//关闭当前添加窗口
                        $('#dg').datagrid("reload");//重新装入表格的内容
                    }
                });
            }
        }, {
            text: '关闭',
            handler: function () {
                $('#dd').dialog("close");
            }
        }]
    });
    //创建添加管理员信息表单
    var str = ' <form id="ff" method="post">\n' +
        '        <table>\n' +
        '            <tr>\n' +
        '                <td>教材名称</td>\n' +
        '                <td><input type="text" id="name" name="name" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>教材书号</td>\n' +
        '                <td><input type="text" id="isbn" name="isbn" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>作者</td>\n' +
        '                <td><input type="text" id="author" name="author" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>出版社</td>\n' +
        '                <td><input type="number" id="publisherId" name="publisherId" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>价格</td>\n' +
        '                <td><input type="number" id="price" name="price" /> </td>\n' +
        '            </tr>\n' +
        // '            <tr>\n' +
        // '                <td>开课时间</td>\n' +
        // '                <td><input type="date" id="pubdate" name="pubdate" /> </td>\n' +
        // '            </tr>\n' +
        '            <tr>\n' +
        '                <td>专业编号</td>\n' +
        '                <td><input type="number" id="categoryId" name="categoryId" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>使用专业</td>\n' +
        '                <td><input type="text" id="majorText" name="majorText" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>班级编号</td>\n' +
        '                <td><input type="number" id="classseId" name="classseId" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>使用班级</td>\n' +
        '                <td><input type="text" id="classseText" name="classseText" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>层次</td>\n' +
        '                <td><input type="number" id="levelsId" name="levelsId" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>课程编号</td>\n' +
        '                <td><input type="number" id="courseId" name="courseId" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>课程名称</td>\n' +
        '                <td><input type="text" id="courseName" name="courseName" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>教师用量</td>\n' +
        '                <td><input type="number" id="teacherUse" name="teacherUse" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>是否审核通过</td>\n' +
        '                <td><input type="number" id="yesorno" name="yesorno" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>申订日期</td>\n' +
        '                <td><input type="text" id="sdDatetime" name="sdDatetime" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>申订教师编号</td>\n' +
        '                <td><input type="number" id="sdTeacher" name="sdTeacher" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>a到J不用写原因</td>\n' +
        '                <td><input type="text" id="kOverview" name="kOverview" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>部门审核意见</td>\n' +
        '                <td><input type="text" id="departOpinion" name="departOpinion" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>单位审核意见</td>\n' +
        '                <td><input type="text" id="companyOption" name="companyOption" /> </td>\n' +
        '            </tr>\n' +
        '        </table>\n' +
        '    </form>';

    //把表单添加到对话框中
    $("#dd").html(str);
}

function jcupdate(row) {
    /*判断页面中是否存在id="dd"元素，若存在则进行删除*/
    if ($("#dd") != null) {
        $("#dd").remove();
    }
    /*在页面中id="tab"的元素中添加一个id="dd"的div元素*/
    $("#tab").append("<div id='dd'></div>");
    /*以页面中的id="dd"的元素作为对话框的内容*/
    $('#dd').dialog({
        title: '更课程安排信息',//对话框的标题
        width: 300,//对话框的宽度
        closed: false,
        cache: false,//不允许有缓冲
        modal: true,//采用模式，即必须关闭对话框后才能做别的操作
        buttons: [{ //为对话框添加底部按钮
            text: '保存',
            handler: function () {
                $('#ff').form('submit', {
                    url: "updateByPrimaryKeySelectiveJc",
                    onSubmit: function () {
                        //在这里编写表单字段验证
                    },
                    success: function (data) {
                        $('#dd').dialog("close");//关闭当前添加窗口
                        $('#dg').datagrid("reload");//重新装入表格的内容
                    }
                });
            }
        }, {
            text: '关闭',
            handler: function () {
                $('#dd').dialog("close");
            }
        }]
    });

    //创建添加课程安排表单
    var str = ' <form id="ff" method="post">\n' +
        '        <table>\n' +
        '            <tr>\n' +
        '                <td>教材名称</td>\n' +
        '                <td><input type="text" id="name" name="name" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>教材书号</td>\n' +
        '                <td><input type="text" id="isbn" name="isbn" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>作者</td>\n' +
        '                <td><input type="text" id="author" name="author" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>出版社</td>\n' +
        '                <td><input type="number" id="publisherId" name="publisherId" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>价格</td>\n' +
        '                <td><input type="number" id="price" name="price" /> </td>\n' +
        '            </tr>\n' +
        // '            <tr>\n' +
        // '                <td>开课时间</td>\n' +
        // '                <td><input type="datetime-local" id="pubdate" name="pubdate" /> </td>\n' +
        // '            </tr>\n' +
        '            <tr>\n' +
        '                <td>专业编号</td>\n' +
        '                <td><input type="number" id="categoryId" name="categoryId" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>使用专业</td>\n' +
        '                <td><input type="text" id="majorText" name="majorText" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>班级编号</td>\n' +
        '                <td><input type="number" id="classseId" name="classseId" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>使用班级</td>\n' +
        '                <td><input type="text" id="classseText" name="classseText" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>层次</td>\n' +
        '                <td><input type="number" id="levelsId" name="levelsId" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>课程编号</td>\n' +
        '                <td><input type="number" id="courseId" name="courseId" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>课程名称</td>\n' +
        '                <td><input type="text" id="courseName" name="courseName" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>教师用量</td>\n' +
        '                <td><input type="number" id="teacherUse" name="teacherUse" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>是否审核通过</td>\n' +
        '                <td><input type="number" id="yesorno" name="yesorno" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>申订日期</td>\n' +
        '                <td><input type="text" id="sdDatetime" name="sdDatetime" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>申订教师编号</td>\n' +
        '                <td><input type="number" id="sdTeacher" name="sdTeacher" /></td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>a到J不用写原因</td>\n' +
        '                <td><input type="text" id="kOverview" name="kOverview" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>部门审核意见</td>\n' +
        '                <td><input type="text" id="departOpinion" name="departOpinion" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>单位审核意见</td>\n' +
        '                <td><input type="text" id="companyOption" name="companyOption" /> <input type="hidden" id="id" name="id" /> </td>\n' +
        '            </tr>\n' +
        '        </table>\n' +
        '    </form>';

    //把表单添加到对话框中
    $("#dd").html(str);
    $('#ff').form('load', row[0]);//为表单加载数据。
}