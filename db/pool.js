//连接池
var mysql = require('mysql');
let pool  = global.pool;
if(!pool){
	pool = mysql.createPool({
		database:'web1701',
		user:'root',
		password:'root'
	});
	global.pool = pool;
}

module.exports = {
	//获取链接
	getConnection(){
		//异步操作用promise
		return new Promise(function(resolve,reject){
			pool.getConnection(function(err,connection){
				if(!err){
					resolve(connection)
				}else{
					reject(err)
				}
			});
		});
	},
	execute(sql){
		var _this = this;
		return new Promise(function(resolve,reject){
			let conn;
			_this.getConnection().then(function(connection){
				conn = connection;
				connection.query(sql,function(err,results){
					if(!err){
						resolve(results)
					}else{
						reject(err)
					}
				})
			}).catch(function(error){
				reject(err)
			}).finally(function(){
				if(conn){
					conn.release();
				}
			});
		});
	}
}