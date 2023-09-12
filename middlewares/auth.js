import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async(req,res,next) => {
    
    const { token }  = req.cookies;
    
    if(!token){
        return res.json({
            success:false,
            message:"login first"
        })
    }

    let decode = jwt.verify(token,process.env.JWT_SECRET)
    console.log('decode',decode);

    req.user = await User.findById(decode._id);
    next();    


};
