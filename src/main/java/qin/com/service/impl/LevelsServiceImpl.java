/**
 * @author：anlzou
 * @Date：Created in22:06 2020/6/16
 * @Github：https://github.com/anlzou
 * @Description：
 */
package qin.com.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qin.com.entity.Levels;
import qin.com.mapper.LevelsMapper;
import qin.com.service.LevelsService;

@Service("levelsServiceImpl")  //注解为业务类，并且方便在控制器中注入我们这个业务类
public class LevelsServiceImpl implements LevelsService {
    @Autowired
    private LevelsMapper levelsMapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return levelsMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(Levels record) {
        return levelsMapper.insert(record);
    }

    @Override
    public int insertSelective(Levels record) {
        return levelsMapper.insertSelective(record);
    }

    @Override
    public Levels selectByPrimaryKey(Integer id) {
        return levelsMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(Levels record) {
        return levelsMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(Levels record) {
        return levelsMapper.updateByPrimaryKey(record);
    }
}
