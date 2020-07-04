package qin.com.service;

import qin.com.entity.Major;

import java.util.List;

public interface MajorService {
    int deleteByPrimaryKey(Integer id);
    int insert(Major record);
    int insertSelective(Major record);
    Major selectByPrimaryKey(Integer id);
    int updateByPrimaryKeySelective(Major record);
    int updateByPrimaryKey(Major record);

    List<Major> selectAll();

    int deleteByList(String[] deleteids);
}
