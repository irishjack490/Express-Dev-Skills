const express = require('express');
const router = express.Router();


//Deleted some code that was here

const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
