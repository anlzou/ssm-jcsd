/**
 * @author：anlzou
 * @Date：Created in10:24 2020/7/2
 * @Github：https://github.com/anlzou
 * @Description：
 */
package qin.com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import qin.com.entity.Admin;
import qin.com.service.AdminService;

import javax.annotation.Resource;

@Controller //这是控制器的的注解，代码当前类为一个控制器
//@RequestMapping("/login")  //这个注解表示控制器的映射的地址为服务器地址+admin
public class LoginController {
    int logging = 0;//登录状态，0为未登录，1为登录
    @Resource(name = "adminServiceImpl")  //这个注解表示自动注入adminSeerviceImpl业务实现类
    @Autowired      //该注解表示后紧跟的变量进行封装，即自动产生getter和setter
    private AdminService adminService;

    /*跳转到管理员的首页，唯一入口，前提是先登录*/
    @RequestMapping("/index")
    public String index() {
        if (logging == 1)
            return "adminindex";
        else return null;
    }

    /*跳转到管理员的登录*/
    @RequestMapping("/login")
    public String login() {
        logging = 0;
        return "login/login";
    }

    /*跳转到管理员的注册*/
    @RequestMapping("/register")
    public String register() {
        return "login/register";
    }

    /**
     * 登录控制器
     */
    @RequestMapping("/selectlogin")
    @ResponseBody
    public String selectlogin(String name, String password) {
        System.out.println(name);
        System.out.println(password);
        password = DigestUtils.md5DigestAsHex(password.getBytes());//单向加密
//        System.out.println(password);
        Admin admin = adminService.selectByPrimaryNameAndPass(name, password);//按照名和密码进行查询
//        System.out.println(admin);
        if (admin != null) {
            logging = 1;
            System.out.println("login++++++++++yes");
            return "index";
        } else {
            return "error";
        }
    }

    /**
     * 注册控制器
     */
    @RequestMapping("/insertRegister")
    @ResponseBody
    public String insertRegister(String name, String password) {
        Admin admin = new Admin();
        System.out.println(name);
        System.out.println(password);
        password = DigestUtils.md5DigestAsHex(password.getBytes());//单向加密
//        System.out.println(password);
//        int ok = adminService.insertRegister(name,password);//按照名称和密码进行插入
        admin.setName(name);
        admin.setPass(password);
        if (adminService.insert(admin) > 0) {
            System.out.println("register++++++++++yes");
            return "ok";
        } else {
            return "error";
        }
    }
}
