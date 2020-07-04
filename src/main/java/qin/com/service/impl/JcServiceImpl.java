/**
 * @author：anlzou
 * @Date：Created in22:04 2020/6/16
 * @Github：https://github.com/anlzou
 * @Description：
 */
package qin.com.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qin.com.entity.Jc;
import qin.com.entity.JcWithBLOBs;
import qin.com.mapper.JcMapper;
import qin.com.service.JcService;

import java.util.List;

@Service("jcServiceImpl")  //注解为业务类，并且方便在控制器中注入我们这个业务类
public class JcServiceImpl implements JcService {
    @Autowired
    private JcMapper jcMapper;
    private JcWithBLOBs jcWithBLOBs;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return jcMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(Jc record) {
        return jcMapper.insert((JcWithBLOBs) record);
    }

    @Override
    public int insertSelective(Jc record) {
        return jcMapper.insertSelective(record);
    }

    @Override
    public Jc selectByPrimaryKey(Integer id) {
        return jcMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(JcWithBLOBs record) {
        return jcMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKeyWithBLOBs(Jc record) {
        return jcMapper.updateByPrimaryKeyWithBLOBs(record);
    }

    @Override
    public int updateByPrimaryKey(Jc record) {
        return jcMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<Jc> selectAll() {
        return jcMapper.selectAll();
    }

    @Override
    public int deleteByList(String[] deleteids) {
        return jcMapper.deleteByList(deleteids);
    }
}
