package qin.com.mapper;

import org.apache.ibatis.annotations.Param;
import qin.com.entity.Jc;
import qin.com.entity.JcWithBLOBs;

import java.util.List;

public interface JcMapper {
    int deleteByPrimaryKey(Integer id);
    int insert(Jc record);
    int insertSelective(Jc record);
    Jc selectByPrimaryKey(Integer id);
    int updateByPrimaryKeySelective(JcWithBLOBs record);
    int updateByPrimaryKeyWithBLOBs(Jc record);
    int updateByPrimaryKey(Jc record);

    List<Jc> selectAll();

//    List<JcWithBLOBs> selectAllx();

    int deleteByList(@Param("deleteids") String[] deleteids);
}