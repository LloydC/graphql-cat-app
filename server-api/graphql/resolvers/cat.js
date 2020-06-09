const Cat = require("../../models/Cat")

module.exports = {
    cats:  (args) => {
        const cats = Cat.find()
        return cats;
    },
    createCat: (args) => {
        const cat = new Cat({
            name: args.catInput.name
        })

        cat.save()
        return cat;
    }
}