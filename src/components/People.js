import React, { Component } from 'react';
import './allAround.css';

class People extends Component {
    state = { 
        showPeopleInfo: false
     }
    render() { 
        const {name, mass, height, hair, eyes, skin, birth, gender, image} = this.props;
      
        const {showPeopleInfo} = this.state;
        return ( 
            <div className='container'>
            <div className='card'>
            <div className='container-fluid text-center' >
                          <img alt='image' className='card-img-top imagePlanet'  src={image} />
            </div>
                <div className='card-header text-center'>
                    <h2>{name}</h2>
                    <p>Main informations about {name}  <i onClick={() => this.setState({ showPeopleInfo: !this.state.showPeopleInfo })} className='fas fa-caret-down' style={styles.ikonica}></i></p>
                </div>
                {
                    showPeopleInfo ? (
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-6 text-center' >
                                    <h5>Mass:</h5><p className='card-text'>{mass}  kg</p><hr />
                                    <h5>Height:</h5><p className='card-text'> {height} cm</p><hr />
                                    <h5>Hair color:</h5><p className='card-text'>{hair}</p><hr />
                                    <h5>Eyes color:</h5><p className='card-text'> {eyes}</p><hr />
                                </div>
                                <div className='col-md-6 text-center'>
                                    <h5>Skin color:</h5><p className='card-text'> {skin}</p><hr />
                                    <h5>Birth year:</h5><p className='card-text'> {birth}</p><hr />
                                    <h5>Gender: </h5> <p className='card-text'>{gender}</p><hr />
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
 
export default People;