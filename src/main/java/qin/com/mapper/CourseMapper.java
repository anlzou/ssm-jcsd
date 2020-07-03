package qin.com.mapper;

import org.apache.ibatis.annotations.Param;
import qin.com.entity.Course;

import java.util.List;

public interface CourseMapper {
    int deleteByPrimaryKey(Integer id);
    int insert(Course record);
    int insertSelective(Course record);
    Course selectByPrimaryKey(Integer id);
    int updateByPrimaryKeySelective(Course record);
    int updateByPrimaryKey(Course record);

    List<Course> selectAll();

    int deleteByList(@Param("deleteids") String[] deleteids);
}