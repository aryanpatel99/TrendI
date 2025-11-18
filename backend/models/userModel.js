const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // cartData: { type: Object, default: {} },
    cartData: {type: Map, of: Number, default: {}},
  },
  { minimized: false }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

module.exports = userModel;
