const mongoose = require("mongoose");
const {} = mongoose.Schema;

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      index: true,
    },
    role: {
      type: String,
      default: "subscriber",
    },
    cart: {
      type: Array,
      default: [],
    },
    address: String,
    // wishlist:[{typ}]
  },
  {
    timestamps: true,
  }
);
const usersModel = mongoose.model("User", usersSchema);
module.exports = usersModel;
