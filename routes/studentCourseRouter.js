let express = require('express');
let studentCourseDB = require('../db/studentCourseDB');
let StudentCourse = require('../model/StudentCourse');

let router = express.Router();

//查询所有
router.get('/findAll',(req,resp)=>{
	studentCourseDB.findAll().then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

//通过id查询
router.get('/findById',(req,resp)=>{
	studentCourseDB.findById(req.query.id).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	})
});

//通过关键字查询
//locahost:3000/student/query/张三
router.get('/query/:keys',(req,resp)=>{
	studentCourseDB.query(req.params.keys).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	})
});

//保存
router.post('/save',(req,resp)=>{
	var studentCourse = new StudentCourse();
	Object.assign(studentCourse,req.body);
	studentCourseDB.save(studentCourse).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	})
});

//修改
router.post('/update',(req,resp)=>{
	var studentCourse = new StudentCourse();
	Object.assign(studentCourse,req.body);
	studentCourseDB.update(studentCourse).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	})
});

//删除
router.post('/batchDelete',(req,resp)=>{
	studentCourseDB.batchDelete(req.body).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});
//删除一个
router.post('/delete',(req,resp)=>{
	var studentCourse = new StudentCourse();
	Object.assign(studentCourse,req.body);
	studentCourseDB.delete(studentCourse).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	})
});

module.exports = router;