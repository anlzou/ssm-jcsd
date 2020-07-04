function initjc() {
    //查询控制器
    var url_listall = "listallJc";
    //删除控制器
    var url_delete = "deleteallJc";
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
    }];

    //创建信息表单
    var str_insert = ' <form id="ff" method="post">\n' +
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

    //更新信息表单
    var str_update = ' <form id="ff" method="post">\n' +
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

    var title_insert = "插入课程安排信息";
    var title_update = "更新课程安排信息";

    //调用动态功能
    initmain(url_listall, url_delete, columns, url_insert, str_insert, title_insert, url_update, str_update, title_update);
}