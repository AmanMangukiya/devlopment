import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"



const connectDB = async () =>{

    try{

      const  connection_db = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      console.log(`\n mongo connected  ${connection_db.connection.host }`);
         
    }catch (error){
        console.log("mongo connection error ",error);
        process.exit(1);
    }

}
export default connectDB