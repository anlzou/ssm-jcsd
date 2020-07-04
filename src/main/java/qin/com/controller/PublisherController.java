package qin.com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import qin.com.common.Logging;
import qin.com.common.ResponseCode;
import qin.com.common.ServerResponse;
import qin.com.entity.Publisher;
import qin.com.service.PublisherService;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
public class PublisherController {
    @Resource(name = "publisherServiceImpl")
    @Autowired
    private PublisherService publisherService;

    /**
     * 查询所有数据
     * ok
     */
    @RequestMapping("/listallPublisher")
    @ResponseBody
    public List<Publisher> listall(HttpServletRequest request, HttpServletResponse response) {
        if (Logging.logging == 1)
            return publisherService.selectAll();
        return null;
    }

    /**
     * 删除选中的数据
     * ok
     */
    @RequestMapping("/deleteallPublisher")
    @ResponseBody
    public ServerResponse deleteall(String id) {
        System.out.println(id);
        String[] deleteids = id.split(",");//把客户端传送过来的字符串（一般为“1，2，3，4”）转换成数组
//        System.out.println(deleteids);
        if (deleteids != null && deleteids.length > 0) {
            System.out.println("deleteall ok!======1");
            if (Logging.logging == 1 && publisherService.deleteByList(deleteids) > 0) {//按照列表删除
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
    @RequestMapping("/updateByPrimaryKeySelectivePublisher")
    @ResponseBody
    public ServerResponse updateByPrimaryKeySelective(Publisher record) {
        Publisher publisher = new Publisher();
        publisher.setId(record.getId());//更新操作必须要有id主关键字段
        publisher.setName(record.getName());
        System.out.println("Publisher更新数据==" + publisher.getId() + "==" + publisher.getName());
        if (Logging.logging == 1 && publisherService.updateByPrimaryKey(publisher) > 0) {
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
    @RequestMapping("/insertSelectivePublisher")
    @ResponseBody
    public ServerResponse insertSelective(Publisher record) {
        Publisher publisher = new Publisher();
        publisher.setName(record.getName());
        if (Logging.logging == 1 && publisherService.insert(publisher) > 0) {
            return ServerResponse.createBySuccess("添加管理数据成功", publisher);
        } else {
            return ServerResponse.createByErrorMessage("添加管理员数据失败");
        }
    }
}