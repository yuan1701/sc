require('babel-polyfill');
let Student = require('../model/Student');
// let studentDB = require('./studentDB');
let studentDB = require('./studentCourseDB');

测试查询所有的信息
studentDB.findAll().then(function(results){
	console.log(results);
}).catch(function(error){
	console.log("报错了！",error)



/*
测试通过id查询
studentDB.findById('4').then(function(results){
	console.log(results);
}).catch(function(error){
	console.log("报错了！",error)
})
*/

/*
测试通过关键字进行查询
studentDB.query('张').then(function(results){
	console.log(results);
}).catch(function(error){
	console.log("报错了！",error)
})
*/

/*
//保存
var student = new Student(null,'赵六','男','1995-09-1');
studentDB.save(student).then(function (results) {
	// body...
	console.log(results);
}).catch(function(error){
	console.log("报错了！",error)
});
*/


// //修改
// var student = new Student(8,"刘琦",'男','1995-09-01');
// studentDB.update(student).then(function(results){
// 	console.log(results);
// }).catch(function(error){
// 	console.log('报错了！',error);
// })


/*
//删除
var ids = [9,10];
studentDB.batchDelete(ids).then(function(results){
	console.log(results);
}).catch(function(error){
	console.log('报错了！',error);
})
*/