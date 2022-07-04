const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({
    make: {
      type: String,
      minlength: [4, 'The make field must contains at least 4 characters']
    },
    model: {
      type: String,
      minlength: [4, 'The model field must contains at least 4 characters']
    },
    year: {
        type: Number,
        min: [1950, 'Year must be between 1950 and 2050'],
        max: [2050, 'Year must be between 1950 and 2050'],
    },
    description: {
        type: String,
        minlength: [11, 'The description must be at least 11 characters long'], 
    },
    price: {
        type: Number,
        min: [0.01, 'The price must be a positive number'],
    },
    img: {
        type: String,
        required: true,
    },
    material: {
        type: String,
        required: false,
    },
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

const Furniture = mongoose.model('Furniture', furnitureSchema);

module.exports = Furniture;