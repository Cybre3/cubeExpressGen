const mongoose = require("mongoose");
// const mongoose = require("mongoose");
// Mongo DB Connection




  const cubeSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String,
        required: true,
    },
    ImageURL: { 
        type: String,
        required: true
    },
    difficultyLevel: {
        type: Number,
        required: true
    },
    accessories: {
        objectId: this.id,
    }

  });

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

// module.exports = Cube;
