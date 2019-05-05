var keys = require('./api.keys')
module.exports={
    PORT : parseInt(process.env.PORT) || 5000,
    DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/disaster-help-dev',
    SECRET: process.env.SECRET || 'shhhh' ,
    SMS_API: process.env.SMS_API || keys.SMS_API,
    VOICE_API: process.env.VOICE_API || keys.VOICE_API,
    VOICE_BASE_URL : process.env.VOICE_BASE_URL || 'https://api-voice.kaleyra.com/v1/?',
    SMS_BASE_URL : process.env.SMS_BASE_URL || 'https://api-promo.kaleyra.com/v4/?'
}