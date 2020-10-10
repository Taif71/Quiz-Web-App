const express = require('express');


const router = express.Router();
// const bcrypt = require('bcryptjs');
//const db = require('../models');



const adminController = require('../controllers/admin');
const leadboardController = require('../controllers/leadboard');
const quizController = require('../controllers/quiz');



// Admin API
router.post('/admin/login', adminController.handleAdminLogin); // JWT implementation + bcrypt
router.post('/admin/register', adminController.handleAdminRegistration); // JWT implementation
router.post('/admin/submit', adminController.submitQuestions); // requires a bit of work
router.put('/admin/updateQuestion', adminController.updateQuestion); // done
router.put('/admin/updateOption', adminController.updateOption); //done
router.put('/admin/updateSolution', adminController.updateSolution); //done
router.delete('/admin/delete', adminController.deleteQuestions); //done


//Leadboard API
router.get('/leadboard/ranks', leadboardController.userRanks); // done


// Quiz Page API
//router.post('/quiz/username', quizController.handleUsers);
router.get('/quiz/questions', quizController.getQuestions);
router.post('/quiz/submit', quizController.handleSubmits);






module.exports = router;



// TO USE AS REFERENCE FOR DATABASE QUERY



// app.get('/api/contacts', (req, res) => {
//     return db.Contact.findAll()
//       .then((contacts) => res.send(contacts))
//       .catch((err) => {
//         console.log('There was an error querying contacts', JSON.stringify(err))
//         return res.send(err)
//       });
//   });
  
//   app.post('/api/contacts', (req, res) => {
//     const { firstName, lastName, phone } = req.body
//     return db.Contact.create({ firstName, lastName, phone })
//       .then((contact) => res.send(contact))
//       .catch((err) => {
//         console.log('***There was an error creating a contact', JSON.stringify(contact))
//         return res.status(400).send(err)
//       })
//   });
  
//   app.delete('/api/contacts/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     return db.Contact.findById(id)
//       .then((contact) => contact.destroy({ force: true }))
//       .then(() => res.send({ id }))
//       .catch((err) => {
//         console.log('***Error deleting contact', JSON.stringify(err))
//         res.status(400).send(err)
//       })
//   });
  
//   app.put('/api/contacts/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     return db.Contact.findById(id)
//     .then((contact) => {
//       const { firstName, lastName, phone } = req.body
//       return contact.update({ firstName, lastName, phone })
//         .then(() => res.send(contact))
//         .catch((err) => {
//           console.log('***Error updating contact', JSON.stringify(err))
//           res.status(400).send(err)
//         })
//     })
//   });