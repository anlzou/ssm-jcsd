package qin.com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import qin.com.common.ResponseCode;
import qin.com.common.ServerResponse;
import qin.com.entity.Jc;
import qin.com.entity.JcWithBLOBs;
import qin.com.service.JcService;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
public class JcController {
    @Resource(name = "jcServiceImpl")
    @Autowired
    private JcService jcService;

    /**
     * 查询所有数据
     * ok
     */
    @RequestMapping("/listallJc")
    @ResponseBody
    public ServerResponse listall(HttpServletRequest request, HttpServletResponse response) {
        List<Jc> jcList = jcService.selectAll();
        System.out.println("Jc：进入查询控制器");
        if (jcList.size() > 0) {
            System.out.println("Jc：查询成功");
            return ServerResponse.createBySuccess(0, jcList);
        } else {
            return ServerResponse.createByErrorMessage("找不到部门信息");
        }
    }

    /**
     * 删除选中的数据
     * ok
     */
    @RequestMapping("/deleteallJc")
    @ResponseBody
    public ServerResponse deleteall(String id) {
        System.out.println(id);
        String[] deleteids = id.split(",");//把客户端传送过来的字符串（一般为“1，2，3，4”）转换成数组
//        System.out.println(deleteids);
        if (deleteids != null && deleteids.length > 0) {
            System.out.println("deleteall ok!======1");
            if (jcService.deleteByList(deleteids) > 0) {//按照列表删除
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
    @RequestMapping("/updateByPrimaryKeySelectiveJc")
    @ResponseBody
    public ServerResponse updateByPrimaryKeySelective(JcWithBLOBs record) {
        System.out.println(record);
        JcWithBLOBs jcWithBLOBs = new JcWithBLOBs();
        jcWithBLOBs.setId(record.getId());
        jcWithBLOBs.setName(record.getName());
        jcWithBLOBs.setIsbn(record.getIsbn());
        jcWithBLOBs.setAuthor(record.getAuthor());
        jcWithBLOBs.setPublisherId(record.getPublisherId());
        jcWithBLOBs.setPrice(record.getPrice());
        jcWithBLOBs.setPubdate(record.getPubdate());
        jcWithBLOBs.setCategoryId(record.getCategoryId());
        jcWithBLOBs.setMajorText(record.getMajorText());
        jcWithBLOBs.setClassseId(record.getClassseId());
        jcWithBLOBs.setClassseText(record.getClassseText());
        jcWithBLOBs.setLevelsId(record.getLevelsId());
        jcWithBLOBs.setCourseId(record.getCourseId());
        jcWithBLOBs.setCourseName(record.getCourseName());
        jcWithBLOBs.setTeacherUse(record.getTeacherUse());
        jcWithBLOBs.setYesorno(record.getYesorno());
        jcWithBLOBs.setSdDatetime(record.getSdDatetime());
        jcWithBLOBs.setSdTeacher(record.getSdTeacher());
        jcWithBLOBs.setkOverview(record.getkOverview());
        jcWithBLOBs.setCompanyOption(record.getCompanyOption());
        jcWithBLOBs.setDepartOpinion(record.getDepartOpinion());
        if (jcService.updateByPrimaryKeySelective(jcWithBLOBs) > 0) {
            System.out.println("Jc表更新成功");
            return ServerResponse.createBySuccess("更新数据成功", record);
        } else {
            return ServerResponse.createByErrorMessage("更新数据失败");
        }
    }
    /**
     * 插入数据
     * ok
     */
    @RequestMapping("/insertSelectiveJc")
    @ResponseBody
    public ServerResponse insertSelective(JcWithBLOBs record) {
        System.out.println(record);
        JcWithBLOBs jcWithBLOBs = new JcWithBLOBs();
        jcWithBLOBs.setId(record.getId());
        jcWithBLOBs.setName(record.getName());
        jcWithBLOBs.setIsbn(record.getIsbn());
        jcWithBLOBs.setAuthor(record.getAuthor());
        jcWithBLOBs.setPublisherId(record.getPublisherId());
        jcWithBLOBs.setPrice(record.getPrice());
        jcWithBLOBs.setPubdate(record.getPubdate());
        jcWithBLOBs.setCategoryId(record.getCategoryId());
        jcWithBLOBs.setMajorText(record.getMajorText());
        jcWithBLOBs.setClassseId(record.getClassseId());
        jcWithBLOBs.setClassseText(record.getClassseText());
        jcWithBLOBs.setLevelsId(record.getLevelsId());
        jcWithBLOBs.setCourseId(record.getCourseId());
        jcWithBLOBs.setCourseName(record.getCourseName());
        jcWithBLOBs.setTeacherUse(record.getTeacherUse());
        jcWithBLOBs.setYesorno(record.getYesorno());
        jcWithBLOBs.setSdDatetime(record.getSdDatetime());
        jcWithBLOBs.setSdTeacher(record.getSdTeacher());
        jcWithBLOBs.setkOverview(record.getkOverview());
        jcWithBLOBs.setCompanyOption(record.getCompanyOption());
        jcWithBLOBs.setDepartOpinion(record.getDepartOpinion());
        if (jcService.insert(jcWithBLOBs) > 0) {
            System.out.println("Jc表插入成功");
            return ServerResponse.createBySuccess("添加数据成功", jcWithBLOBs);
        } else {
            return ServerResponse.createByErrorMessage("添加数据失败");
        }
    }
}