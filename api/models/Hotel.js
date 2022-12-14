import mongoose from "mongoose";
const { Schema } = mongoose;

const hotelSchema = new Schema({
  name: {
    type: String,
    requied: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheepestPrice: {
    type: Number,
    required: true,
  },
  features: {
    type: Boolean,
    required: false,
  },
});


export default mongoose.model("Hotel" ,hotelSchema )