import React from 'react';
import ReactDOM from 'react-dom';
import DashBoard from './DashBoard';
import MessageBoard from '/MessageBoard';

class TeamWork extends React.Component{
    render(){
      return(
          <div>
          <DashBoard bgColor="#E7E9E6">TEAMWORK</DashBoard>

          <MessageBoard colorBg="#EEF0F2"></MessageBoard>
        </div>
      )
    }
}
