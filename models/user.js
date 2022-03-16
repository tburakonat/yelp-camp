const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email cannot be empty"],
        unique: [true, "Please choose another username"]
    }
})
// Adding the username and password for the UserSchema
UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema);
