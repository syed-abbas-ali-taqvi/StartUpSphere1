const mongoose = require('mongoose');

const JobSchema =  new mongoose.Schema({

    title: {type: String , required: true},
    location: {type: String , required: true},
    description: {type: String , required: true},
    founderName: {type: String , required: true},
    valuation: {type: String , required: true},
    timespan: {type: String , required: true},
    contract: {type: String , required: true},
    seekingInvestment: {type: Boolean , required: true, default: true},
    requirements: {
    type: Array,
    required: true,
    },
    imageUrl:{ type: String, required: true},
    founderId:{ type: String, required: true},

    
},{ timestamps: true}); 

module.exports = mongoose.model('Job', JobSchema);