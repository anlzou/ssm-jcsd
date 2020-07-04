function initpublisher() {
    //查询控制器
    var url_listall = "listallPublisher";
    //删除控制器
    var url_delete = "deleteallPublisher";
    //插入控制器
    var url_insert = "insertSelectivePublisher";
    //更新控制器
    var url_update = "updateByPrimaryKeySelectivePublisher";

    //显示信息表单
    var columns = [{
        field: 'id',
        title: '编号',
        width: 100,
        hidden: true
    }, {
        field: 'name',
        title: '出版社名称',
        width: 200
    }];

    //创建信息表单
    var str_insert = ' <form id="ff" method="post">\n' +
        '        <table>\n' +
        '            <tr>\n' +
        '                <td>出版社的名称</td>\n' +
        '                <td><input type="text" id="name" name="name" /> </td>\n' +
        '            </tr>\n' +
        '        </table>\n' +
        '    </form>';

    //更新信息表单
    var str_update = ' <form id="ff" method="post">\n' +
        '        <table>\n' +
        '            <tr>\n' +
        '                <td>出版社的名称</td>\n' +
        '                <td><input type="text" id="name" name="name" /><input type="hidden" id="id" name="id" /></td>\n' +
        '            </tr>\n' +
        '        </table>\n' +
        '    </form>';

    var title_insert = "插入出版社信息";
    var title_update = "更新出版社信息";

    //调用动态功能
    initmain(url_listall, url_delete, columns, url_insert, str_insert, title_insert, url_update, str_update, title_update);
}