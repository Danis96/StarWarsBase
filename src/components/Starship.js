import React, { Component } from 'react';
import './allAround.css';

class Starship extends Component {

    state= {
        showStarshipInfo: false
    }

    render() { 
        const {name, image, model, manufacturer, cic, length, mas, crew, passengers, cc, consumables, hyper, MGLT, starshipClass} = this.props;
        const {showStarshipInfo} = this.state;
        return ( 
            <div className='container'>
                <div className='card'>
                <div className='container-fluid text-center' id="imagePlanets">
                          <img alt='image' className='card-img-top imagePlanet'  src={image} />
                    </div>
                    <div className='card-header text-center'>
                        <h2>{name}</h2>
                        <p>Main informations about {name} <i onClick={() => this.setState({ showStarshipInfo: !this.state.showStarshipInfo })} style={styles.ikonica} className='fas fa-caret-down'></i>  </p>
                    </div>
                    {
                        showStarshipInfo ? (
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-md-6 text-center' >
                                        <h5>Model:</h5><p className='card-text'>{model}</p><hr />
                                        <h5>Manufacturer:</h5><p className='card-text'> {manufacturer}</p><hr />
                                        <h5>Cost in credits:</h5><p className='card-text'>{cic}</p><hr />
                                        <h5>Length:</h5><p className='card-text'> {length}</p><hr />
                                        <h5>Max atmospheric speed:</h5><p className='card-text'>{mas}</p><hr />
                                        <h5>Crew:</h5><p className='card-text'> {crew} members</p><hr />
                                    </div>
                                    <div className='col-md-6 text-center'>
                                        <h5>Passengers:</h5><p className='card-text'> {passengers}</p><hr />
                                        <h5>Cargo capacity:</h5><p className='card-text'> {cc}</p><hr />
                                        <h5>Consumables: </h5> <p className='card-text'>{consumables}</p><hr />
                                        <h5>Hyperdrive rating: </h5><p className='card-text'>{hyper} </p>
                                        <h5>MGLT:</h5><p className='card-text'>{MGLT}</p><hr />
                                        <h5>Starship class:</h5><p className='card-text'> {starshipClass}</p><hr />
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

    }
}
 
export default Starship;