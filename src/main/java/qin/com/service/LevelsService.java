package qin.com.service;

import org.apache.ibatis.annotations.Param;
import qin.com.entity.Levels;

import java.util.List;

public interface LevelsService {
    int deleteByPrimaryKey(Integer id);
    int insert(Levels record);
    int insertSelective(Levels record);
    Levels selectByPrimaryKey(Integer id);
    int updateByPrimaryKeySelective(Levels record);
    int updateByPrimaryKey(Levels record);

    List<Levels> selectAll();

    int deleteByList(String[] deleteids);
}
