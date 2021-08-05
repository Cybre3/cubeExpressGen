const mongoose = require("mongoose");
// const mongoose = require("mongoose");

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
    id: thi.id

  });