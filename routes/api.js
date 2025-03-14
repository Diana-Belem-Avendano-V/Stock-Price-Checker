'use strict';

const mongodb = require('mongodb')
const mongoose = require('mongoose')

module.exports = function (app) {

  let uri ='mongodb+srv://Diana:uBguB6uEqPGKa3Xf@cluster0.i95ex.mongodb.net/stock_price_checker?retryWrites=true&w=majority&appName=Cluster0'

  mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true })

  let stockSchema = new mongoose.Schema({
    name: {type: String, required: true},
    likes: {type: Number, default: 0},
    ips: [String]
  })
  
  let Stock = mongoose.model('Stock', stockSchema)
  
  app.route('/api/stock-prices')
    .get(function (req, res){
      
    });
    
};
