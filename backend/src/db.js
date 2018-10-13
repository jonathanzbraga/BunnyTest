import mongoose from 'mongoose';

export default callback => {
	mongoose.connect('mongodb://mongo:27017');
	mongoose.Promise = global.Promise;

	callback();
}
