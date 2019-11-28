import React from 'react';
import peopleData from '../data/people.json';
import People from './People.js';
import Subscribe from './Subscribe.js';

const Peoples = () => {
    return ( 
        <div className='container'>
            <div className='container-fluid text-center'>
                    <h2>Star Wars Characters/People</h2>
                    <p>Here are all star wars people, well some of them are not exactly humanly.<br/>
                       If you click on the down caret you can see additional informations about each one of them.</p>
                </div>
            {
                peopleData.map(peopleDetails => {
                    const {id, name, mass, hair_color, skin_color, eye_color, birth_year, gender, height, image} = peopleDetails;
                    return <People  
                                  key={id}
                                  name={name}
                                  mass={mass}
                                  hair={hair_color}
                                  skin={skin_color}
                                  eyes={eye_color}
                                  birth={birth_year}
                                  gender={gender}
                                  height={height}
                                  image={image}
                    />
                })
            }

            <Subscribe  />
        </div>
     );
}
 
 

export default Peoples;