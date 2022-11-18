import mongoose from 'mongoose';

const mongoString = `mongodb+srv://${process.env.DB_USER}:${process.env.BB_PASSWORD}@cluster0.w6uzw0s.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
async function connectDb() {
  try {
    
    mongoose.connect(mongoString);
    const database = mongoose.connection;

    database.on("error", (error: any) => {
      console.log(error);
    });

    database.once("connected", () => {
      console.log("Database Connected");
    });
  } catch (error) {
    console.log(error)
  }
}

export default connectDb;
