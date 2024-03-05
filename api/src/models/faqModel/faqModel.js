import mongoose from 'mongoose';
const { Schema } = mongoose;

const faqSchema = new Schema({
    
  question:{type:String},
  answer: {type:String},   

},{timestamps:true});

const Faqs = mongoose.model('Faqs', faqSchema);

export default Faqs