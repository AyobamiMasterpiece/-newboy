const express = require('express');
 const router = express.Router()
 const students = require('./json')
 console.log(students)

 router.route('/')
 .get((req,res)=>{
    res.json(students)
 })
 .post((req,res)=>{
    res.json({
        a:1,
        b:2
    })
 })
 .put((req,res)=>{
    res.json(students.age)
 })
 .delete((req,res)=>{
    res.json(students.studentid)
 })





 
 router.route('/:1d')
 .get((req,res)=>{
    res.json(students)
 })
 .post((req,res)=>{
    res.json({
        a:1,
        b:2
    })
 })
 .put((req,res)=>{
    res.json(students.age)
 })
 .delete((req,res)=>{
    res.json(students.studentid)
 })
 module.exports=router