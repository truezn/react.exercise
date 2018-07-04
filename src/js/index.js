var React = require("react");
var ReactDOM = require("react-dom");
// import ComponentHeader from './components/ComponentHeader';
class index extends React.Component{
    render(){
        return(
        <div>Hello World</div>
      );
    }; 
}

ReactDOM.render( <index/>, document.getElementById('myapp'));