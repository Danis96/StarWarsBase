import React from 'react';
import vehiclesData from '../data/vehicles.json';
import Vehicle from './Vehicle.js';
import Subscribe from './Subscribe';


const Vehicles = () => {

    return ( 
        <div className='container'>
            <div className='container-fluid text-center'>
                    <h2>Star Wars Vehicles</h2>
                    <p>Here you can find every flying, hovering machine that goes in Star Wars world.<br/>
                       If you click on the down caret you can see additional informations about every vehicle.</p>
                </div>
            {
                vehiclesData.map(vehiclesDetails => {
                    const {id, name, model, manufacturer, cost_in_credits, length, max_atmospheric_speed, crew, passengers,
                          cargo_capacity, consumables, vehicle_class, image} = vehiclesDetails;

                      return <Vehicle 
                                     key={id}
                                     name={name}
                                     model={model}
                                     manufacturer={manufacturer}
                                     cic={cost_in_credits}
                                     length={length}
                                     mas={max_atmospheric_speed}
                                     crew={crew}
                                     passengers={passengers}
                                     cc={cargo_capacity}
                                     consumables={consumables}
                                     vehicleClass={vehicle_class} 
                                     image={image}  
                      />
                })
            }
            <Subscribe />
        </div>
     );
}
 


export default Vehicles;