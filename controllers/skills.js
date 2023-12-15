function index(req, res){
    res.render('skills/index',{
        skills: skills.getAll()
    });
};

module.exports = {
    index
};

const Skill = require('../models/skill');
