//  Add your code here
const { Schema, model } = require("mongoose");
const celebritySchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true,
      },
      occupation: String,
      catchPhrase: String,
      rating: Number,
    });
  
  const Celebrity= model("Celebrity", celebritySchema);
  
  module.exports = Celebrity;