import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogTagSchama = new Schema({
 
 blogTagsName:String,
 blogs:[{
  type:Schema.Types.ObjectId,
  ref:"Blogs"
 }]

},{timestamps:true});

const BlogTags = mongoose.model('BlogTags', blogTagSchama);

export default BlogTags