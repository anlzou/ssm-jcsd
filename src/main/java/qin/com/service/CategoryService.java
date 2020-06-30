package qin.com.service;

import qin.com.entity.Category;

public interface CategoryService {
    int deleteByPrimaryKey(Integer id);
    int insert(Category record);
    int insertSelective(Category record);
    Category selectByPrimaryKey(Integer id);
    int updateByPrimaryKeySelective(Category record);
    int updateByPrimaryKey(Category record);
}
