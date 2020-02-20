import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();
const connectionUri: string = process.env.DB || "";

const mongoConnection = mongoose.connect(connectionUri, { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Successfully Established Connection with MongoDB')
    }
    else {
        console.log('Failed to Establish Connection with MongoDB with Error: ' + err)
    }
});

export default { mongoConnection };