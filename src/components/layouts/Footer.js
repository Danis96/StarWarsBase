import React from 'react'
import insta from '../../assets/instagram-logo.png';
import github from '../../assets/github-logo.png';

const Footer = () => {
    return (
        <div className='container-fluid' style={styles.backColor}>
            <div className='alert'>
                <p>Developed by: Danis Preldzic</p>
                <a href='https://www.instagram.com/preldzicdanis/'><img src={insta} alt='instagram' style={styles.icons} /></a>
                <a href='https://github.com/Danis96' ><img src={github} alt='instagram' style={styles.icons} /></a>
            </div>
            <div className='container'>

            </div>
        </div>
    );
}

const styles = {
    backColor: {
        background: '#F8C510',
        height: '80px',
        textAlign: 'center'
    },
    icons: {
        width: '20px',
        marginLeft: '20px'
    }
}

export default Footer;