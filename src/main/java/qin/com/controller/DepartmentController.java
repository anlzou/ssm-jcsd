package qin.com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import qin.com.common.ResponseCode;
import qin.com.common.ServerResponse;
import qin.com.entity.Department;
import qin.com.service.DepartmentService;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
public class DepartmentController {
    @Resource(name = "departmentServiceImpl")
    @Autowired
    private DepartmentService departmentService;

    /**
     * 查询所有数据
     * ok
     */
    @RequestMapping("/listallDepartment")
    @ResponseBody
    public ServerResponse listall(HttpServletRequest request, HttpServletResponse response) {
        List<Department> departmentList = departmentService.selectAll();
        System.out.println("Department：进入查询控制器");
        if (departmentList.size() > 0) {
            System.out.println("Department：查询成功");
            return ServerResponse.createBySuccess(0, departmentList);
        } else {
            return ServerResponse.createByErrorMessage("找不到部门信息");
        }
    }

    /**
     * 删除选中的数据
     * ok
     */
    @RequestMapping("/deleteallDepartment")
    @ResponseBody
    public ServerResponse deleteall(String id) {
        System.out.println(id);
        String[] deleteids = id.split(",");//把客户端传送过来的字符串（一般为“1，2，3，4”）转换成数组
//        System.out.println(deleteids);
        if (deleteids != null && deleteids.length > 0) {
            System.out.println("deleteall ok!======1");
            if (departmentService.deleteByList(deleteids) > 0) {//按照列表删除
                System.out.println("deleteall ok!======2");
                return ServerResponse.createBySuccess(ResponseCode.SUCCESS.getCode(), "删除信息成功");
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
    @RequestMapping("/updateByPrimaryKeySelectiveDepartment")
    @ResponseBody
    public ServerResponse updateByPrimaryKeySelective(Department record) {
        Department department = new Department();
        department.setId(record.getId());
        department.setName(record.getName());
        department.setdManager(record.getdManager());
        System.out.println("Course更新数据==" + department.getId() + "==" + department.getName());
        if (departmentService.updateByPrimaryKey(department) > 0) {
            System.out.println("Course表更新成功");
            return ServerResponse.createBySuccess("更新数据成功", record);
        } else {
            return ServerResponse.createByErrorMessage("更新数据失败");
        }
    }

    /**
     * 插入数据
     * ok
     */
    @RequestMapping("/insertSelectiveDepartment")
    @ResponseBody
    public ServerResponse insertSelective(Department record) {
        Department department = new Department();
        department.setId(record.getId());
        department.setName(record.getName());
        department.setdManager(record.getdManager());
        if (departmentService.insert(department) > 0) {
            return ServerResponse.createBySuccess("添加数据成功", department);
        } else {
            return ServerResponse.createByErrorMessage("添加数据失败");
        }
    }
}