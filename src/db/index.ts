import mongoose, { ConnectOptions } from 'mongoose';
import '../schemas';

export default () => {
  const db = process.env.DB || 'mongodb://localhost:27017/test';

  const connectDB = () => {
    mongoose
      .connect(db, { useNewUrlParser: true } as ConnectOptions)
      .then(() => {
        return console.info(`Successfully connected to ${db}`);
      })
      .catch(error => {
        console.error('Error connecting to database: ', error);
        return process.exit(1);
      });
  };
  connectDB();

  mongoose.connection.on('disconnected', connectDB);
};
