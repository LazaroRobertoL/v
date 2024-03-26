const mongoose = require('mongoose');
const url_db = 'mongodb://127.0.0.1:27017/';

mongoose.connect(url_db)
.then(() => {

    console.log('A huevo conectoooo')
})
.catch((err) => {

    console.log('o jala la pendejada')
})
const alumnosSchema = new mongoose.Schema(
    {
       name:{

        type:String
       },

       apepat:{
        type:String
       },

       apemat:{

        type:String
       },

       fechanac:{

        type:Date
       }

    }
)
const alumnosmodel = new mongoose.model('tabla de alumnos', alumnosSchema)