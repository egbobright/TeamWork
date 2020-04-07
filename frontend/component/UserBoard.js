import React from 'react';

class UserBoard extends React.Component{
    render(){
      const userStyle={
          width:45,
          height:45,
          margin:'5 5 5 500',
          backgroundColor:'black'
        };
        let imageLoaded=this.props.userPhoto;
        return
        (
             <div style={userStyle}>
            <img src={imageLoaded}/>
          </div>
        )
    }
}

export default UserBoard;
