var React = require("react");
var ReactDOM = require("react-dom");
import ComponentHeader from './components/componentheader';
import ComponentFooter from './components/componentfooter'; 
import ComponentBody   from './components/componentbody';
class Index extends React.Component{
    componentWillMount(){
        console.log("Index-componentWillMount");
    }
    componentDidMount(){
        console.log("Index-componentDidMount");
    }
    render(){
        var component; 
        if (1==1)
        {
            component = <ComponentBody gender={"male"}/>;
        }
        return (
        <div>
        <ComponentHeader/>
        {component}
        <ComponentFooter/>
        </div>
      );
    }; 
}

ReactDOM.render( <Index/>, document.getElementById('myapp'));