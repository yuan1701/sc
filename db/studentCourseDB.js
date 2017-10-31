let pool=require('./pool');

module.exports={
	findAll(){
		let sql = "select * from studentCourse";
		return pool.execute(sql);
	},
   //通过学生id查询该学生所有的课程
   findById(id){
		let sql = "select * from studentCourse where id="+id;
	    return pool.execute(sql);
	},
   //模糊查询
   	query(keys){
   		let sql = "select * from studentCourse where grade like '%"+keys+"%'";
   		return pool.execute(sql);
  	},
   //保存
  	save(studentCourse){
   		let sql = "insert into studentCourse values(null,'"+studentCourse.grade+"',"+studentCourse.student_id +","+studentCourse.course_id+")";
    	return pool.execute(sql);
   	},
   //修改
    update(studentCourse){
    	let sql="update studentCourse set grade='"
   			+studentCourse.grade +"',student_id="
    		+studentCourse.student_id+",course_id="
        +studentCourse.course_id+" where id = "
    		+studentCourse.id+"";
    	return pool.execute(sql);
   	},
   //删除
    batchDelete(ids){
	    let sql = "delete from course where id in ("+ids.join()+")"
	    return pool.execute(sql);
   	},
    //删除一个
    delete(studentCourse){
      let sql = "delete from studentCourse where id="
      +studentCourse.id+"";
      return pool.execute(sql);
    },
 }