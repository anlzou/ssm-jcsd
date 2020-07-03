package qin.com.mapper;

import org.apache.ibatis.annotations.Param;
import qin.com.entity.Classse;

import java.util.List;

public interface ClassseMapper {
    int deleteByPrimaryKey(Integer id);
    int insert(Classse record);
    int insertSelective(Classse record);
    Classse selectByPrimaryKey(Integer id);
    int updateByPrimaryKeySelective(Classse record);
    int updateByPrimaryKey(Classse record);

    List<Classse> selectAll();

    int deleteByList(@Param("deleteids") String[] deleteids);
}