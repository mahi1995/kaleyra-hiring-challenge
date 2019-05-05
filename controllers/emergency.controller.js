var createError = require('http-errors');
var request = require('request');
var voiceBaseUrl = require('../config/index.config').VOICE_BASE_URL
var voiceAPIKey = require('../config/index.config').VOICE_API
var smsBaseUrl = require('../config/index.config').SMS_BASE_URL
var smsAPIKey = require('../config/index.config').SMS_API

module.exports.call = async (req, res, next) => {
    try {
        let caller = req.body.caller
        let receiver = req.body.receiver
        let url = `${voiceBaseUrl}api_key=${voiceAPIKey}&method=dial.click2call&caller=${caller}&receiver=${receiver}`
        request(url, function (error, response, body) {
            res.statusCode = response.statusCode
            res.json(response)
        });
    } catch (err) {
        next(err)
    }
}
module.exports.message = async (req, res, next) => {
    try {
        let contacts = req.body.contacts.trim()
        let message = req.body.message
        let url = `${smsBaseUrl}api_key=${smsAPIKey}&message=${message}&sender=BULKSMS&to=${contacts}&method=sms`
        request(url, function (error, response, body) {
            res.statusCode = response.statusCode
            res.json(body)
        });
    } catch (err) {
        next(err)
    }
}