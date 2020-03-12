  
const mongoose = require('mongoose');
const uri = "mongodb+srv://friendly:Oskar007@cluster0-w4er1.gcp.mongodb.net/test?retryWrites=true&w=majority"

const connectDB = async () => {
	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB CONNECTED.');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;