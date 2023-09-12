
import errorHandler from "../middlewares/errore.js";
import {Task} from "../models/task.js"

export const newTask = async(req,res,next) =>{

try {
    const {title,description} = req.body;

await Task.create({
    title,
    description,
    user: req.user,

})
res.status(201).json({
    success: true,
    message: "Tash added Successfully",
})


} catch (error) {
    next(error);
}
}
export const getMyTask = async (req , res , next) => {

    try {
        const userid = req.user._id;
    console.log("userid",userid)

    const tasks = await Task.find({user: userid});
    console.log(tasks)

   res.status(200).json({
    succes: true,
    tasks,
   })

    } catch (error) {
         next(error)        
    }

};




export const updateTask = async (req , res , next) => {
 
try {
    const task = await Task.findById(req.params.id);

if (!task) return next (new errorHandler ("Task not fund", 400));

task.isCompleted = !task.isCompleted;
 const taskSave =  await task.save()
   
res.status(200).json({
    success: true,
    message: "Task Update!"
    
   })

} catch (error) {
    next(error)
}
};





export const deleteTask = async (req , res , next) => {

try {
    const task = await Task.findById(req.params.id);
   
    if (!task) return next (new errorMiddleware("Task not found", 404));

   const deleteTask = await task.deleteOne();
    
  res.status(200).json({
   succes: true,
   message: "Task deleted!"

  })

} catch (error) {
    next(error)   
}

};