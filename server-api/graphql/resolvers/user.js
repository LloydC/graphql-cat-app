const User = require("../../models/User")

module.exports = {
    createUser: (args) => {
        const user = new User({
            name: args.userInput.name,
            email: args.userInput.email,
            password: args.userInput.password,
            cat: args.userInput.cat,
        })

        user.save()
        return user;
    },
    getUser: (args) => {
        const foundUser = User.findById(args.userId).populate('cat')
        return foundUser;
    }
}