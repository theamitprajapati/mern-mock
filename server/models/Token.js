const mongoose = require("mongoose");


function expireAt() {
  return new Date(Date.now() + 86400*1000); //1 days in milliseconds
}

var Schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    type: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
    username: {
      type: String,
      //required: true,
    },
    is_mail_verified: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
     // required: true
    },
    expireAt: {
      type: Date,
      default: expireAt,
    },
  },
  {
    timestamps: true
  }
);
//Schema.index({ expireAt: 1   },{ expireAfterSeconds: 86400 } ); // 1 days in seconds

module.exports = mongoose.model("tokens", Schema);


