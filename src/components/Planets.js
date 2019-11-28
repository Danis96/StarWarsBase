import React, { Component } from 'react';
import planetData from '../data/planets.json';
import Planet from './Planet.js';
import Subscribe from './Subscribe';

class Planets extends Component {
    render() {
        return (
            <div className='container'>
                <div className='container-fluid text-center'>
                    <h2>Star Wars Planets</h2>
                    <p>This page contains all planets that are created and mentioned in Star Wars movies.<br/>
                       If you click on the down caret you can see additional informations about every planet.</p>
                </div>
                {
                     planetData.map((planetDetails) => {
                        return <Planet  
                                      key={planetDetails.id}
                                      name={planetDetails.name}
                                      rp={planetDetails.rotation_period}
                                      op={planetDetails.orbital_period}
                                      diameter={planetDetails.diameter}
                                      climate={planetDetails.climate}
                                      gravity={planetDetails.gravity}
                                      terrain={planetDetails.terrain}
                                      surfaceWater={planetDetails.surface_water}
                                      population={planetDetails.population}
                                      image={planetDetails.image}
                         />
                     })
                }

                <Subscribe />

            </div>
        );
    }
}

export default Planets;