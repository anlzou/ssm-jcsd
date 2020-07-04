/**
 * @author：anlzou
 * @Date：Created in15:39 2020/7/4
 * @Github：https://github.com/anlzou
 * @Description：
 */
package qin.com.common;

/**
 * @Author：anlzou
 * @Date：2020/7/4 16:00
 * @Descritpion：登录权限类，记录登录状态，隔离控制器权限
 * @param： * @param null
*/
public class  Logging {
    /**
     * 登录状态，0为未登录，1为登录
     * 用于处理控制器的访问权限，需要先登录，把状态置为1才可以使用该控制器
     */
    public static int logging = 0;
}
