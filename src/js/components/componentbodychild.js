import React from 'react'; 
export default class BodyChild extends React.Component{
    render(){

        return(
            <div>
             Input text: <input type="text" onChange={this.props.handleInputChange}/>>
            </div>
        ); 

    }
}
