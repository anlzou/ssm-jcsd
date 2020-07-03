package qin.com.mapper;

import org.apache.ibatis.annotations.Param;
import qin.com.entity.Jc;
import qin.com.entity.JcWithBLOBs;

import java.util.List;

public interface JcMapper {
    int deleteByPrimaryKey(Integer id);
//    int insert(JcWithBLOBs record);
    int insertSelective(JcWithBLOBs record);
    JcWithBLOBs selectByPrimaryKey(Integer id);
//    int updateByPrimaryKeySelective(JcWithBLOBs record);
    int updateByPrimaryKeyWithBLOBs(JcWithBLOBs record);
    int updateByPrimaryKey(Jc record);

    List<Jc> selectAll();

    int deleteByList(@Param("deleteids") String[] deleteids);

    int insert(Jc record);

    int updateByPrimaryKeySelective(Jc record);
}