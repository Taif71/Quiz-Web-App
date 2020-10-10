const db = require("../models");



const getQuestions = (req, res) => {

    // if Deleted from DB id does not aut reset 
   
   // getting all th questions data from the database table quiz

   db.quiz.findAll({
       attributes: ['id', 'questions', 'opt1', 'opt2','opt3','opt4', 'solution']
   }).then(result => {
       res.status(200).json(result);
   }).catch(err => {
       res.status(404).json(err);
   });
  

}

const handleSubmits = (req, res) => {
    const { questionId, userName, ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10, score, time } = req.body;
    score = 0; // temporary for dev use
    if(!username || !score) {
        return res.status(400).json('You have given an incorrect form submition!!!');
    }
    // if any ans are not their due to no questions for it, then we just place the value as null or 0
    if(!ans6){
        ans6 = null;
    } 
    if(!ans7){
        ans7 = null;
    } 
    if(!ans8){
        ans8 = null;
    } 
    if(!ans9){
        ans9 = null;
    } 
    if(!ans10){
        ans10 = null;
    } 

    // get the Solution for the specific question from the database and store it in a variable for future use
    db.quiz.find({
       solution
    }, {
        where : {
            id: questionId
        }
    }).then(result => {

        const solNum = result;

    }).catch(err => {
        res.status(404).json(err);
    });


    // figuring out if user input is correct
    // to figure this out you have to loop through all the answers and compare with solNum of each questions
    // then you get the score

    // figuring out the score of the user
    if(ans1 === 1) {
        score += 1;
    } else if(ans1 === 0) {
        score += 0;
    } else if(ans1 === null){
        return score;
    }


    if(ans2 === 1) {
        score += 1;
    } else if(ans2 === 0) {
        score += 0;
    } else if(ans2 === null){
        return score;
    }

    if(ans3 === 1) {
        score += 1;
    } else if(ans3 === 0) {
        score += 0;
    } else if(ans3 === null){
        return score;
    }

    if(ans4 === 1) {
        score += 1;
    } else if(ans4 === 0) {
        score += 0;
    } else if(ans4 === null){
        return score;
    }

    if(ans5 === 1) {
        score += 1;
    } else if(ans5 === 0) {
        score += 0;
    } else if(ans5 === null){
        return score;
    }
 // -------- MINIMUM 5 ----------
    if(ans6 === 1) {
        score += 1;
    } else if(ans6 === 0) {
        score += 0;
    } else if(ans6 === null){
       // return score;
    }

    if(ans7 === 1) {
        score += 1;
    } else if(ans7 === 0) {
        score += 0;
    } else if(ans7 === null){
       // return score;
    }

    if(ans8 === 1) {
        score += 1;
    } else if(ans8 === 0) {
        score += 0;
    } else if(ans8 === null){
       // return score;
    }

    if(ans9 === 1) {
        score += 1;
    } else if(ans9 === 0) {
        score += 0;
    } else if(ans9 === null){
        //return score;
    }

    if(ans10 === 1) {
        score += 1;
    } else if(ans10 === 0) {
        score += 0;
    } else if(ans10 === null){
       // return score;
    }

// -------- MAX 5 ----------

    db.users.create({ userName, ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10, score, time })
      .then(result => {
          res.status(200).json('Posted');
      })
      .catch(err => {
          console.log(err);
          res.status(404).json(err);
      });    

}




module.exports = {
    // handleUsers,
    getQuestions,
    handleSubmits
}