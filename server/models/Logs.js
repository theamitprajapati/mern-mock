const mongoose = require("mongoose");

function expireAt() {
  return new Date(Date.now() + 2592000*1000); //1 days in milliseconds
}

const SchemaName = new mongoose.Schema(
  {
    ip:String,
    log_type:String,
    path:String,
    headers: String,
    method: String,
    query: String,
    body: String,
    meta:String,
    expireAt: {
      type: Date,
      default: expireAt,
    },
  },
  {
    timestamps: { updatedAt: false },
  }
);
SchemaName.index({ expireAt: 1   },{ expireAfterSeconds: 2592000 } ); // 1 days in seconds

module.exports = mongoose.model("logs", SchemaName);
