package qin.com.service;

import qin.com.entity.Major;

public interface MajorService {
    int deleteByPrimaryKey(Integer id);
    int insert(Major record);
    int insertSelective(Major record);
    Major selectByPrimaryKey(Integer id);
    int updateByPrimaryKeySelective(Major record);
    int updateByPrimaryKey(Major record);
}
