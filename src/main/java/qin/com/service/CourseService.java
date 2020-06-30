package qin.com.service;

import qin.com.entity.Course;

public interface CourseService {
    int deleteByPrimaryKey(Integer id);
    int insert(Course record);
    int insertSelective(Course record);
    Course selectByPrimaryKey(Integer id);
    int updateByPrimaryKeySelective(Course record);
    int updateByPrimaryKey(Course record);
}
