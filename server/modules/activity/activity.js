function Activity() {
  this.model = "none";
  this.title = "none";
  this.log_type = "none";
  this.db = require("../models/Activity");
}

Activity.prototype.add = async function (userId, pipeline) {
  let data = {};

  data.userId = userId;
  data.collections = this.model.modelName;
  data.title = this.title;
  data.log_type = this.log_type;
  data.docModel = this.model.modelName;
  data.data = await this.model.findOne(pipeline);
  this.db.create(data);
};

Activity.prototype.get = async function (pipeline) {

  let data =  await this.db.find(pipeline).populate('userId').populate("doc");
  console.log("sdf",data[0].doc); // "The Count of Monte Cristo"

  return data
};

Activity.prototype.delete = function () {};

module.exports = new Activity();
