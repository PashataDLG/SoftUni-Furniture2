const Furniture = require('../models/Furniture');

exports.getAll = (query) => {
    if (query) {
        const userId = query.split('=')[1].slice(1, -1);
        return Furniture.find({ _ownerId: userId });
    };

    return Furniture.find();
};

exports.createFurniture = (furnitureData) => Furniture.create(furnitureData);

exports.getById = (furnitureId) => Furniture.findById(furnitureId);

exports.updateFurniture = (furnitureId, furnitureData) => Furniture.findByIdAndUpdate(furnitureId, furnitureData);

exports.deleteFurniture = (furnitureId) => Furniture.findByIdAndDelete(furnitureId);