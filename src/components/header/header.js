import React from 'react';
import {BrowserRouter,HashRouter, Route, Link,Redirect} from 'react-router-dom';
import ListStore from'../../stores/ListStore.js';
import '../../static/css/index.css';
import '../../static/css/front.css';
import '../../static/css/slick.css';

class HeaderCommpent extends React.Component {

      constructor(props) {
		super(props);
	  }
	

	componentWillMount() {
		
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

      render(){
        return (
		<nav>
			<div className="nav">
				<Link to="/">
				<div className="logo">
					
					Shell Anti-Counterfeit System
					</div>
					</Link>
	            <div id="btn" className="btn">
	                <span></span>
	                <span></span>
	                <span></span>
	            </div>
	            <div id="navbar" className="navbar">
	                <ul className="layer_clcik">
	                    <li><a>Understand label features</a></li>
	                </ul>
	            </div>  
			</div>
		</nav>
        );
      }

}

export {HeaderCommpent}