import React from 'react';
import logoBig from '../assets/starlogo2.png';
import './allAround.css';


const Header = () => {
    return ( 
        <div className='jumbotron text-center'>
          <div className='container'>
           <img src={logoBig} alt='logo1'  className='slikaHeader' />
          </div>
          <hr />
          <h2 style={styles.whiteL}>Welcome to the Star Wars World</h2>
          <div className='container'>
            <p style={styles.whiteL}>Here you can learn everything about Star Wars</p>
          </div>
        </div>
     );
}

const styles = {
    whiteL: {
        color: '#fff'
    },
    
}
 
export default Header;