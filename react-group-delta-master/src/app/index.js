import React from 'react';
import './index.scss';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>Nerijus</h1>
        <hr />
        <p className="Header--contact">Phone: +370 888 888</p>
        <p className="Header--contact">
          Email:{' '}
          <a
            href="mailto:nerkab@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            nerkab@gmail.com
          </a>
        </p>
        <p className="Header--summary">
          Pastry pie cotton candy jelly lollipop chocolate bar pastry tootsie
          roll. Brownie soufflé liquorice pudding muffin. Sugar plum toffee oat
          cake gummies lollipop icing. Bonbon chocolate bar chocolate cake
          marzipan candy canes. Gingerbread halvah wafer cotton candy marzipan
          candy canes candy carrot cake. Oat cake carrot cake powder bear claw
          biscuit sweet roll. Muffin topping ice cream soufflé sweet roll oat
          cake chocolate bar pastry.
        </p>
        <img
          className="Header--profile-picture"
          src="https://openclipart.org/download/211821/matt-icons_preferences-desktop-personal.svg"
          alt="This is me"
        />
      </header>
    </div>
  );
}

export default App;
