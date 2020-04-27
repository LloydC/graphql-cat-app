const mongoose = require('mongoose');

const Cat = mongoose.model('Cat', { name: String });

module.exports = {Cat};
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));