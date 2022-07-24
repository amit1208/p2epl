const { application } = require('express')
const express=require('express')
const mongoose=require('mongoose')
const app=express()
const TaskModel=require('./model')
const cors =require('Cors')

app.use(express.json())
app.use(cors())

// mongoose.connect('mongodb+srv://Amit_MongoDB:Mynameis0@cluster0.0alpo.mongodb.net/?retryWrites=true&w=majority/Task',()=>{
// mongoose.connect('mongodb/localhost:27017/Task',()=>{
mongoose.connect('mongodb+srv://Amit_MongoDB:Mynameis0@cluster0.0alpo.mongodb.net/test',()=>{
    console.log('MongoDB is connected')
})


app.delete('/delete/:id',async(req,res)=>{
    const garbage= await TaskModel.findByIdAndRemove(req.params.id)
    res.send("testimonial deleted")
})

app.get('/view',async(req,res)=>{
    const viewer= await TaskModel.find()
    res.send(viewer)
})
app.get('/view/:id',async(req,res)=>{
    const viewer= await TaskModel.findById(req.params.id)
    res.send(viewer)
})

app.patch('/update/:id',async(req,res)=>{
    const alien = await TaskModel.findByIdAndUpdate(req.params.id,)

    const a1= alien.save()
})

app.post('/Add',async(req,res)=>{
    const {Photo,Name,Post,Testimonial_Description,Active}=req.body;

    try {
        const user= await TaskModel.create({Photo,Name,Post,Testimonial_Description});
        
        // user.save();
        res.status(400).json('thanks')   
        res.json(user)
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
        
    }


})
app.listen(5000,()=>{
    console.log('server running on port 5000');
})