function initclasse() {
    //查询控制器
    var url_listall = "listallClassse";
    //删除控制器
    var url_delete = "deleteallClassse";
    //插入控制器
    var url_insert = "insertSelectiveClassse";
    //更新控制器
    var url_update = "updateByPrimaryKeySelectiveClassse";

    //显示信息表单
    var columns = [{
        field: 'id',
        title: '编号',
        width: 100,
        hidden: true
    }, {
        field: 'name',
        title: '班级名称',
        width: 200
    }, {
        field: 'majorId',
        title: '班级专业',
        width: 200
    }, {
        field: 'majorName',
        title: '专业名称',
        width: 200
    }, {
        field: 'studentNumber',
        title: '班级学生人数',
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
        '                <td>班级名称</td>\n' +
        '                <td><input type="text" id="name" name="name" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>班级专业</td>\n' +
        '                <td><input type="number" id="majorId" name="majorId" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>专业名称</td>\n' +
        '                <td><input type="text" id="majorName" name="majorName" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>班级学生人数</td>\n' +
        '                <td><input type="number" id="studentNumber" name="studentNumber" /> </td>\n' +
        '            </tr>\n' +
        '        </table>\n' +
        '    </form>';

    //更新信息表单
    var str_update = ' <form id="ff" method="post">\n' +
        '        <table>\n' +
        '            <tr>\n' +
        '                <td>班级名称</td>\n' +
        '                <td><input type="text" id="name" name="name" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>班级专业</td>\n' +
        '                <td><input type="number" id="majorId" name="majorId" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>专业名称</td>\n' +
        '                <td><input type="text" id="majorName" name="majorName" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>班级学生人数</td>\n' +
        '                <td><input type="number" id="studentNumber" name="studentNumber" /><input type="hidden" id="id" name="id" /> </td>\n' +
        '            </tr>\n' +
        '        </table>\n' +
        '    </form>';

    //调用动态功能
    initmain(url_listall, url_delete, columns, url_insert, str_insert, url_update, str_update);
}