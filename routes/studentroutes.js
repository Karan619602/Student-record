const Student=require('../model/studentmodel.js')
const express=require('express')
const router=express.Router();


// to create the student record => /api/register
router.post('/register',async (req,res)=>{
    const register= await Student.create(req.body);
    res.send(register);
})

// to get all students record => /api/get/allstudents
router.get('/get/allstudents',async (req,res)=>{
    const Allstudents= await Student.find();
    const count= await Student.countDocuments()
    res.status(201).json({
        success:true,
        count,
        Allstudents
    });
})
// to get specific student record => /api/get/student/:id
router.get('/get/student/:id',async (req,res)=>{
    const getStudent= await Student.findById(req.params.id);
    res.status(201).json({
        success:true,
        getStudent
    });
})


// to update specific student record => /api/update/student/:id
router.put('/update/student/:id',async (req,res)=>{
    let  updateProduct =await  Student.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
    
        res.status(201).json({
            success:true,
            updateProduct
        })
    })

    // to delete specific student record => /api/delete/student/:id
    router.delete('/delete/student',async (req,res)=>{
        const deleteStudent =await  Student.findByIdAndDelete(req.params.id);
    
    
        res.status(201).json({
            success:true,
            deleteStudent
        })    })

    module.exports =router