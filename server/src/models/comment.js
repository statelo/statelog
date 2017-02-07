import mongoose from 'mongoose'
mongoose.Promise = global.Promise;

const commentSchema = mongoose.Schema({
  text: String
});

export default mongoose.model('Comment', commentSchema)
