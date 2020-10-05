const bcrypt = require('bcryptjs');
const db = require('../models');


// bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("B4c0/\/", salt, function(err, hash) {
//         // Store hash in your password DB.
//     });
// });
const handleAdminLogin = (req, res) => {

}

const handleAdminRegistration = (req, res) => {


    const { adminName, password } = req.body;
    console.log(req.body);
    
    
    if( !adminName || !password ){
        return res.status(400).json('You have given an incorrect form submition!!!');
    }


    return db.admin.create({ adminName, password })
      .then(result => {
          res.status(200).json('Posted');
      })
      .catch(err => {
          console.log(err);
          res.status(404).json(err);
      });    
    
}


const submitQuestions = (req, res) => {

}

const updateQuestions = (req, res) => {

}

const deleteQuestions = (req, res) => {

}


module.exports = {
    handleAdminLogin,
    handleAdminRegistration,
    submitQuestions,
    updateQuestions,
    deleteQuestions
};