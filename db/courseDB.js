let pool=require('./pool');

module.exports={
	findAll(){
		let sql = "select * from course";
		return pool.execute(sql);
	},
   //通过id查询
   findById(id){
		let sql = "select * from course where id="+id;
	    return pool.execute(sql);
	},
   //模糊查询
   	query(keys){
   		let sql = "select * from course where name like '%"+keys+"%'";
   		return pool.execute(sql);
  	},
   //保存
  	save(course){
   		let sql = "insert into course values(null,'"+course.name +"','"+course.credit+"')";
    	return pool.execute(sql);
   	},
   //修改
    update(course){
    	let sql="update course set name='"
   			+course.name +"',credit='"
    		+course.credit+"' where id = "
    		+course.id+"";
    	return pool.execute(sql);
   	},
   //删除
    batchDelete(ids){
	    let sql = "delete from course where id in ("+ids.join()+")"
	    return pool.execute(sql);
   	},
    //删除一个
  delete(course){
    let sql = "delete from course where id="
    +course.id+"";
    return pool.execute(sql);
  },

 }