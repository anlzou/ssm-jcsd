package qin.com.service;

import qin.com.entity.Teacher;

public interface TeacherService {
    int deleteByPrimaryKey(Integer id);
    int insert(Teacher record);
    int insertSelective(Teacher record);
    Teacher selectByPrimaryKey(Integer id);
    int updateByPrimaryKeySelective(Teacher record);
    int updateByPrimaryKey(Teacher record);
}
