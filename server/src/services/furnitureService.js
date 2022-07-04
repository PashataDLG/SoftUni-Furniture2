const Furniture = require('../models/Furniture');

exports.getAll = () => Furniture.find();

exports.createFurniture = (furnitureData) => Furniture.create(furnitureData);

exports.getById = (furnitureId) => Furniture.findById(furnitureId);

exports.updateFurniture = (furnitureId, furnitureData) => Furniture.findByIdAndUpdate(furnitureId, furnitureData);

exports.deleteFurniture = (furnitureId) => Furniture.findByIdAndDelete(furnitureId);