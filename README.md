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
数据库所有表的日期字段不为0才可以查询数据

### 补充
1. 日期未处理和使用
2. jc模块未使用数据库jc表中text类型的`k_overview`、`depart_opinion`、`company_option`字段，原因之一，MyBatis未生成。处理方法手动创建String变量。
3. 数据库中publisher_id字段类型为int，应该给改为varchar类型。
3. 数据库中sd_datetime字段类型为varchar，应该给改为data类型。