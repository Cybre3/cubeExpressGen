const mongoose = require("mongoose");
const Cube = require('./Cube');

  const AccessorySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String,
        required: true,
    },
    image_URL: { 
        type: String,
        required: true
    },
    cube: {
      type: Number,
      ref: 'Cube'
    }

  });

  const Accessory = mongoose.model('Accessory', AccessorySchema);

  module.exports = Accessory;