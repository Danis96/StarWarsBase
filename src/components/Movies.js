import React from 'react';
import moviesData from '../data/movies.json';
import Movie from '../components/Movie';
import Subscribe from './Subscribe.js';

const Movies = () => {
    return ( 
        <div className='container text-center'>
            <div className='container-fluid text-center'>
                   <h2>The best Star Wars viewing order</h2><hr />
                   <p> An at-a-glance, spoiler-free version of this guide is at the bottom, along with quick listings for the other orders - chronological, theatrical, and Machete, Rinster, and the complete saga - in case you want to explore those, too. </p>
            </div>
             {
                 moviesData.map(moviesDetails => {
                     const {id, title, description, director, producer, duration, budget, earnings, cover} = moviesDetails;
                     return <Movie key={id}
                                   title={title}
                                   desc={description}
                                   director={director}
                                   producer={producer}
                                   duration={duration}
                                   budget={budget}
                                   earnings={earnings}
                                   cover={cover} 
                     />
                 })
             }
             <Subscribe  />
        </div>
     );
}


 
export default Movies;