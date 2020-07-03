package qin.com.mapper;

import org.apache.ibatis.annotations.Param;
import qin.com.entity.Category;

import java.util.List;

public interface CategoryMapper {
    int deleteByPrimaryKey(Integer id);
    int insert(Category record);
    int insertSelective(Category record);
    Category selectByPrimaryKey(Integer id);
    int updateByPrimaryKey(Category record);

    List<Category> selectAll();

    int deleteByList(@Param("deleteids") String[] deleteids);

    int updateByPrimaryKeySelective(Category record);

    int updateByPrimaryName(@Param("name_old") String name_old, @Param("name_new") String name_new);
}