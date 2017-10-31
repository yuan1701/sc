let express = require('express');
let studentDB = require('../db/studentDB');
let Student = require('../model/Student');

let router = express.Router();

//查询所有
router.get('/findAll',(req,resp)=>{
	studentDB.findAll().then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

//通过id查询
router.get('/findById',(req,resp)=>{
	studentDB.findById(req.query.id).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	})
});

//通过关键字查询
//locahost:3000/student/query/张三
router.get('/query/:keys',(req,resp)=>{
	studentDB.query(req.params.keys).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	})
});

//保存
router.post('/save',(req,resp)=>{
	var student = new Student();
	Object.assign(student,req.body);
	studentDB.save(student).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	})
});

//修改
router.post('/update',(req,resp)=>{
	var student = new Student();
	Object.assign(student,req.body);
	studentDB.update(student).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	})
});

//删除
router.post('/batchDelete',(req,resp)=>{
	studentDB.batchDelete(req.body).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

//删除一个
router.post('/delete',(req,resp)=>{
	var student = new Student();
	Object.assign(student,req.body);
	studentDB.delete(student).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	})
});

module.exports = router;