/**
 * @author：anlzou
 * @Date：Created in9:40 2020/6/30
 * @Github：https://github.com/anlzou
 * @Description：
 */
package qin.com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller //这是控制器的的注解，代码当前类为一个控制器
@RequestMapping("/Test")  //这个注解表示控制器的映射的地址为服务器地址
public class TestController {
    @RequestMapping("/test")
    public String test(){
        return "test";
    }
}
