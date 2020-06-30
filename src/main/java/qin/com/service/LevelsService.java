package qin.com.service;

import qin.com.entity.Levels;

public interface LevelsService {
    int deleteByPrimaryKey(Integer id);
    int insert(Levels record);
    int insertSelective(Levels record);
    Levels selectByPrimaryKey(Integer id);
    int updateByPrimaryKeySelective(Levels record);
    int updateByPrimaryKey(Levels record);
}
