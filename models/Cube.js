const mongoose = require("mongoose");
const Accessory = require('./Accessory');

  const cubeSchema = new mongoose.Schema({
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
    level: {
        type: Number,
        required: true
    },
    accessories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Accessory'
    }],
    creatorId: {
        type: String,
        required: true
    }

  });

  const Cube = mongoose.model('Cube', cubeSchema);
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const Accessory = require('./accessory');


// const cubeSchema = new Schema({
//   name: String,
//   description: String,
//   image_url: String,
//   level: { type: String, required: true },
//   accessories: [{ type: Schema.Types.ObjectId, ref: 'Accessory'}]

// })

// const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;
