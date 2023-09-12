import mongoose from "mongoose";

////data base add


export const connectDB = () => {
    mongoose
    .connect(process.env.MONGO_URL,{
        dbName: "backendapi",
    })
    .then(() => console.log("Database Connected"))
    .catch((e)=> console.log(e));
}
