import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CryptoTable from './pages/CryptoTable';
import CoinDetails from './pages/CoinDetails';
import PageHeader from './components/PageHeader';
import Footer from './components/Footer';
import './styles/app.css';

function App() {
  return (
    <div>
      <PageHeader />
      <BrowserRouter>
        <Switch>
          <Route exact path="/poloniex-chart-redux" component={CryptoTable} />
          <Route path="/poloniex-chart-redux/:coin" component={CoinDetails} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
