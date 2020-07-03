package qin.com.service;

import qin.com.entity.Category;
import qin.com.entity.Classse;

import java.util.List;

public interface ClassesService {
    int deleteByPrimaryKey(Integer id);
    int insert(Classse record);
    int insertSelective(Classse record);
    Classse selectByPrimaryKey(Integer id);
    int updateByPrimaryKeySelective(Classse record);
    int updateByPrimaryKey(Classse record);

    List<Classse> selectAll();

    int deleteByList(String[] deleteids);
}
