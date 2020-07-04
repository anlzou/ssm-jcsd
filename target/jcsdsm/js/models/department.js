function initdepartment() {
    //查询控制器
    var url_listall = "listallDepartment";
    //删除控制器
    var url_delete = "deleteallDepartment";
    //插入控制器
    var url_insert = "insertSelectiveDepartment";
    //更新控制器
    var url_update = "updateByPrimaryKeySelectiveDepartment";

    //显示信息表单
    var columns = [{
        field: 'id',
        title: '编号',
        width: 100,
        hidden: true
    }, {
        field: 'name',
        title: '部门名称',
        width: 200
    }, {
        field: 'dManager',
        title: '部门负责人',
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
        '                <td>部门名称</td>\n' +
        '                <td><input type="text" id="name" name="name" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>部门负责人</td>\n' +
        '                <td><input type="text" id="dManager" name="dManager" /> </td>\n' +
        '            </tr>\n' +
        '        </table>\n' +
        '    </form>';

    //更新信息表单
    var str_update = ' <form id="ff" method="post">\n' +
        '        <table>\n' +
        '            <tr>\n' +
        '                <td>部门名称</td>\n' +
        '                <td><input type="text" id="name" name="name" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>部门负责人</td>\n' +
        '                <td><input type="text" id="dManager" name="dManager" /><input type="hidden" id="id" name="id" /></td>\n' +
        '            </tr>\n' +
        '        </table>\n' +
        '    </form>';

    //调用动态功能
    initmain(url_listall, url_delete, columns, url_insert, str_insert, url_update, str_update);
}