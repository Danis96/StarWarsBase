import React, { Component } from 'react';
import './allAround.css';

class Vehicle extends Component {
    state = { 
        showVehiclesInfo: false
     }
    render() { 
        const {name, cic, cc, crew, model, manufacturer, length, mas, passengers, consumables, vehicleClass, image } = this.props;
        const {showVehiclesInfo} = this.state;
        return (
             <div className='container'>
            <div className='card'>
            <div className='container-fluid text-center' >
                          <img alt='image' className='card-img-top imagePlanet'  src={image} />
                    </div>
                <div className='card-header text-center'>
                    <h2>{name}</h2>
                    <p>Main informations about {name}  <i onClick={() => this.setState({  showVehiclesInfo: !this.state.showVehiclesInfo })} className='fas fa-caret-down' style={styles.ikonica}></i></p>
                </div>
                {
                     showVehiclesInfo ? (
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-6 text-center' >
                                    <h5>Length:</h5><p className='card-text'>{length}  m</p><hr />
                                    <h5>Model:</h5><p className='card-text'> {model}</p><hr />
                                    <h5>Manufacturer:</h5><p className='card-text'>{manufacturer}</p><hr />
                                    <h5>Crew:</h5><p className='card-text'> {crew}</p><hr />
                                    <h5>Cargo capacity: </h5> <p className='card-text'>{cc}</p><hr />
                                </div>
                                <div className='col-md-6 text-center'>
                                    <h5>Cost in credits:</h5><p className='card-text'> {cic}</p><hr />
                                    <h5>Max atmospheric speed:</h5><p className='card-text'> {mas}</p><hr />
                                    <h5>Passengers: </h5> <p className='card-text'>{passengers}</p><hr />
                                    <h5>Consumables: </h5> <p className='card-text'>{consumables}</p><hr />
                                    <h5>Vehicles Class: </h5> <p className='card-text'>{vehicleClass}</p><hr />
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
 
export default Vehicle;