var jwt = require('jsonwebtoken');
var createError = require('http-errors');
var secret = require('../config/index.config').SECRET

module.exports.authenticate=(req,res,next)=>{
    let token  = req.headers.authorization;
    jwt.verify(token,secret,(err,decoded)=>{
        if(err){
            return next(createError(401))
        }else{
            req['userName']=decoded.userName
            next()
        }
    })
}