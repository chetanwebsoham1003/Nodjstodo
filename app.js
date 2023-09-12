import  express from "express";
import userRouter from "./routes/user.js"
import TaskRouter from "./routes/task.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import {errorMiddleware} from "./middlewares/errore.js"
import cors from "cors";





export const app = express();

config({ path: "./data/config.env",})



app.use("/users",userRouter);

//using routes
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin : [process.env.FRONTEND_URL],
    methods : ["GET" , "POST" , "PUT" , "DELETE"],
    credentials: true,
}));



app.use("/api/v1/user",userRouter);
app.use("/api/v1/task",TaskRouter);

//rout
app.get("/",(req,res)=>{ res.send("nice working")
})

//Using Middleware
app.use(errorMiddleware);


