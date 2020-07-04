function initteacher() {
    //查询控制器
    var url_listall = "listallTeacher";
    //删除控制器
    var url_delete = "deleteallTeacher";
    //插入控制器
    var url_insert = "insertSelectiveTeacher";
    //更新控制器
    var url_update = "updateByPrimaryKeySelectiveTeacher";

    //显示信息表单
    var columns = [{
        field: 'id',
        title: '编号',
        width: 100,
        hidden: true
    }, {
        field: 'name',
        title: '教师名称',
        width: 200
    }, {
        field: 'pass',
        title: '密码',
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
        field: 'departId',
        title: '所在部门',
        width: 200
    }, {
        field: 'departName',
        title: '所在部门的名称',
        width: 200
    }, {
        field: 'question',
        title: '找回密码的问题',
        width: 200
    }, {
        field: 'answer',
        title: '找回密码答案',
        width: 200
    }, {
        field: 'createTime',
        title: '创建时间',
        width: 200
    }, {
        field: 'updateTime',
        title: '最后更新时间',
        width: 200
    }, {
        field: 'utype',
        title: '0代表普通教师，1代表教研室主任，2代表单位负责人',
        width: 200
    }];

    //创建信息表单
    var str_insert = ' <form id="ff" method="post">\n' +
        '        <table>\n' +
        '            <tr>\n' +
        '                <td>教师名称</td>\n' +
        '                <td><input type="text" id="name" name="name" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>账号密码</td>\n' +
        '                <td><input type="password" id="pass" name="pass" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>电话</td>\n' +
        '                <td><input type="text" id="phone" name="phone" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>邮箱</td>\n' +
        '                <td><input type="text" id="email" name="email" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>qq</td>\n' +
        '                <td><input type="text" id="qq" name="qq" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>所在部门</td>\n' +
        '                <td><input type="number" id="departId" name="departId" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>所在部门的名称</td>\n' +
        '                <td><input type="text" id="departName" name="departName" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>找回密码的问题</td>\n' +
        '                <td><input type="text" id="question" name="question" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>找回密码答案</td>\n' +
        '                <td><input type="text" id="answer" name="answer" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>0代表普通教师，1代表教研室主任，2代表单位负责人</td>\n' +
        '                <td><input type="number" id="utype" name="utype" /> </td>\n' +
        '            </tr>\n' +
        '        </table>\n' +
        '    </form>';

    //更新信息表单
    var str_update = ' <form id="ff" method="post">\n' +
        '        <table>\n' +
        '            <tr>\n' +
        '                <td>教师名称</td>\n' +
        '                <td><input type="text" id="name" name="name" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>账号密码</td>\n' +
        '                <td><input type="password" id="pass" name="pass" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>电话</td>\n' +
        '                <td><input type="text" id="phone" name="phone" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>邮箱</td>\n' +
        '                <td><input type="text" id="email" name="email" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>qq</td>\n' +
        '                <td><input type="text" id="qq" name="qq" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>所在部门</td>\n' +
        '                <td><input type="number" id="departId" name="departId" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>所在部门的名称</td>\n' +
        '                <td><input type="text" id="departName" name="departName" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>找回密码的问题</td>\n' +
        '                <td><input type="text" id="question" name="question" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>找回密码答案</td>\n' +
        '                <td><input type="text" id="answer" name="answer" /> </td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>0代表普通教师，1代表教研室主任，2代表单位负责人</td>\n' +
        '                <td><input type="number" id="utype" name="utype" /> <input type="hidden" id="id" name="id" /></td>\n' +
        '            </tr>\n' +
        '        </table>\n' +
        '    </form>';

    var title_insert = "插入教师信息信息";
    var title_update = "更新教师信息信息";

    //调用动态功能
    initmain(url_listall, url_delete, columns, url_insert, str_insert, title_insert, url_update, str_update, title_update);
}