import React from 'react'; 
export default class ComponentBody extends React.Component{
  render(){
      var userName = ' ';
      var buttonName = 'press me';
    //   &nbsp indicate the enter
      var html = 'this&nbspis&nbspimooc';
      return(
        <div>
            <h2>
                this is body
            </h2>  
            <p>
                {userName === ' '? "user name is empty" : userName}
            </p> 
            {/* this is for jsx comment*/}
            <input type='button' value={buttonName}></input>
            { /* this need for unicode conversion*/ }
            <p >
                {html}
            </p>  
            { /* this is for no unicode conversion, to use dangerouslySetInnerHTML property*/ }
            <p dangerouslySetInnerHTML={{__html:html}}>
            </p>    

        </div>   
      );
  }
}