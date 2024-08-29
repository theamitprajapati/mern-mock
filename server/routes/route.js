// Declare all routes in rote config file

const path = require("path");
// const usersRouter = require("./users");
const authRouter = require("./auth");
const dashboardRouter = require("./dashboard");

 
//Controller
const locker = require("../modules/locker");
const osAuth = require("../middlewares/os_auth");


module.exports = (app) => {
  //General Routers
  app.use("/api/auth/",authRouter);
  app.use("/api/dashboard",[locker.unlock(),osAuth], dashboardRouter);


 
  //Other router
  app.use("/api/*", (req, res, next) => {
    res.reply({ statusCode: 404 });
  });
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
};
