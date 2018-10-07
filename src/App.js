import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Typed from 'react-typed';
import Links from './Links';

class App extends Component {
	render() {
    	return (
			  	<div style={{ height: '100vh', alignItems: 'center', backgound:'url("background.jpg")'}}>
				  	<div style={{ display: 'flex', flexDirection:'column', paddingTop: '15vh' }}>
						<img src="./dp.jpg" style={{ width: '30vh', height: '30vh', borderRadius: '50%', margin:'0 auto', border: '3px solid #938787' }} />
						<Typed 
							style={{ color: 'black', textAlign:'center', margin:'0 auto', marginTop: '10%', fontSize: '9vh' }}
							strings={['Mechatronics Engineer.', 'Web Developer.', 'React Native Developer.', 'InfoSec Noob.']} 
							typeSpeed={30} 
							backSpeed={30}
							loop
						/>
					</div>
					<Links />
				</div>
    	);
  	}
}

export default App;
