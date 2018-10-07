
import React from 'react';
import { isMobile } from 'react-device-detect';
console.log('isMobile', isMobile)
const Links = () => {
    return(
        <div style={{ display: 'flex', flexDirection: 'row', width: '80vw', marginLeft:'auto',marginRight:'auto', justifyContent:'space-between', alignItems:'center', position: 'absolute', bottom: 10, left: 0, right: 0 }}>
            <a href="https://twitter.com/sbalajime" target="_blank">
                <img src="./twitter.png"  style={{ width: 50, height: 50, marginRight: 3 }} />
            </a>
            <a href="https://www.linkedin.com/in/sbalajime/" target="_blank">
                <img src="./linkedin.png" style={{ width: 50, height: 50, marginRight: 3 }} />
            </a>
            <a href="https://github.com/sbalajime" target="_blank">
                <img src="./Octocat.jpg" style={{ width: 50, height: 50, borderRadius: '50%', marginRight: 3 }} />
            </a>
            <a href="https://medium.com/@sbalajime" target="_blank">
                <img src="./medium.png" style={{ width: 50, height: 50, marginRight: 3 }} />
            </a>    
        </div>
    )
}

export default Links;