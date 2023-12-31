const mongoose=require('mongoose')

const PostSchema= new mongoose.Schema({
    category: {
        type: String,
        required: true },
    title: {
        type: String,
        required: true },
    cover: {
        type: String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQc9dZn33Wnk-j0sXZ19f8NiMZpJys7nTlA&usqp=CAU" },
    readTime: {
        value:{
            type: Number,
            required: false },
        unit:{
            type: String,
            required: false } },
    author: {
        name:{
            type: String,
            required: true },
        avatar:{
            type: String,
            default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQc9dZn33Wnk-j0sXZ19f8NiMZpJys7nTlA&usqp=CAU" } },
    content: {
        type: String,
        required: true },
    postComments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'commentModel',
        required: false }]   
},{ timestamps: true, strict: true} )

    module.exports=mongoose.model('postModel',PostSchema,'posts')