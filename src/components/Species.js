import React from 'react';
import speciesData  from '../data/species.json';
import Specie from './Specie.js';
import Subscribe from './Subscribe';


const Species = () => {
    return ( 
        <div className='container'>
            <div className='container-fluid text-center'>
                    <h2>Star Wars Species</h2>
                    <p>There are a lot of species and different kinds of creatures in star wars, here you can see them all.<br/>
                       If you click on the down caret you can see additional informations about every specie.</p>
                </div>
             {
                 speciesData.map(speciesDetails => {
                     const {id, name, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan, language, image} = speciesDetails;
                     return <Specie  
                                   key={id}
                                   name={name}
                                   classification={classification}
                                   designation={designation}
                                   height={average_height}
                                   skin={skin_colors}
                                   hair={hair_colors}
                                   eyes={eye_colors}
                                   lifespan={average_lifespan}
                                   language={language}
                                   image={image}
                     />
                 })
             }
             <Subscribe />
        </div>
     );
}
 
export default Species;