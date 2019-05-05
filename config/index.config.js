var prod = require('./prod.config')
var test = require('./test.config')
var dev = require('./dev.config')
if(process.env.NODE_ENV=='prod'){
    module.exports = prod;
}else if(process.env.NODE_ENV=='test'){
    module.exports = test;
}else{
    module.exports = dev; 
}