const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
    username: { type: String, required: true},
    email: {type: String, required: true },
    password: { type: String, required: true }    
});

userSchema.methods = {
    checkPassword: function(inputPassword){
        return bcrypt.compareSync(inputPassword, this.password);
    },

    hashPassword: plainPassword => {
        return bcrypt.hashSync(plainPassword, 10);
    }
}

userSchema.pre('save', function(next) {
    if(!this.password) {
        console.log('NO PASSWORD PROVIDED');
        next()
    } else {
        console.log('hashPassword in pre save')
        this.password = this.hashPassword(this.password);
        next()
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;