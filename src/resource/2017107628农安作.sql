/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50051
Source Host           : localhost:3306
Source Database       : jcsd

Target Server Type    : MYSQL
Target Server Version : 50051
File Encoding         : 65001

Date: 2020-07-04 16:55:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `admin`
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(10) unsigned NOT NULL auto_increment COMMENT '管理员的编号',
  `name` varchar(20) NOT NULL default '' COMMENT '用户名',
  `pass` varchar(36) NOT NULL COMMENT '密码',
  `atype` varchar(8) default NULL,
  `phone` varchar(12) default NULL COMMENT '电话',
  `email` varchar(45) default NULL COMMENT 'email',
  `qq` varchar(10) default NULL COMMENT 'qq',
  `create_time` datetime default NULL COMMENT '创建时间',
  `update_time` datetime default NULL COMMENT '最后更新时间',
  PRIMARY KEY  (`id`,`name`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='用于存放管理信息\r\npass 后 atype varchar(8)';

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('21', 'an', '564fe7e6d917d775e18724ef9aa64351', null, 'aaaa', 'aa', 'aaaa', '2020-07-02 15:42:02', '2020-07-02 15:42:02');
INSERT INTO `admin` VALUES ('22', 'df', 'c1b1ef466efb04631c7da5d7c78819f6', null, 'q', 'df', 'df', '2020-07-02 17:53:37', '2020-07-02 17:53:37');
INSERT INTO `admin` VALUES ('23', 'anlzou', 'd9b1d7db4cd6e70935368a1efb10e377', null, 'df', 'df', 'df', '2020-07-02 18:04:05', '2020-07-02 18:04:05');
INSERT INTO `admin` VALUES ('24', 'anlzou', '5e09e26eab005f936db4b31013258b46', null, 'xxxxx', 'xxxxxx', 'xxxx', '2020-07-02 18:13:13', '2020-07-02 18:13:13');
INSERT INTO `admin` VALUES ('30', 'an', '4124bc0a9335c27f086f24ba207a4912', null, null, null, null, '2020-07-03 09:57:31', '2020-07-03 09:57:31');
INSERT INTO `admin` VALUES ('31', 'f', '83be264eb452fcf0a1c322f2c7cbf987', null, 'ff', 'f', 'f', '2020-07-03 15:24:22', '2020-07-04 16:29:21');

-- ----------------------------
-- Table structure for `category`
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL auto_increment COMMENT '教材类别编号',
  `name` varchar(50) NOT NULL COMMENT '教材类别名称',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='用于存入教材类别; InnoDB free: 3072 kB';

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('14', 'a', '2020-07-03 09:16:07', '2020-07-03 09:16:11');
INSERT INTO `category` VALUES ('15', 'anlzou', '2020-07-03 09:48:32', '2020-07-03 09:48:32');

-- ----------------------------
-- Table structure for `classse`
-- ----------------------------
DROP TABLE IF EXISTS `classse`;
CREATE TABLE `classse` (
  `id` int(11) NOT NULL auto_increment COMMENT '班级编号',
  `name` varchar(50) default NULL COMMENT '班级名称',
  `major_id` int(11) default NULL COMMENT '班级专业',
  `major_name` varchar(20) default NULL COMMENT '专业名称',
  `student_number` int(11) default NULL COMMENT '班级学生人数',
  `create_time` datetime default NULL COMMENT '班级创建时间',
  `update_time` datetime default NULL COMMENT '班级最后更新时间',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='用于存放班级信息';

-- ----------------------------
-- Records of classse
-- ----------------------------
INSERT INTO `classse` VALUES ('1', 'anff', '2', '软件工程', '45', '2020-07-03 10:59:54', '2020-07-03 10:59:58');
INSERT INTO `classse` VALUES ('3', 'df', '3', '巅峰', '33', '2020-07-03 11:17:08', '2020-07-03 11:17:08');
INSERT INTO `classse` VALUES ('4', 'anlzou', '3', '巅峰', '33', '2020-07-03 11:21:35', '2020-07-03 11:21:35');
INSERT INTO `classse` VALUES ('5', 'df', '2', '方法', '44', '2020-07-03 11:26:30', '2020-07-03 11:26:30');

-- ----------------------------
-- Table structure for `course`
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `id` int(11) NOT NULL auto_increment COMMENT '课程编号',
  `code` varchar(8) default NULL COMMENT '课程代码',
  `name` varchar(20) default NULL COMMENT '课程名称',
  `period` int(11) default NULL COMMENT '课时',
  `Nature` varchar(20) default NULL COMMENT '课程类型',
  `create_time` datetime default NULL COMMENT '创建时间',
  `update_time` datetime default NULL COMMENT '最后更新时间',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='课程信息';

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO `course` VALUES ('1', '0100', 'j2e企业开发', '64', '选修', '2020-07-03 15:57:02', '2020-07-03 15:57:05');
INSERT INTO `course` VALUES ('2', '0101', 'java程序设计', '80', '必修', '2020-07-03 15:57:08', '2020-07-03 15:57:11');
INSERT INTO `course` VALUES ('3', 'xx', 'anlzou', '1', 'df', '2020-07-04 10:00:11', '2020-07-04 10:00:11');

-- ----------------------------
-- Table structure for `department`
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department` (
  `id` int(11) NOT NULL auto_increment COMMENT '部门号',
  `name` varchar(50) default NULL COMMENT '部门名称',
  `d_manager` varchar(16) NOT NULL COMMENT '部门负责人',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='用于存入部门信息';

-- ----------------------------
-- Records of department
-- ----------------------------
INSERT INTO `department` VALUES ('1', '计信学院', '瓜皮', '2020-07-03 16:17:06', '2020-07-03 16:43:39');
INSERT INTO `department` VALUES ('2', '体育学院', '瓜皮', '2020-07-03 16:43:48', '2020-07-03 16:43:43');
INSERT INTO `department` VALUES ('3', '数统学院', '瓜皮', '2020-07-03 16:43:51', '2020-07-03 16:43:45');

-- ----------------------------
-- Table structure for `jc`
-- ----------------------------
DROP TABLE IF EXISTS `jc`;
CREATE TABLE `jc` (
  `id` int(11) NOT NULL auto_increment COMMENT '教材编号',
  `name` varchar(50) default NULL COMMENT '教材名称',
  `isbn` varchar(20) default NULL COMMENT '教材书号',
  `author` varchar(20) default NULL COMMENT '作者',
  `publisher_id` int(11) default NULL COMMENT '出版社',
  `price` double default NULL COMMENT '价格',
  `pubdate` datetime default NULL COMMENT '开课时间',
  `category_id` int(11) default NULL COMMENT '专业编号',
  `major_text` varchar(50) default NULL COMMENT '使用专业',
  `classse_id` int(11) unsigned default NULL COMMENT '班级编号',
  `classse_text` varchar(50) default NULL COMMENT '使用班级',
  `levels_id` int(11) default NULL COMMENT '层次',
  `k_overview` text COMMENT 'a到J不用写原因',
  `depart_opinion` text COMMENT '部门审核意见',
  `company_option` text COMMENT '单位审核意见',
  `course_id` int(11) default NULL COMMENT '课程编号',
  `course_name` varchar(20) default NULL COMMENT '课程名称',
  `teacher_use` int(10) default NULL COMMENT '教师用量',
  `yesorno` int(11) default NULL COMMENT '是否审核通过',
  `sd_datetime` varchar(20) default NULL COMMENT '申订日期',
  `sd_teacher` int(11) unsigned default NULL COMMENT '申订教师编号',
  `create_time` datetime default NULL,
  `update_time` datetime default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='教材信息';

-- ----------------------------
-- Records of jc
-- ----------------------------
INSERT INTO `jc` VALUES ('1', 'j2ee', 'jx', 'x', '1', '23.5', '2020-07-03 17:58:57', '11', 'd', '0', 'x', '1', '1x', '1x', '1x', '1', '1', '1', '1', '1', '1', '2020-07-03 17:59:21', '2020-07-03 17:59:24');

-- ----------------------------
-- Table structure for `levels`
-- ----------------------------
DROP TABLE IF EXISTS `levels`;
CREATE TABLE `levels` (
  `id` int(11) NOT NULL auto_increment COMMENT '层次编号',
  `name` varchar(20) default NULL COMMENT '层次名称',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='用于存放教材的层次';

-- ----------------------------
-- Records of levels
-- ----------------------------
INSERT INTO `levels` VALUES ('1', '专科', '2020-07-03 23:00:19', '2020-07-03 23:42:14');
INSERT INTO `levels` VALUES ('2', '研究生', '2020-07-03 23:00:26', '2020-07-03 23:42:09');
INSERT INTO `levels` VALUES ('4', 'anlzoux', '2020-07-03 23:29:18', '2020-07-04 08:31:17');

-- ----------------------------
-- Table structure for `major`
-- ----------------------------
DROP TABLE IF EXISTS `major`;
CREATE TABLE `major` (
  `id` int(11) NOT NULL auto_increment COMMENT '专业编号',
  `name` varchar(20) default NULL COMMENT '专业名称',
  `create_time` datetime NOT NULL,
  `update_time` varchar(45) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='专业';

-- ----------------------------
-- Records of major
-- ----------------------------
INSERT INTO `major` VALUES ('1', '软件工程', '2020-07-04 08:58:51', '2020-07-04 08:59:06');
INSERT INTO `major` VALUES ('3', 'anlzou', '2020-07-04 08:59:15', '2020-07-04 08:59:15');

-- ----------------------------
-- Table structure for `publisher`
-- ----------------------------
DROP TABLE IF EXISTS `publisher`;
CREATE TABLE `publisher` (
  `id` int(11) NOT NULL auto_increment COMMENT '编号',
  `name` varchar(50) default NULL COMMENT '出版社的名称',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='用于存放出版社';

-- ----------------------------
-- Records of publisher
-- ----------------------------
INSERT INTO `publisher` VALUES ('1', '清华大学出版社');

-- ----------------------------
-- Table structure for `teacher`
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `id` int(11) NOT NULL auto_increment COMMENT '编号',
  `name` varchar(20) default NULL COMMENT '姓名',
  `phone` varchar(11) default NULL COMMENT '电话',
  `email` varchar(100) default NULL COMMENT 'email',
  `qq` varchar(10) default NULL COMMENT 'qq',
  `depart_id` int(11) default NULL COMMENT '所在部门',
  `depart_name` varchar(45) NOT NULL COMMENT '所在部门的名称',
  `pass` varchar(36) default NULL COMMENT '密码',
  `question` varchar(45) NOT NULL COMMENT '找回密码的问题',
  `answer` varchar(45) NOT NULL COMMENT '找回密码答案',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime NOT NULL COMMENT '最后更新时间',
  `utype` int(11) default '0' COMMENT '0代表普通教师，1代表教研室主任，2代表单位负责人',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='用于存放教师的信息';

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES ('1', 'teacher wang', '13777835678', 'wang@qq.com', '12813688', '1', 'x', 's', 's', 's', '2020-07-04 09:57:26', '2020-07-04 10:39:54', '0');
