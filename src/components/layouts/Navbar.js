import React from 'react';
import navLogo from '../../assets/starlogo1.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className='navbar navbar-expand-lg navbar-light' style={styles.navbarColor}>
            <div className='container'>
               <Link className='navbar-brand' to='/'><img src={navLogo} alt='logo' style={styles.navLogo} /></Link>
            </div>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navlinkovi'>
               -
            </button>
            <div className='collapse navbar-collapse' id='navlinkovi'>
                <ul className='navbar-nav mr-auto'>
                   <li className='nav-item'>
                       <Link to='/planets' className='nav-link' style={styles.color}>Planets</Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/starships' className='nav-link' style={styles.color}>Starships</Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/vehicles' className='nav-link' style={styles.color}>Vehicles</Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/people' className='nav-link' style={styles.color}>People</Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/species' className='nav-link' style={styles.color}>Species</Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/movies' className='nav-link' style={styles.color}>Movies</Link>
                   </li>
                </ul>
            </div>
        </nav>
     );
}

const styles = {
    navLogo: {
        width: '50px',
    },
    color: {
        color: '#000'
    },
    navbarColor: {
        background: '#F8C510',
    }
}
 
export default Navbar;