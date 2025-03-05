import { error } from "console";
import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
import { prototype } from "events";

const PORT=process.env.PORT ||5000;
connectToDatabase()
  .then(()=>{
    app.listen(PORT,()=>console.log("Server Running  less gooo"));
  
})
.catch((error)=>console.log(error));
