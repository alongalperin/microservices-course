import mongoose from "mongoose";

const userScema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userScema);

new User({
  email: "test@test.com",
  password: "alsasaf",
});

export { User };
