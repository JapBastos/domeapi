'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true,
    default: "0"
  },
  slug: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: true
  },
  create_date: {
    type: Date,
    required: true,
    default: Date.now
  },
  read_only: {
    type: Boolean,
    required: true,
    default: false
  },
  on_status: {
    type: Boolean,
    required: true,
    default: false
  },
});

module.exports = mongoose.model('Nodes', schema);
