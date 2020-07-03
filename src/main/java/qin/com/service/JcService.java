package qin.com.service;

import qin.com.entity.Jc;
import qin.com.entity.JcWithBLOBs;

import java.util.List;

public interface JcService {
    int deleteByPrimaryKey(Integer id);
    int insert(Jc record);
    int insertSelective(Jc record);
    Jc selectByPrimaryKey(Integer id);
    int updateByPrimaryKeySelective(Jc record);
    int updateByPrimaryKeyWithBLOBs(Jc record);
    int updateByPrimaryKey(Jc record);

    int deleteByList( String[] deleteids);

    List<Jc> selectAll();
}
