import mongoose from "mongoose";

export default async function connectDB(){
    try {
      const conn = await mongoose.connect(process.env.CONNECTION_URL,{
        useNewUrlParser: true,
    })
    console.log("Conected to Host: "+conn.connection.host);
    } catch (error) {
      console.log(error)
    }
  }