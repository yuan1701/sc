let express=require('express');
let courseDB=require('../db/courseDB')
let Course=require('../model/Course')
let router=express.Router();
//查询所有
router.get('/findAll',(req,resp)=>{
	courseDB.findAll().then(function(results){
		resp.send(results);
	}).catch((error)=>{
		resp.send("报错了",error);
	});
});
//通过id查询
router.get('/findById',(req,resp)=>{
	courseDB.findById(req.query.id 

).then(function(results){
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});
//关键字查找
//lcalhost:3000/student/query/张三
router.get('/query/:keys',(req,resp)=>{
   courseDB.query(req.params.keys).then(function(results){
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});
//保存
router.post('/save',(req,resp)=>{
   var course=new Course();
   Object.assign(course,req.body);
   courseDB.save(course).then(function(results){
		resp.send(results);
	}).catch(function(error){
		resp.send(error);
	});
});
//修改 update
router.post('/update',(req,resp)=>{
   var course=new Course();
   Object.assign(course,req.body);
   courseDB.update(course).then(function(results){
		resp.send(results);
	}).catch(function(error){
		resp.send(error);
	});
});
//删除 delete
router.post('/batchDelete',(req,resp)=>{
   courseDB.bathchDelete(req.body).then(function(results){
		resp.send(results);
	}).catch(function(error){
		resp.send(error);
	});
});
//删除一个
router.post('/delete',(req,resp)=>{
	var Course = new Course();
	Object.assign(Course,req.body);
	courseDB.delete(Course).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	})
});
module.exports=router;//返回中间键
