const Furniture = require('../models/Furniture');

exports.createFurniture = (furnitureData) => Furniture.createFurniture(furnitureData);

exports.getAll = () => Furniture.find();