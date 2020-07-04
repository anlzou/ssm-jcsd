# jcsdproject
### project
[mooc1-2.chaoxing](https://mooc1-2.chaoxing.com/nodedetailcontroller/visitnodedetail?courseId=203555797&knowledgeId=333520490)

### 数据库
[jcsd+20200615+1450.sql](src/resource/jcsd+20200615+1450.sql)

### 数据库配置
[jdbc.properties](src/main/resources/jdbc.properties)

### Mybatis配置
[generator.xml](src/resource/generator.xml)

### 注意
数据库表的日期字段不为0才可以查询出时间数据

### 补充
~~1. 日期未处理和使用~~
解决方法：

更改数据库连接url为`url=jdbc:mysql://localhost:3306/jcsd?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull`

2. 数据库中sd_datetime字段类型为varchar，应该给改为data类型。

### 系统安全设计
在common包下设计登录状态类`Logging`
```java
public class  Logging {
    /**
     * 登录状态，0为未登录，1为登录
     * 用于处理控制器的访问权限，需要先登录，把状态置为1才可以使用该控制器
     */
    public static int logging = 0;
}
```
作用：当访问某控制器时，先判断是否已经登录过(成功访问登录控制器)，作为控制器的权限与入口。