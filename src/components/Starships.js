import React from 'react';
import starshipData from '../data/starships.json';
import Starship from './Starship.js';
import Subscribe from './Subscribe.js';

const Starships = () => {
    return ( 
        <div className='container'>
            <div className='container-fluid text-center'>
                    <h2>Star Wars Starships</h2>
                    <p>This is very important, here are the baddass starships.<br/>
                       If you click on the down caret you can see additional informations about every starship.</p>
                </div>
            { 
                starshipData.map(starshipDetail => {
                    const {id, name, model, manufacturer, cost_in_credits, length, max_atmosfering_speed, 
                          crew, passengers, cargo_capacity, consumables, hyperdrive_rating,MGLT, starship_class, image} = starshipDetail;
                    return <Starship  
                                    key={id}
                                    name={name}
                                    model={model}
                                    manufacturer={manufacturer}
                                    cic={cost_in_credits}
                                    length={length}
                                    mas={max_atmosfering_speed}
                                    crew={crew}
                                    passengers={passengers}
                                    cc={cargo_capacity}
                                    consumables={consumables}
                                    hyper={hyperdrive_rating}
                                    MGLT={MGLT}
                                    starshipClass={starship_class}
                                    image={image}
                    />
                })

            }
            <Subscribe  />
        </div>
     );
}
 
export default Starships;