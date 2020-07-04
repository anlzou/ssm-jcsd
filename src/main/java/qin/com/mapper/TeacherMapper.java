package qin.com.mapper;

import org.apache.ibatis.annotations.Param;
import qin.com.entity.Teacher;

import java.util.List;

public interface TeacherMapper {
    int deleteByPrimaryKey(Integer id);
    int insert(Teacher record);
    int insertSelective(Teacher record);
    Teacher selectByPrimaryKey(Integer id);
    int updateByPrimaryKeySelective(Teacher record);
    int updateByPrimaryKey(Teacher record);

    List<Teacher> selectAll();

    int deleteByList(@Param("deleteids") String[] deleteids);
}