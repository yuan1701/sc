let express = require('express');
let teacherDB = require('../db/teacherDB')
let Teacher = require('../model/Teacher')

let router = express.Router();

//查询所有
router.get('/findAll',(req,resp)=>{
  teacherDB.findAll().then(function(results){
    resp.send(results);
  }).catch(function(error){
    resp.send(error);
  });
});

//通过id查询
router.get('/findById',(req,resp)=>{
  teacherDB.findById(req.query.id).then(function(results){
    resp.send(results);
  }).catch(function(error){
    resp.send(error);
  });
});
//关键字查找

router.get('/query/:keys',(req,resp)=>{
  teacherDB.query(req.params.keys).then(function(results){
    resp.send(results);
  }).catch(function(error){
    resp.send(error);
  });
});

//保存
router.post('/save',(req,resp)=>{
  var teacher = new Teacher();
  Object.assign(teacher,req.body);
  teacherDB.save(teacher).then(function(results){
    resp.send(results);
  }).catch(function(error){
    resp.send(error);
  });
});
// update
router.post('/update',(req,resp)=>{
  var teacher = new Teacher();
  Object.assign(teacher,req.body);
  teacherDB.update(teacher).then(function(results){
    resp.send(results);
  }).catch(function(error){
    resp.send(error);
  });
});
//delete
router.post('/batchDelete',(req,resp)=>{
  teacherDB.batchDelete(req.body).then(function(results){
    resp.send(results);
  }).catch(function(error){
    resp.send(error);
  });
});
//删除一个
router.post('/delete',(req,resp)=>{
  var teacher = new Teacher();
  Object.assign(Teacher,req.body);
  teacherDB.delete(Teacher).then((results)=>{
    resp.send(results);
  }).catch((error)=>{
    resp.send(error);
  })
});

module.exports = router;