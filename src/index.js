
//require ('dotenv').config({path: './env'});
import dotenv  from "dotenv"
import app from "./app.js"
import connectDB from "./db/db.js"



dotenv.config({
    path:'./.env'
})
//const app =express();



connectDB()
.then(()=>{
     app.listen(process.env.PORT || 8000, ()=>{
          console.log(` server is runing  at port ${process.env.PORT}`);
     })
})
.catch((err) =>{
   console.log("MANGO  db  connetcion  failed  !!! ",err);

})

/*

(async ()=>{
     try{
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

      app.on("error",()=>{
          console.log("ERRR :" , error);
          throw error
      })

      app.listen(process.env.PORT,()=>{
        console.log(`App  is listing on the port ${process.env.PORT}`);
      })
     }catch(error){
        console.error("ERRORE :",error);
     }
})()

*/