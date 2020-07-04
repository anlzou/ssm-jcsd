package qin.com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import qin.com.common.ResponseCode;
import qin.com.common.ServerResponse;
import qin.com.entity.Teacher;
import qin.com.service.TeacherService;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
public class TeacherController {
    @Resource(name = "teacherServiceImpl")
    @Autowired
    private TeacherService teacherService;

    /**
     * 查询所有数据
     * ok
     */
    @RequestMapping("/listallTeacher")
    @ResponseBody
    public ServerResponse listall(HttpServletRequest request, HttpServletResponse response) {
        List<Teacher> teacherList = teacherService.selectAll();
        System.out.println("Teacher表查询："+teacherList);
        if (teacherList.size() > 0) {
            System.out.println("查询成功");
            return ServerResponse.createBySuccess(0, teacherList);
        } else {
            return ServerResponse.createByErrorMessage("找不到信息");
        }
    }

    /**
     * 删除选中的数据
     * ok
     */
    @RequestMapping("/deleteallTeacher")
    @ResponseBody
    public ServerResponse deleteall(String id) {
        System.out.println(id);
        String[] deleteids = id.split(",");//把客户端传送过来的字符串（一般为“1，2，3，4”）转换成数组
//        System.out.println(deleteids);
        if (deleteids != null && deleteids.length > 0) {
            System.out.println("deleteall ok!======1");
            if (teacherService.deleteByList(deleteids) > 0) {//按照列表删除
                System.out.println("deleteall ok!======2");
                return ServerResponse.createBySuccess(ResponseCode.SUCCESS.getCode(), "删除管理员成功");
            } else {
                System.out.println("删除不成功");
                return ServerResponse.createByErrorCodeMessage(ResponseCode.ERROR.getCode(), "删除数据失败");
            }
        } else {
            return ServerResponse.createByErrorCodeMessage(ResponseCode.ERROR.getCode(), "删除数据失败");
        }
    }

    /**
     * 更新
     * ok
     */
    @RequestMapping("/updateByPrimaryKeySelectiveTeacher")
    @ResponseBody
    public ServerResponse updateByPrimaryKeySelective(Teacher record) {
        Teacher teacher = new Teacher();
        teacher.setId(record.getId());//更新操作必须要有id主关键字段
        teacher.setName(record.getName());
        teacher.setPass(record.getPass());
        teacher.setPhone(record.getPhone());
        teacher.setEmail(record.getEmail());
        teacher.setQq(record.getQq());
        teacher.setDepartId(record.getDepartId());
        teacher.setDepartName(record.getDepartName());
        teacher.setQuestion(record.getQuestion());
        teacher.setAnswer(record.getAnswer());
        teacher.setCreateTime(record.getCreateTime());
        teacher.setUpdateTime(record.getUpdateTime());
        teacher.setUtype(record.getUtype());
        System.out.println("Publisher更新数据==" + teacher.getId() + "==" + teacher.getName());
        if (teacherService.updateByPrimaryKey(teacher) > 0) {
            System.out.println("Publisher表更新成功");
            return ServerResponse.createBySuccess("更新管理数据成功", record);
        } else {
            return ServerResponse.createByErrorMessage("更新管理数据失败");
        }
    }

    /**
     * 插入数据
     * ok
     */
    @RequestMapping("/insertSelectiveTeacher")
    @ResponseBody
    public ServerResponse insertSelective(Teacher record) {
        Teacher teacher = new Teacher();
        teacher.setId(record.getId());//更新操作必须要有id主关键字段
        teacher.setName(record.getName());
        teacher.setPass(record.getPass());
        teacher.setPhone(record.getPhone());
        teacher.setEmail(record.getEmail());
        teacher.setQq(record.getQq());
        teacher.setDepartId(record.getDepartId());
        teacher.setDepartName(record.getDepartName());
        teacher.setQuestion(record.getQuestion());
        teacher.setAnswer(record.getAnswer());
        teacher.setCreateTime(record.getCreateTime());
        teacher.setUpdateTime(record.getUpdateTime());
        teacher.setUtype(record.getUtype());
        if (teacherService.insert(teacher) > 0) {
            return ServerResponse.createBySuccess("添加数据成功", teacher);
        } else {
            return ServerResponse.createByErrorMessage("添加数据失败");
        }
    }
}