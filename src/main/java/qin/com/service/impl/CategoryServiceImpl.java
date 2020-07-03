/**
 * @author：anlzou
 * @Date：Created in22:01 2020/6/16
 * @Github：https://github.com/anlzou
 * @Description：
 */
package qin.com.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qin.com.entity.Category;
import qin.com.mapper.CategoryMapper;
import qin.com.service.CategoryService;

import java.util.List;

@Service("categoryServiceImpl")  //注解为业务类，并且方便在控制器中注入我们这个业务类
public class CategoryServiceImpl implements CategoryService {
    @Autowired  //注解表示后面的定义的变量spring自动为我们进行封装
    private CategoryMapper categoryMapper;  //这里声明了数据表的接口类，主要是因为我们业务要调用持久层接口来操作数据表（增删改查操作等）

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return categoryMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(Category record) {
        return categoryMapper.insert(record);
    }

    @Override
    public int insertSelective(Category record) {
        return categoryMapper.insertSelective(record);
    }

    @Override
    public Category selectByPrimaryKey(Integer id) {
        return categoryMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKey(Category record) {
        return categoryMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<Category> selectAll() {
        return categoryMapper.selectAll();
    }

    @Override
    public int deleteByList(String[] deleteids) {
        return categoryMapper.deleteByList(deleteids);
    }

    @Override
    public int updateByPrimaryKeySelective(Category record) {
        return categoryMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryName(String name_old, String name_new) {
        return 0;
    }
}
