import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Typed from 'react-typed';

class App extends Component {
	render() {
    	return (
      		<div style={{ width: '80%', margin: '0 auto' }}>
			  	<div style={{ height: '100vh', alignItems: 'center' }}>
				  	<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', margin:'0 auto', marginTop: '20%', width: '70%'}}>
						<img src="./dp.jpg" style={{ width: 150, height: 150, borderRadius: '50%', margin:'0 auto' }} />
						<Typed 
							style={{ color: 'white', textAlign:'center', margin:'0 auto', marginTop: '10%', fontSize: 28 }}
							strings={['Mechatronics Engineer.', 'Web Developer.', 'Android Developer.', 'InfoSec Noob.']} 
							typeSpeed={20} 
							backSpeed={30}
							loop
						/>
					</div>
					<div style={{ display: 'flex', flexDirection: 'row', width: '50%', marginLeft:'auto',marginRight:'auto', justifyContent:'space-between', alignItems:'center', position: 'absolute', bottom: 10, left: 0, right: 0 }}>
						<a href="https://twitter.com/sbalajime" target="_blank">
							<img src="./twitter.png"  style={{ width: 50, height: 50}} />
						</a>
						<a href="https://www.linkedin.com/in/sbalajime/" target="_blank">
							<img src="./linkedin.png" style={{ width: 50, height: 50 }} />
						</a>
						<a href="https://github.com/sbalajime" target="_blank">
							<img src="./Octocat.jpg" style={{ width: 50, height: 50, borderRadius: '50%' }} />
						</a>
						<a href="https://medium.com/@sbalajime" target="_blank">
							<img src="./medium.png" style={{ width: 50, height: 50 }} />
						</a>
					</div>
				</div>
			</div>
    	);
  	}
}

export default App;
