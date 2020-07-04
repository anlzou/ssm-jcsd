package qin.com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import qin.com.common.Logging;
import qin.com.common.ResponseCode;
import qin.com.common.ServerResponse;
import qin.com.entity.Levels;
import qin.com.service.LevelsService;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
public class LevelsController {
    @Resource(name = "levelsServiceImpl")
    @Autowired
    private LevelsService levelsService;

    /**
     * 查询所有数据
     * ok
     */
    @RequestMapping("/listallLevels")
    @ResponseBody
    public ServerResponse listall(HttpServletRequest request, HttpServletResponse response) {
        List<Levels> levelsList = levelsService.selectAll();
        System.out.println("Levels表查询："+levelsList);
        if (Logging.logging == 1 && levelsList.size() > 0) {
            System.out.println("查询成功");
            return ServerResponse.createBySuccess(0, levelsList);
        } else {
            return ServerResponse.createByErrorMessage("找不到信息");
        }
    }

    /**
     * 删除选中的数据
     * ok
     */
    @RequestMapping("/deleteallLevels")
    @ResponseBody
    public ServerResponse deleteall(String id) {
        System.out.println(id);
        String[] deleteids = id.split(",");//把客户端传送过来的字符串（一般为“1，2，3，4”）转换成数组
//        System.out.println(deleteids);
        if (deleteids != null && deleteids.length > 0) {
            System.out.println("deleteall ok!======1");
            if (Logging.logging == 1 && levelsService.deleteByList(deleteids) > 0) {//按照列表删除
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
    @RequestMapping("/updateByPrimaryKeySelectiveLevels")
    @ResponseBody
    public ServerResponse updateByPrimaryKeySelective(Levels record) {
        Levels levels = new Levels();
        levels.setId(record.getId());//更新操作必须要有id主关键字段
        levels.setName(record.getName());
        levels.setUpdateTime(record.getUpdateTime());
        System.out.println("Levels更新数据==" + levels.getId() + "==" + levels.getName());
        if (Logging.logging == 1 && levelsService.updateByPrimaryKey(levels) > 0) {
            System.out.println("Levels表更新成功");
            return ServerResponse.createBySuccess("更新管理数据成功", record);
        } else {
            return ServerResponse.createByErrorMessage("更新管理数据失败");
        }
    }

    /**
     * 插入数据
     * ok
     */
    @RequestMapping("/insertSelectiveLevels")
    @ResponseBody
    public ServerResponse insertSelective(Levels record) {
        Levels levels = new Levels();
        levels.setName(record.getName());
        if (Logging.logging == 1 && levelsService.insert(levels) > 0) {
            return ServerResponse.createBySuccess("添加管理数据成功", levels);
        } else {
            return ServerResponse.createByErrorMessage("添加管理员数据失败");
        }
    }
}