import React from 'react';
import Header from './components/Header'
import Products from './components/section/Products'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {DataProvider} from './components/section/DataProvider'
import Details from './components/section/Details'
import Cart from './components/section/Cart'

class App extends React.Component{
  render(){
    return(
      <DataProvider>
      <div className="App">
        <Router>
          <Header />

          <section>
            <Routes>
              <Route path="products" element={ <Products /> } />
              <Route path="products/:id" element={ <Details /> } />
              <Route path="cart" element={ <Cart /> } />
            </Routes>
          </section>
        </Router>
      </div>
    </DataProvider>
    );
  }
}

export default App;