const mongoose = require("mongoose");
const Cube = require('./Cube');

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
    cubes: {
      objectId: mongoose.Types.ObjectId,
      ref: Cube
    }

  });