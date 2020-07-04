package qin.com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import qin.com.common.Logging;
import qin.com.common.ResponseCode;
import qin.com.common.ServerResponse;
import qin.com.entity.Classse;
import qin.com.service.ClassesService;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
public class ClassseController {
    @Resource(name = "classesServiceImpl")
    @Autowired
    private ClassesService classesService;

    /**
     * 查询所有数据
     * ok
     */
    @RequestMapping("/listallClassse")
    @ResponseBody
    public List<Classse> listall(HttpServletRequest request, HttpServletResponse response) {
        if (Logging.logging == 1)
            return classesService.selectAll();
        return null;
    }

    /**
     * 删除选中的数据
     * ok
     */
    @RequestMapping("/deleteallClassse")
    @ResponseBody
    public ServerResponse deleteall(String id) {
        System.out.println(id);
        String[] deleteids = id.split(",");//把客户端传送过来的字符串（一般为“1，2，3，4”）转换成数组
//        System.out.println(deleteids);
        if (deleteids != null && deleteids.length > 0) {
            System.out.println("deleteall ok!======1");
            if (Logging.logging == 1 && classesService.deleteByList(deleteids) > 0) {//按照列表删除
                System.out.println("deleteall ok!======2");
                return ServerResponse.createBySuccess(ResponseCode.SUCCESS.getCode(), "删除班级信息成功");
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
    @RequestMapping("/updateByPrimaryKeySelectiveClassse")
    @ResponseBody
    public ServerResponse updateByPrimaryKeySelective(Classse record) {
        Classse classse = new Classse();
        classse.setId(record.getId());//更新操作必须要有id主关键字段
        classse.setName(record.getName());
        classse.setMajorId(record.getMajorId());
        classse.setMajorName(record.getMajorName());
        classse.setStudentNumber(record.getStudentNumber());
        System.out.println("Classse更新数据==" + classse.getId() + "==" + classse.getName());
        if (Logging.logging == 1 && classesService.updateByPrimaryKey(classse) > 0) {
            System.out.println("Classse表更新成功");
            return ServerResponse.createBySuccess("更新管理数据成功", record);
        } else {
            return ServerResponse.createByErrorMessage("更新管理数据失败");
        }
    }

    /**
     * 插入数据
     * ok
     */
    @RequestMapping("/insertSelectiveClassse")
    @ResponseBody
    public ServerResponse insertSelective(Classse record) {
        Classse classse = new Classse();
        classse.setName(record.getName());
        classse.setMajorId(record.getMajorId());
        classse.setMajorName(record.getMajorName());
        classse.setStudentNumber(record.getStudentNumber());
        System.out.println("MajorID:"+classse.getMajorId()+"=:MajorName:"+classse.getMajorName()+"=StudentNumber:"+classse.getStudentNumber());
        if (Logging.logging == 1 && classesService.insert(classse) > 0) {
            return ServerResponse.createBySuccess("添加管理数据成功", classse);
        } else {
            return ServerResponse.createByErrorMessage("添加管理员数据失败");
        }
    }
}