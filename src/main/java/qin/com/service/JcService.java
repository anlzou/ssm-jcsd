package qin.com.service;

import qin.com.entity.Jc;
import qin.com.entity.JcWithBLOBs;

import java.util.List;

public interface JcService {
    int deleteByPrimaryKey(Integer id);
//    int insert(JcWithBLOBs record);
    int insertSelective(JcWithBLOBs record);
    JcWithBLOBs selectByPrimaryKey(Integer id);
//    int updateByPrimaryKeySelective(JcWithBLOBs record);
    int updateByPrimaryKeyWithBLOBs(JcWithBLOBs record);
    int updateByPrimaryKey(Jc record);

    List<Jc> selectAll();

    int deleteByList( String[] deleteids);

    int updateByPrimaryKeySelective(Jc record);

    int insert(Jc record);
}
