package qin.com.service;

import qin.com.entity.Category;

import java.util.List;

public interface CategoryService {
    int deleteByPrimaryKey(Integer id);
    int insert(Category record);
    int insertSelective(Category record);
    Category selectByPrimaryKey(Integer id);
    int updateByPrimaryKey(Category record);

    List<Category> selectAll();

    int deleteByList(String[] iddeleteids);

    int updateByPrimaryKeySelective(Category record);

    int updateByPrimaryName(String name_old, String name_new);
}
