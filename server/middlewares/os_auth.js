// const verifyToken = (req, res, next) => {
//   let osToken = req?.openstack?.token.data?.token;
//   //fetch from db
//   if (!osToken) {
//     return res.status(403).send({ message: "No token provided!" });
//   }
//   req.token = osToken;
//   next();
// };

// module.exports = verifyToken;


const verifyToken = (req, res, next) => {
  let token = req?.openstack?.token;
  let project = req?.openstack?.project;
  if (!token) {
    return res.status(403).send({ message: "OS Access Denied!" });
  }
  req.token = token;
  req.project = project;
  next();
};

module.exports = verifyToken;
