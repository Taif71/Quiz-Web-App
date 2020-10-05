const express = require('express');

const router = express.Router();




const adminController = require('../controllers/admin');
const leadboardController = require('../controllers/leadboard');
const quizController = require('../controllers/quiz');

// Test route for Home API
router.get('/', (req,res) => {
    res.send('<h1>This is first page</h1>');
});

// Admin API
router.post('/admin/login', adminController.handleAdminLogin);
router.post('/admin/register', adminController.handleAdminRegistration);
router.post('/admin/register', adminController.submitQuestions);
router.put('/admin/register', adminController.updateQuestions);
router.delete('/admin/register', adminController.deleteQuestions);


//Leadboard API
router.get('/leadboard/ranks', leadboardController.userRanks);


// Quiz Page API
router.post('/quiz/username', quizController.handleUsers);
router.get('/quiz/questions', quizController.getQuestions);
router.post('/quiz/submit', quizController.handleSubmits);






module.exports = router;