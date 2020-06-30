package qin.com.service;

import qin.com.entity.Department;

public interface DepartmentService {
    int deleteByPrimaryKey(Integer id);
    int insert(Department record);
    int insertSelective(Department record);
    Department selectByPrimaryKey(Integer id);
    int updateByPrimaryKeySelective(Department record);
    int updateByPrimaryKey(Department record);
}
