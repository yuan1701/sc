let express = require('express');

let clazzDB = require('../db/clazzDB');
let Clazz = require('../model/Clazz');
let router = express.Router();

    //查询所有
    router.get('/findAll',function(req,resp){
        clazzDB.findAll().then(function(data){
            resp.send(data);
        }).catch(function(error){
            resp.send(error);
        })
    });
    //通过id查询
    router.get('/findById',function(req,resp){
        clazzDB.findById(req.query.id).then(function(data){
            resp.send(data);
        }).catch(function(error){
            resp.send(error);
        })
    });
    //模糊查询(通过关键字)
    router.get('/query/:keys',function(req,resp){
        clazzDB.query(req.params.keys).then(function(data){
            resp.send(data);
        }).catch(function(error){
            resp.send(error);
        })
    });
    //添加(保存)
     router.post('/save',function(req,resp){
        let clazz = new Clazz();
        Object.assign(clazz,req.body);
        clazzDB.save(clazz).then(function(data){
            resp.send(data);
        }).catch(function(error){
            resp.send(error);
        })
    });
    //修改(更新)
    //  route.post('/updata',function(req,resp){
    //    let clazz = new Clazz();
    //     Object.assign(clazz,req.body);
    //     clazzDB.update(clazz).then(function(data){
    //         resp.send(data);
    //     }).catch(function(error){
    //         resp.send(error);
    //     })
    // });
    router.post('/update',(req,resp)=>{
        var clazz = new Clazz();
        Object.assign(clazz,req.body);
        clazzDB.update(clazz).then((results)=>{
            resp.send(results);
        }).catch((error)=>{
            resp.send(error);
        })
    });
    //删除
    router.post('/batchDelete',function(req,resp){
        clazzDB.batchDelete(req.body).then(function(data){
            resp.send(data);
        }).catch(function(error){
            resp.send(error);
        })
    });
    //删除一个
    router.post('/delete',(req,resp)=>{
        var clazz = new Clazz();
        Object.assign(clazz,req.body);
        clazzDB.delete(clazz).then((results)=>{
            resp.send(results);
        }).catch((error)=>{
            resp.send(error);
        })
    });
    
module.exports = router;