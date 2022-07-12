
var mongoose = require('mongoose');
var csvSchema = new mongoose.Schema({
    first_Name:{
        type: String
    }, 
    Last_Name: {
        type: String
    },
    Title: {
        type: String
    },
    Company_Name_for_Emails: {
        type: String
    },
    Email:{
        type: String
    },
    Email_Status:{
        type: String
    },
    Seniority:{
        type: String
    },
    Departments:{
        type: String
    },
    Presonal_Phone:{
        type: String
    },
    Company_Phone:{
        type: String
    },
    Employee:{
        type: Number
    },
    Industry:{
        type: String
    },
    Person_Linkedin_Url:{
        type: String
    },
    Website:{
        type: String
    },
    Company_Linkedin_Url:{
        type: String
    },
    Country:{
        type: String
    },
    Annual_Revenue:{
        type: Number
    }
})
module.exports = mongoose.model('userModel', csvSchema )