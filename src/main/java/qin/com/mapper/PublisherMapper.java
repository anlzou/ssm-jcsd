package qin.com.mapper;

import org.apache.ibatis.annotations.Param;
import qin.com.entity.Publisher;

import java.util.List;

public interface PublisherMapper {
    int deleteByPrimaryKey(Integer id);
    int insert(Publisher record);
    int insertSelective(Publisher record);
    Publisher selectByPrimaryKey(Integer id);
    int updateByPrimaryKeySelective(Publisher record);
    int updateByPrimaryKey(Publisher record);

    List<Publisher> selectAll();

    int deleteByList(@Param("deleteids") String[] deleteids);
}