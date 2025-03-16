const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  details: String,
  imageSrc: String,
  imageAlt: String,
  date: String,
  tags: [String],
  isDeleted: {
    type: Boolean,
    default: false
  },
  deletedAt: {
    type: Date,
    default: null
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true
  }
});

module.exports = mongoose.model('Post', postSchema);
