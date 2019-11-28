import React from 'react';
import { Link } from 'react-router-dom';
import './allAround.css';

const Card = (props) => {
    const { cardHeader, cardText, btnText, cardTitle, to, cardS1 } = props;
    return (
        <div className='card text-center' style={styles.padd}>
            <div className='container' id='imageContainer'>
                <img className='d-block imageCard' alt='cardimg' src={cardS1}/>
            </div>
        <div className='card-header' style={{background: '#000', color: '#fff'}}>
            {cardHeader}
        </div>
        <div className='card-body'>
            <h5 className='card-title'>{cardTitle}</h5>
            <p className='card-text'>{cardText}</p>
            <Link to={to} className='btn btn-warning'>{btnText}</Link>
        </div>
        </div>
     );
}

const styles = {
    padd: {
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'center'
    },
    

}

export default Card;