import React from 'react';

class DashBoard extends React.Component{
  render(){
        const dashBoardStyle={
             padding:10,
              margin:'10 auto',
              height:45,
              alignText:'left',
              fontSize:45,
              backgroundColor:this.props.bgColor
        }

     return (
     <div style={dashBoardStyle}>
          {this.props.children}
     </div>
     )
  }
}
export default DashBoard;
