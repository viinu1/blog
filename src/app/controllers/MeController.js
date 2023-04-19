const Course = require('../models/Course')
const {multipleMongooseToOject} = require('../../util/mongoose')

class SiteController {
    // [GET] me/stored/courses
    storedCourses(req, res,next) {
        Course.find({})
            .then((course) => res.render("me/stored-courses",{
                courses:multipleMongooseToOject(course),
                
            }))
        
    }
}

module.exports = new SiteController();
