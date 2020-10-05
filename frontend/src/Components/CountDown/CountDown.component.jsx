import React from "react";
import CountdownTimer from "react-component-countdown-timer";
 
class CountDown extends React.Component {
  render() {
    // var settings = {
    //   count: 5432,
    //   border: true,
    //   showTitle: true,
  
    // };
    return (
    //   <CountdownTimer {...settings} />
      <CountdownTimer 
        hideDay 
        hideHours
        count={600}
        border 
        showTitle 
        responsive 
        size={35} 
        color="#fff" 
        backgroundColor="#ff546a"
        direction="left"
      />
    );
  }
}

export default CountDown;