import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const Comment = mongoose.Schema({
  text: String
});

export default mongoose.model('Comment', Comment);
