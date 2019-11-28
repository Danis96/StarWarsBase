import React, { Component } from 'react';
import {firebaseDBReff} from '../firebaseConfiguration/firebaseConfig';
import firebase from 'firebase';
import './allAround.css';

class Subscribe extends Component {
    state = {
        email: ''
    }
    onSubscribe = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { email } = this.state;

        if (email.length > 0) {
            firebaseDBReff.push(email);
            alert("Successfully subscribed");
            console.log(email);
        } else {
            alert("You must enter an email.");
        }
    }

    render() {
        const { email } = this.state;
        return (
            <div className='container text-center' style={styles.formica}>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group text-center'>
                        <h3 htmlFor='Email'>Subscribe here</h3><br />
                        <input name='email'
                            placeholder='Email'
                            type='email'
                            value={email}
                            onChange={this.onSubscribe}
                            style={styles.inputBorder}
                        />
                    </div>
                    <input type='submit' className='btn btn-warning' value='Subscribe' />
                </form>
            </div>
        );
    }
}

const styles = {
    formica: {
        padding: '20px',
    },
    inputBorder: {
        border: 'none',
        borderBottom: '1px solid grey'
    }
}

export default Subscribe;