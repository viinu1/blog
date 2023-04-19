const Course = require('../models/Course')
const {mongooseToOject} = require('../../util/mongoose')

class CourseController {
    // get courses/:slug
    show(req, res,next) {
        Course.findOne({slug: req.params.slug})
            .then((course) =>
                res.render('courses/show',{ course:mongooseToOject(course)})
            )
            .catch(next)
    }

    // [GET] courses/create
    create(req,res,next){
        res.render('courses/create')
    }
    // [POST] courses/store
    store(req,res,next){
        const formData = req.body
        formData.image = `https://files.fullstack.edu.vn/f8-prod/courses/13/13.png`
        const course = new Course(formData)
        course.save()
            .then(() => res.redirect('/'))
            .catch(next)

    }

      // [GET] courses/:id/edit
    edit(req,res,next){
        Course.findById(req.params.id)
            .then((course)=>res.render('courses/edit',{
                course:mongooseToOject(course)
            }))
            .catch(next)       
    }
    // [PUT] /courses/:id
    update(req,res,next){
        Course.updateOne({_id: req.params.id},req.body)
            .then(()=>res.redirect('/me/stored/courses'))
            .catch(next)
    }
}

module.exports = new CourseController();
