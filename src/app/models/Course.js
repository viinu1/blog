const mongoose = require('mongoose');
const  Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug);

const Course = new Schema({
    // author:ObjectId,
    name:{type: String, maxLength:255,require:true},
    description:{type:String , maxLength:600},
    image:{type:String, maxLength:255},
    videoID:{type:String},
    level:{type:String},
    slug: { type: String, slug: 'name',unique:true }
},{
    timestamps:true
})

module.exports = mongoose.model('Course',Course)
