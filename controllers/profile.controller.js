const users = require('../models/userModel').users
module.exports.user = async (req, res, next) => {
    try {
            let user = await users.findOne({
                userName:req.userName
            })
            if (user) { 
                //console.log(user)
                delete user.password
                res.statusCode = 200
                res.json({   
                    user 
                })
            } else {
                return next(createError(400))
            }
    } catch (err) {
        next(err)
    }
}