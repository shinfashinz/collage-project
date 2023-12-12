import admin_schema from './admin.model.js'
import staff_schema from './staff.model.js'
import student_schema from './student.model.js'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import pkg from "jsonwebtoken";
import { Schema } from 'mongoose';
const {sign}=pkg

export async function addAdmin(req,res){
    try {
        const {name,username,password}=req.body;
        console.log(name,username,password);
        if(!(name&&username&&password))
        return res.status(404).send("fields are empty")
    
        bcrypt.hash(password,10)    
        .then((hashedPwd)=>{
            admin_schema.create({name,username,password:hashedPwd});
        })
        .then(()=>{
            res.status(201).send("sucessfully registered")
        })
      .catch((error)=>{
        res.status(500).send(error)
       })
        
       } catch (error) {
        console.log(error);
    
    }
    
}



export async function adminLogin(req, res) {
    try {
     console.log(req.body);
     const { username, password } = req.body;
     const usr = await admin_schema.findOne({ username })
     console.log(usr);
     if (usr === null) return res.status(404).send("username or password doesnot exist");
     const success =await bcrypt.compare(password, usr.password)
     console.log(success);
     if (success !== true) return res.status(404).send("username or password doesnot exist");
     const token = await sign({ username }, process.env.JWT_KEY, { expiresIn: "24h" })
     console.log(token);
     res.status(200).send({ msg: "successfullly login", token })
     res.end();
     
    } catch (error) {
     console.log(error); 
}
}


export async function addStaff(req,res){
    try {
        console.log("hai",req.body);
        const {admin,empid,name,username,phone,password,confirmpassword,email,designation,salary,expirience,address,photo}=req.body;
        console.log(admin,empid,name,username,phone,password,confirmpassword,email,designation,salary,expirience,address,photo);
        if(!(admin&&empid&&name&&username&&phone&&password&&confirmpassword&&email&&designation&&salary&&expirience&&address&&photo))
        return res.status(404).send("fields are empty")
        if(password!=confirmpassword)
        return res.status(404).send("password and confirm password are not same")
       
        bcrypt.hash(password,10)    
        .then((hashedPwd)=>{
            staff_schema.create({admin,empid,name,username,phone,password:hashedPwd,confirmpassword,email,designation,salary,expirience,address,photo});
        })
        .then(()=>{
            res.status(201).send("sucessfully registered")
        })
      .catch((error)=>{
        res.status(500).send(error)
       })
        
       } catch (error) {
        console.log(error);
    
    }
}

export async function staffLogin(req, res) {
    try {
     console.log(req.body);
     const { username, password } = req.body;
     const usr = await staff_schema.findOne({ username })
     console.log(usr);
     if (usr === null) return res.status(404).send("username or password doesnot exist");
     const success =await bcrypt.compare(password, usr.password)
     console.log(success);
     if (success !== true) return res.status(404).send("username or password doesnot exist");
     const token = await sign({ username }, process.env.JWT_KEY, { expiresIn: "24h" })
     console.log(token);
     res.status(200).send({ msg: "successfullly login", token })
     res.end();
     
    } catch (error) {
     console.log(error); 
}
}

export async function getFullstaff(req,res){
    let task=await staff_schema.find()
    res.status(200).send(task)
}

export async function getfullDetails(req,res){
    const{id}=req.params;
    console.log(id);
    let task=await staff_schema.findOne({_id:id})
    console.log(task);
    res.status(200).send(task)
}

export function deleteStaff(req,res)
{
    const{id}=req.params;
    const data=staff_schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)          
    }).catch((error)=>{
        res.status(404).send(error)
    })
}

export async function editStaff(req, res) {
    const { id } = req.params;
    try {
        const updatedData = req.body;
        const value = await staff_schema.updateOne({ _id: id }, { $set: updatedData });
        res.status(200).send(value);
    } catch (error) {
        res.status(404).send(error);
    }
}

export async function forgotUsername(req,res){
    const phone=req.params;
    console.log(phone);
    let task=await staff_schema.findOne(phone)
    console.log(task);
    res.status(200).send(task)
}

export async function staffFrgtPwd(req, res) {
    const phone = req.params;
    try {
        const updatedData = req.body;
        const value = await staff_schema.updateOne({phone:phone}, { $set: updatedData });
        res.status(200).send(value);
    } catch (error) {
        res.status(404).send(error);
    }
}

export async function addstudent(req,res){
    try {
        console.log(req.body);
        
        const{studentid,fullname,username,password,course,batch,semester,dob,bloodgroup,intphy,intche,intmath,physics,chemistry,maths,attendance,photo}=req.body;
        console.log(studentid,fullname,username,password,course,batch,semester,dob,bloodgroup,intphy,intche,intmath,physics,chemistry,maths,attendance,photo);
        if(!(studentid&&fullname&&username&&password&&course&&batch&&semester&&dob&&bloodgroup&&intphy&&intche&&intmath&&physics&&chemistry&&maths&&attendance&&photo))
        return res.status(404).send("fields are empty")
        bcrypt.hash(password,10)   
        .then((hashedPwd)=>{
            student_schema.create({studentid,fullname,username,password,course,batch,semester,dob,bloodgroup,intphy,intche,intmath,physics,chemistry,maths,attendance,photo})
        })
        .then(()=>{
            res.status(201).send("sucessfully registered")
        })
        .catch((error)=>{
            res.status(500).send(error)
           })
    

    } 
catch (error) {
    console.log(error);

    }
}
