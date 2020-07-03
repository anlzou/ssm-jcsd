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
~~数据库所有表的日期字段不为0才可以查询数据~~

### 补充
~~1. 日期未处理和使用~~
解决方法：
更改数据库驱动使用为`url=jdbc:mysql://localhost:3306/jcsd?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull`
2. 数据库中sd_datetime字段类型为varchar，应该给改为data类型。