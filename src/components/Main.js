import React, { Component } from 'react';
import Card from './Card';

import planeta3 from '../assets/planet3.png';
import yoda from '../assets/yoda.png';
import millenium from '../assets/milfal.png';
import rey from '../assets/rey.png';
import deathstar from '../assets/ds.jpg';

// api's 
const people = 'people/';
const starships = 'starships/';


class Main extends Component {


    render() {
        return (
            <div className='container' style={styles.grupa}>
                <div className='row'>
                    <div className='col-md-6'>
                        <Card 
                            cardHeader='Star Wars'
                            cardTitle='Planets'
                            cardText='Click here to see all the planets Star Wars created'
                            btnText='Go to planets'
                            to='/planets'
                            cardS1={planeta3}
                            
                        />
                        
                        <Card 
                            cardHeader='Star Wars'
                            cardTitle='Starships'
                            cardText='Click here to see all the starships from a galaxy far far away'
                            btnText='Go to starships'
                            to='/starships'
                            cardS1={deathstar}

                        />
                         <Card 
                            cardHeader='Star Wars'
                            cardTitle='Vehicles'
                            cardText='Click here to see all the flying machines from Star Wars world'
                            btnText='Go to vehicles'
                            to='/vehicles'
                            cardS1={millenium}

                        />
                    </div>
                    <div className='col-md-6'>
                        <Card 
                            cardHeader='Star Wars'
                            cardTitle='Species'
                            cardText='Click here to see all the species Star Wars bio-developed'
                            btnText='Go to species'
                            to='/species'
                            cardS1={yoda}

                        />
                        <Card 
                            cardHeader='Star Wars'
                            cardTitle='People'
                            cardText='Click here to see all the people from Star Wars'
                            btnText='Go to people'
                            to='/people'
                           cardS1={rey}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    grupa: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },

}

export default Main;