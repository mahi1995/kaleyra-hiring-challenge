var jwt = require('jsonwebtoken');
const crypto = require('crypto');
var createError = require('http-errors');

var secret = require('../config/index.config').SECRET
const users = require('../models/userModel').users

module.exports.login = async (req, res, next) => {
    try {
        let userName = req.body.userName
        const hash = crypto.createHash('sha256');
        let password = hash.update(req.body.password).digest('hex')
        if (userName && password) {
            let user = await users.findOne({
                userName,
                password
            })
            if (user) {
                let token = jwt.sign({
                    userName
                }, secret, {
                    expiresIn: 60 * 60
                });
                res.statusCode = 200
                res.json({
                    token
                })
            } else {
                return next(createError(401))
            }

        } else {
            return next(createError(400))
        }
    } catch (err) {
        next(err)
    }
}