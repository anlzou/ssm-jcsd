function initcourse() {
    //查询控制器
    var url_listall = "listallCourse";
    //删除控制器
    var url_delete = "deleteallCourse";
    //插入控制器
    var url_insert = "insertSelectiveCourse";
    //更新控制器
    var url_update = "updateByPrimaryKeySelectiveCourse";

    //显示信息表单
    var columns = [{
        field: 'id',
        title: '编号',
        width: 100,
        hidden: true
    }, {
        field: 'code',
        title: '课程代码',
        width: 200
    }, {
        field: 'name',
        title: '课程名称',
        width: 200
    }, {
        field: 'period',
        title: '课时',
        width: 200
    }, {
        field: 'nature',
        title: '课程类型',
        width: 200
    }, {
        field: 'createTime',
        title: '创建日期',
        width: 200
    }, {
        field: 'updateTime',
        title: '修改日期',
        width: 200
    }];

    //创建信息表单
    var str_insert = ' <form id="ff" method="post">\n' +
        '        <table>\n' +
        '            <tr>\n' +
        '                <td>课程代码</td>\n' +
        '                <td><input type="text" id="code" name="code" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>课程名称</td>\n' +
        '                <td><input type="text" id="name" name="name" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>课时</td>\n' +
        '                <td><input type="number" id="period" name="period" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>课程类型</td>\n' +
        '                <td><input type="text" id="nature" name="nature" /> </td>\n' +
        '            </tr>\n' +
        '        </table>\n' +
        '    </form>';

    //更新信息表单
    var str_update = ' <form id="ff" method="post">\n' +
        '        <table>\n' +
        '            <tr>\n' +
        '                <td>课程代码</td>\n' +
        '                <td><input type="text" id="code" name="code" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>课程名称</td>\n' +
        '                <td><input type="text" id="name" name="name" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>课时</td>\n' +
        '                <td><input type="number" id="period" name="period" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>课程类型</td>\n' +
        '                <td><input type="text" id="nature" name="nature" /><input type="hidden" id="id" name="id" /></td>\n' +
        '            </tr>\n' +
        '        </table>\n' +
        '    </form>';

    var title_insert = "插入课程信息";
    var title_update = "更新课程信息";

    //调用动态功能
    initmain(url_listall, url_delete, columns, url_insert, str_insert, title_insert, url_update, str_update, title_update);
}