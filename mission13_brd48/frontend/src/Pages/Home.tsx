import React from 'react';
import TopBanner from '../Blah';
import logo from '../joel.jpg';

function Home() {
  return (
    <div className="App">
      <TopBanner saying="JOEL'S MOVIE COLLECTION PART 2" />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br />
        <br />
        <br />
        <a>
          <p>
            A collection of only the finest films curated by non other than Joel
            Cornelius Hilton III, Esq.
          </p>
          <p>You will also find a link to Mr. Hilton's podcast, BaconSale.</p>
        </a>
      </header>
    </div>
  );
}

export default Home;
