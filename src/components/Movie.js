import React, { Component } from 'react';
import './allAround.css';


class Movie extends Component {
    state = { 
        showMovieInfo: false
     }
    render() { 
        const {title, desc, director, producer, duration, budget, earnings, cover } = this.props;
        const {showMovieInfo} = this.state;
        return ( 
            <div className='container text-center'>
            <div className='card' id='card1'>
                <div className='card-img-top text-center'>
                   <img className='coverImg'  alt='movie cover' src={cover} />
                </div>
                <div className='card-header text-center'>
                    <h2>{title}</h2>
                    <p className='card-text'>{desc}</p>
                    <p>More informations about {title}  <i onClick={() => this.setState({ showMovieInfo: !this.state.showMovieInfo })} className='fas fa-caret-down' style={styles.ikonica}></i></p>
                </div>
                {
                    showMovieInfo ? (
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-6 text-center' >
                                    <h5>Director(s):</h5><p className='card-text'>{director}</p><hr />
                                    <h5>Producer(s):</h5><p className='card-text'> {producer} </p><hr />
                                </div>
                                <div className='col-md-6 text-center'>
                                    <h5>Duration:</h5><p className='card-text'> {duration}</p><hr />
                                    <h5>Budget for the movie:</h5><p className='card-text'> {budget}</p><hr />
                                    <h5>Movie earned:</h5><p className='card-text'>{earnings}</p><hr />
                                </div>
                            </div>


                        </div>
                    ) : null
                }
            </div>
        </div>
         );
    }
}

const styles = {
    ikonica: {
        cursor: 'pointer',
    },
    
}
 
export default Movie;