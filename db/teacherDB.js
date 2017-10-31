let pool = require('./pool');

module.exports = {
  //查询所有
  findAll(){
    let sql = "select * from teacher";
    return pool.execute(sql);
  },
  //通过id查询
  findById(id){
    let sql = "select * from teacher where id = "+id;
    return pool.execute(sql);  
  },
  //模糊查询  
  query(keys){
    let sql = "select * from teacher where name like '%"
    +keys+"%'";
    return pool.execute(sql);
  },
  //保存
  save(teacher){
    let sql = "insert into teacher values(null,'"
    +teacher.name+"','"
    +teacher.telephone+"')";
    return pool.execute(sql);
  },
  //删除
  batchDelete(ids){
    let sql = "delete from teacher where id in ("+ids.join()+")";
    return pool.execute(sql);
  },
  //删除一个
  delete(teacher){
    let sql = "delete from teacher where id="
    +teacher.id+"";
    return pool.execute(sql);
  },
  //修改
  update(teacher){
    // let sql = "update teacher set name = '"
    // +teacher.name+"',telephone = '"
    // +teacher.telephone+"' where id = "
    // +teacher.id;
    let sql = "update teacher set name='"+teacher.name+"',telephone="+teacher.telephone+" where id="+teacher.id+"";
    return pool.execute(sql);
  }
}