const mongooes = require('mongoose')


async function connect(){
    try {
        await mongooes.connect('mongodb://localhost:27017/S_education_dev',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log("connect database successfully");
    } catch (error) {
        console.log("connect database error");

    }
}

module.exports = {connect}
