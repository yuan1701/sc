let pool=require('./pool');

module.exports={
    //1.查询所有
    findAll(){
      var sql = "select * from clazz";
      return pool.execute(sql);
    },
    //2.通过id查询
    findById(id){
      var sql="select * from clazz where id="+id;
      return pool.execute(sql);
    },
    //3.模糊查询(关键字查询)
    query(keys){
      var sql="select * from clazz where name like '%"
      +keys+"%' or createDate like '%"
      +keys+"%' or teacher_id like '%"+keys+"%'";
      return pool.execute(sql);
    },
    //4.添加(保存)
    save(clazz){
      let sql="insert into clazz values(null,'"
      +clazz.name+"','"+clazz.createDate+"',"
      +clazz.teacher_id+")";
      return pool.execute(sql);
    },
    //5.删除
    batchDelete(ids){
      var sql = "delete from clazz where id in ("+ids.join()+")";
      return pool.execute(sql);
    },
    //删除一个
  delete(clazz){
    let sql = "delete from clazz where id="
    +clazz.id+"";
    return pool.execute(sql);
  },
    //6.修改，更新
    update(clazz){
      let sql = "update clazz set name='"
    +clazz.name+"',createDate='"
    +clazz.createDate+"',teacher_id="
    +clazz.teacher_id+" where id="
    +clazz.id+"";
      return pool.execute(sql);
    }

}