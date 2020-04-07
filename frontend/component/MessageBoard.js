import React from 'react';

class MessageBoard extends React.Component{
  render(){
        const messageStyle={
            width:400,
            height:200,
            backgroundColor:this.props.colorBg,
            alignText:'center',
            color:'#1C1C1C'
        }
    return(
      <div style={messageStyle}>
           {this.props.children}
      </div>
    )
  }
}
export default MessageBoard;
