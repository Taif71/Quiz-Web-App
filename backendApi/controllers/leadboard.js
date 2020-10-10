const db = require("../models");





const userRanks =  (req, res) => {
    
        var x = []; // temporary variable to use inside the algo
        var ranked = []; // array variable that will be used as a container for the data that will be sent to the client

        // fetching out data from the database table user with attributes userName,Score, Time
        db.user.findAll({
          attributes: ['userName','score', 'time']
        }).then(result => {
          
          // sorting my scores list first.
          for (let i=0; i<result.length; i++)
          {
            x.push(result[i].score);
          }          
          x.sort();
          x.reverse(); // reversed the values for ease of compare for future



          // we're using 3 loops O(n^3) to do as following:
          /* 1. */
          for(let j=0; j<x.length; j++){
            for(let k=0;k<result.length; k++)
            {
              if(x[j] === x[j+1]) {
                if(x[j] === result[k].score){
                    for(m=k+1; m<result.length; m++){
                      if(x[j] === result[m].score)
                      {
                        if(result[m].time > result[k].time)
                        {
                          ranked.push(result[k]);
                          //res.status(200).json(ranked);
                        } else if(result[m].time < result[k].time) {
                            
                          ranked.push(result[m]);
                          //res.status(200).json(ranked);
                        } else {
                          ranked.push(result[k]);
                        }
                      }
                    }
                }
              } 
              else {
                if(x[j] === result[k].score){
                  ranked.push(result[k]);
                  break;
                }
              }
            }
          }

          res.status(200).json(ranked);
        }).catch(err => {
          res.status(404).json(err);
        })
      }

        
    
        

module.exports = {
    userRanks
}

