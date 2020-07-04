function initpublisher() {
    var listall_url = 'listallPublisher';
    var delete_url = "deleteallPublisher"
    var columns = [{
        field: 'id',
        title: '编号',
        width: 100,
        hidden: true
    }, {
        field: 'name',
        title: '专业名称',
        width: 200
    }];

    var insert_url = "insertSelectivePublisher";
    //创建添加管理员信息表单
    var str1 = ' <form id="ff" method="post">\n' +
        '        <table>\n' +
        '            <tr>\n' +
        '                <td>出版社的名称</td>\n' +
        '                <td><input type="text" id="name" name="name" /> </td>\n' +
        '            </tr>\n' +
        '        </table>\n' +
        '    </form>';

    var update_url = "updateByPrimaryKeySelectivePublisher";
    //创建添加课程安排表单
    var str2 = ' <form id="ff" method="post">\n' +
        '        <table>\n' +
        '            <tr>\n' +
        '                <td>出版社的名称</td>\n' +
        '                <td><input type="text" id="name" name="name" /><input type="hidden" id="id" name="id" /></td>\n' +
        '            </tr>\n' +
        '        </table>\n' +
        '    </form>';

    //调用功能
    initmain(listall_url, delete_url, columns, insert_url, str1, update_url, str2);
}