package qin.com.mapper;

import org.apache.ibatis.annotations.Param;
import qin.com.entity.Admin;

import java.util.List;

public interface AdminMapper {

    int deleteByPrimaryKey(Integer id);
    int insert(Admin record);
    int insertSelective(Admin record);
    Admin selectByPrimaryKey(Integer id);
    int updateByPrimaryKeySelective(Admin record);
    int updateByPrimaryKey(Admin record);

    List<Admin> selectAll();
    
    int checkAdmin(String name);

    int checkEmail(String email);

    int checkPhone(String phone);

    int checkPass(String pass);

//    boolean checkNameAndPass(String name, String pass);

    boolean checkEmailAndPass(String email, String pass);

    boolean checkPhoneAndPass(String phone, String pass);

    int deleteByList(@Param("deleteids") String[] deleteids); //批量删除数据，要删除数据存放在一个字符数组中

    int deleteByPrimaryName(String string);

    Admin selectByPrimaryNameAndPass(@Param("name") String name, @Param("pass") String pass);

    boolean checkNameAndPass(@Param("name") String name,@Param("pass") String pass);//用户和密码进行查询

    int insertRegister(String name, String pass);
}