import React, { Component } from 'react';
import './allAround.css';

class Specie extends Component {
    state = { 
        showSpecieInfo: false
     }
    render() {
        const {name, classification, designation, height, skin, hair, eyes, lifespan, language, image} = this.props;
        const {showSpecieInfo} = this.state;
        return ( 
            <div className='container'>
            <div className='card'>
            <div className='container-fluid text-center' >
                          <img alt='image' className='card-img-top imagePlanet'  src={image} />
                    </div>
                <div className='card-header text-center'>
                    <h2>{name}</h2>
                    <p>Main informations about {name}  <i onClick={() => this.setState({ showSpecieInfo: !this.state.showSpecieInfo  })} className='fas fa-caret-down' style={styles.ikonica}></i></p>
                </div>
                {
                    showSpecieInfo ? (
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-6 text-center' >
                                    <h5>Classification:</h5><p className='card-text'>{classification}</p><hr />
                                    <h5>Designation:</h5><p className='card-text'> {designation}</p><hr />
                                    <h5>Average height:</h5><p className='card-text'>{height} cm</p><hr />
                                    <h5>Skin colors:</h5><p className='card-text'> {skin}</p><hr />
                                </div>
                                <div className='col-md-6 text-center'>
                                    <h5>Eye colors:</h5><p className='card-text'> {eyes}</p><hr />
                                    <h5>Hair colors:</h5><p className='card-text'> {hair}</p><hr />
                                    <h5>Average lifespan: </h5> <p className='card-text'>{lifespan} years</p><hr />
                                    <h5>Language: </h5><p className='card-text'>{language} </p>
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
 
export default Specie;