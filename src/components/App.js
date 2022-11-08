import React from 'react';
import NavBar from './NavBar';
import Footer from "./Footer"
import Home from './Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

function App() {
  // const [page, setPage] = useState('/');
  //onChangePage={setPage} />

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/workouts'>
            <Workouts />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
