const bcrypt = require('bcryptjs');
const db = require('../models');


// bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("B4c0/\/", salt, function(err, hash) {
//         // Store hash in your password DB.
//     });
// });
const handleAdminLogin = (req, res) => {
    let isAuth;
    const { adminName, password } = req.body;
    if (!adminName || !password) {
        return res.status(400).json('incorrect form submission');
    }

    db.admin.findOne({
        where: { adminName: adminName }
    }).then(data => {
        //const isValid = data.password;
        
        if(data.password === password){
             isAuth = true;
            return res.status(200).json({isAuth});
        } else {
             isAuth = false;
            return res.status(400).json({isAuth});
        }
    }).catch(err => {
        return res.status(400).json(err);
    });


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
    const { questions, opt1, opt2, opt3, opt4, solution } = req.body;

    if( !questions || !opt1 || !opt2 || !opt3 || !opt4 || !solution ) {
        return res.status(400).json('You have given an incorrect form submition!!!');
    }


    return db.quiz.create({ questions, opt1, opt2, opt3, opt4, solution})
             .then(result => {
                 console.log(result + ' questions posted to quiz db');
                 res.status(200).json('Question posted');
             })
             .catch(err => {
                 res.status(404).json(err);
             });
}



const updateQuestion = (req, res) => {
    const { Id, Question } = req.body;
   
    db.quiz.update(
        { questions: Question},
        {
            where: {
                id: Id
            }
        }
                
    ).then(result => {
        // console.log(result);       
        res.status(200).json(result);
    }).catch(err => {
        // console.log(err);
        res.status(404).json(err);
    });
   

}


const updateOption = (req, res) => {
    const { updateOpt, updateText, questionId } = req.body;

    if(!updateOpt || !updateText || !questionId){
        return res.status(400).json('You have given an incorrect form submition!!!');
    }

    if(updateOpt === 1){
        db.quiz.update(
            { opt1: updateText },
            {
                where: {
                    id: questionId
                }
            }
        ).then(result => {
            res.status(200).json(result);
        }).catch(err => {
            res.status(404).json(err);
        })
    } else if(updateOpt === 2) {
        db.quiz.update(
            { opt2: updateText },
            {
                where: {
                    id: questionId
                }
            }
        ).then(result => {
            res.status(200).json(result);
        }).catch(err => {
            res.status(404).json(err);
        });
    } else if(updateOpt === 3) {
        db.quiz.update(
            { opt3: updateText },
            {
                where: {
                    id: questionId
                }
            }
        ).then(result => {
            res.status(200).json(result);
        }).catch(err => {
            res.status(404).json(err);
        });
    } else if(updateOpt === 4) {
        db.quiz.update(
            { opt4: updateText },
            {
                where: {
                    id: questionId
                }
            }
        ).then(result => {
            res.status(200).json(result);
        }).catch(err => {
            res.status(404).json(err);
        });
    } else {
        return res.status(400).json('You have given an incorrect form submition!!!');
    }
}

const updateSolution = (req,res) => {
    const { questionId, solutionNum } = req.body;

    if(!questionId || !solutionNum) {
        return res.status(400).json('You have given an incorrect form submition!!!');
    }

    return db.quiz.update({
        solution: solutionNum
    }, {
        where: {
            id: questionId
        }
    }).then(result => {
        res.status(200).json('You have updated the solution for this question');
    }).catch(err => {
        res.status(404).json(err);
    });



}

const deleteQuestions = (req, res) => {
    const { deleteId } = req.body;

    var idExist = db.quiz.findByPk({ id: deleteId});
    if(!idExist) {
        return res.status(404).json('The Question does not exist!');
    }
    db.quiz.destroy({
        where: {
            id: deleteId
        },
        truncate: true, 
        restartIdentity: true         
    }).then(result => {
        res.status(200).json('You have deleted this question');
    }).catch(err => {
        res.status(404).json(err);
    });
}


module.exports = {
    handleAdminLogin,
    handleAdminRegistration,
    submitQuestions,
    updateQuestion,
    updateOption,
    updateSolution,
    deleteQuestions
};