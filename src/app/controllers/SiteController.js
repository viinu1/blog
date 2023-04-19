const Course = require('../models/Course')
const {multipleMongooseToOject} = require('../../util/mongoose')

class SiteController {
    // GET home
    index(req, res,next) {
        Course.find()
            .then((courses)=>{
                res.render('home',{
                    courses:multipleMongooseToOject(courses)
                })
            })
            .catch(next)
    }

    // get Search
    search(req, res) {
        res.render("search");
    }
}

module.exports = new SiteController();
