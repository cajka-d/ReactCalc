import React, {useState} from 'react';

import Header from './Header';

import CalcForm from './CalcForm';
import Login from './Login';
import Admin from './Admin';
import Footer from './Footer';

function App() {
  const [page, setPage] = useState('CalcMortgage');
  const pages = {
      CalcMortgage: <CalcForm calcName="Потребительский кредит" rateYear="14.5" />,
      CarLoan:  <CalcForm calcName="Автокридит" rateYear="3.5" />,
      ConsumerCredit: <CalcForm calcName="Потребительский кредит" rateYear="14.5" />,
      Login: <Login />,
      Admin: <Admin />,
  };

  return (
    <div className="wrapper">
      <Header setPage={ setPage } />
      <div className='content'>{  pages[page] }</div>
      <Footer />
    </div>
  );
}

export default App;
