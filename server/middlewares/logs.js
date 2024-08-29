const Logs = require("../models/Logs");
const userActivity = (req, res, next) => {

  let ips = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    
  let log_type =  'url';
  let ip =  ips;
  let method =  req.method;
  let path =  req.originalUrl;
  let headers =  JSON.stringify(req.headers);
  let query =  JSON.stringify(req.query);
  let body =  JSON.stringify(req.body);
  Logs.create({ip,log_type,method,headers,query,body,path})
  next();
};

module.exports = userActivity;
