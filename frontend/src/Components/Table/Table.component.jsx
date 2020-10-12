import React from 'react';
import Tilt from 'react-parallax-tilt'

import fetchData from './leadboard.js';

const Table = () => {
    
    

    
    return (
    <div>
        <div>
            <h1 className="pt3 underline">LEADERBOARD</h1>
        </div>
        <Tilt
        tiltMaxAngleX= "1"
        tiltMaxAngleY="1"
        >

        <div className="pa4 table">
            <div className="overflow-auto">

            <table className="f6 w-100 mw8 center" cellSpacing="20">
                <thead className="">
                    <tr className="lh-copy">
                        {/* <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Rank</th> */}
                        <th className="fw6 bb b--black-20 tl pr3 bg-white">Username</th>
                        <th className="fw6 bb b--black-20 tl pr3 bg-white">Score</th> 
                        <th className="fw6 bb b--black-20 tl pr3 bg-white">Time</th>               
                    </tr>
                </thead>

            
                <tbody className="lh-copy">
                {                 
                 fetchData.map(item => (
                    <tr>
                        {/* <td className="mt-5 pv3 pr3 bb b--black-20">{item.length}</td><br /> */}
                        <td className="mt5 pv1 pr3 bb b--black-20">{item.userName}</td>
                        <td className="mt5 pv1 pr3 bb b--black-20">{item.score}</td>
                        <td className="mt5 pv1 pr3 bb b--black-20">{item.time}</td>
                    </tr>   
                    ))
            
                }             
                </tbody>
            
                
            </table>
            </div>

        </div>
        </Tilt>
    </div>
    );
}

export default Table;