import React from 'react';
import Navbar from './components/layouts/Navbar';
import Header from './components/Header';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Planets from './components/Planets';
import Footer from './components/layouts/Footer';
import Starships from './components/Starships';
import Species from './components/Species';
import Peoples from './components/Peoples';
import Vehicles from './components/Vehicles';
import Movies from './components/Movies';
import * as firebase from 'firebase/app';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <div className='container'>
           <Switch>
             <Route exact path='/' component={Main} />
             <Route exact path='/planets' component={Planets} />
             <Route exact path='/starships' component={Starships} />
             <Route exact path='/species' component={Species} />
             <Route exact path='/people' component={Peoples} />
             <Route exact path='/vehicles' component={Vehicles} />
             <Route exact path='/movies' component={Movies} />
           </Switch>
        </div>
        <Footer style={styles.marg}  />
      </div>
    </Router>
  );
}

const styles = {
  marg: {
    marginTop: '30px'
  }
}

export default App;