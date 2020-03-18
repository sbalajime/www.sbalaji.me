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
					<a href="https://www.youracclaim.com/badges/3eb63f53-5362-4bac-bc72-c4f5d97d339e/public_url"><img src="./qualifications.png" style={{width:90, height:'auto', objectFit:'contain',position:'absolute', top: 20, right: 20}}/></a>
					<Links />
				</div>
    	);
  	}
}

export default App;
