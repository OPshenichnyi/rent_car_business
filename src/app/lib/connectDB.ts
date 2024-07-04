// https://www.youtube.com/watch?v=wNWyMsrpbz0 video link for the connectDB.ts file
import mongoose from 'mongoose';
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || '');
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
