package qin.com.mapper;

import org.apache.ibatis.annotations.Param;
import qin.com.entity.Department;

import java.util.List;

public interface DepartmentMapper {
    int deleteByPrimaryKey(Integer id);
    int insert(Department record);
    int insertSelective(Department record);
    Department selectByPrimaryKey(Integer id);
    int updateByPrimaryKeySelective(Department record);
    int updateByPrimaryKey(Department record);

    List<Department> selectAll();

    int deleteByList(@Param("deleteids") String[] deleteids);
}