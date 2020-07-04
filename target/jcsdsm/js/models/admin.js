function initadmin() {
    //查询控制器
    var url_listall = "listallAdmin";
    //删除控制器
    var url_delete = "deleteallAdmin";
    //插入控制器
    var url_insert = "insertSelectiveAdmin";
    //更新控制器
    var url_update = "updateByPrimaryKeySelectiveAdmin";

    //显示信息表单
    var columns = [{
        field: 'id',
        title: '编号',
        width: 100,
        hidden: true
    }, {
        field: 'name',
        title: '管理员帐号',
        width: 200
    }, {
        field: 'pass',
        title: '管理员帐号密码',
        width: 200
    }, {
        field: 'phone',
        title: '电话',
        width: 200
    }, {
        field: 'email',
        title: '邮箱',
        width: 200
    }, {
        field: 'qq',
        title: 'qq号',
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
        '                <td>管理员帐号</td>\n' +
        '                <td><input type="text" id="name" name="name" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>管理员密码</td>\n' +
        '                <td><input type="password" id="pass" name="pass" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>管理员电话</td>\n' +
        '                <td><input type="text" id="phone" name="phone" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>管理员邮箱</td>\n' +
        '                <td><input type="text" id="email" name="email" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>管理员qq</td>\n' +
        '                <td><input type="text" id="qq" name="qq" /> </td>\n' +
        '            </tr>\n' +
        '        </table>\n' +
        '    </form>';

    //更新信息表单
    var str_update = ' <form id="ff" method="post">\n' +
        '        <table>\n' +
        '            <tr>\n' +
        '                <td>管理员帐号</td>\n' +
        '                <td><input type="text" id="name" name="name" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>管理员密码</td>\n' +
        '                <td><input type="password" id="pass" name="pass" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>管理员电话</td>\n' +
        '                <td><input type="text" id="phone" name="phone" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>管理员邮箱</td>\n' +
        '                <td><input type="text" id="email" name="email" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>管理员qq</td>\n' +
        '                <td><input type="text" id="qq" name="qq" /><input type="hidden" id="id" name="id" /> </td>\n' +
        '            </tr>\n' +
        '        </table>\n' +
        '    </form>';

    var title_insert = "插入管理员信息";
    var title_update = "更新管理员信息";

    //调用动态功能
    initmain(url_listall, url_delete, columns, url_insert, str_insert, title_insert, url_update, str_update, title_update);
}