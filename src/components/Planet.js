import React, { Component } from 'react';
import './allAround.css';

class Planet extends Component {

    state = {
        showPlanetInfo: false
    }


    render() {
        const { name, rp, op, diameter, climate, gravity, terrain, surfaceWater, population, image } = this.props;
        const { showPlanetInfo } = this.state;
        console.log(image);
        return (
            <div className='container'>
                <div className='card'>
                    <div className='container-fluid text-center' id="imagePlanets">
                          <img alt='image' className='card-img-top imagePlanet'  src={image} />
                    </div>
                    <div className='card-header text-center'>
                        <h2>{name}</h2>
                        <p>Main informations about {name}  <i onClick={() => this.setState({ showPlanetInfo: !this.state.showPlanetInfo })} className='fas fa-caret-down' style={styles.ikonica}></i></p>
                    </div>
                    {
                        showPlanetInfo ? (
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-md-6 text-center' >
                                        <h5>Population:</h5><p className='card-text'>{population}</p><hr />
                                        <h5>Climate:</h5><p className='card-text'> {climate}</p><hr />
                                        <h5>Gravity:</h5><p className='card-text'>{gravity}</p><hr />
                                        <h5>Terrain:</h5><p className='card-text'> {terrain}</p><hr />
                                    </div>
                                    <div className='col-md-6 text-center'>
                                        <h5>Rotation-period:</h5><p className='card-text'> {rp}</p><hr />
                                        <h5>Orbital-period:</h5><p className='card-text'> {op}</p><hr />
                                        <h5>Diameter: </h5> <p className='card-text'>{diameter}</p><hr />
                                        <h5>Surface water: </h5><p className='card-text'>{surfaceWater} %</p>
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

export default Planet;