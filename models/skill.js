const { get } = require("../routes");

const skills = [
    {skill: 'JavaScript', 
    action: 'adding models and controllers',
    used: true },
    {skill: 'Express.js',
    level: 'express objects to define routes',
    used: true},
    {skill: 'MongoDB',
     used: true, action: 'integrated to application'},
    {skill: 'mongoose',
    used: true, action: 'install library'}

];
 module.exports = {
    getAll
 };

 function getAll () {
    return skills;
 }
