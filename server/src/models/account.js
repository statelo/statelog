import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const Account = new Schema({
  username: String,
  password: String
});

Account.plugin(passportLocalMongoose);

export default mongoose.model('Account', Account);
