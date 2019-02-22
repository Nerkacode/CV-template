import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import './index.scss';
// import './NB_pic.PNG';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="Header">
          <h1>Nerijus</h1>
          <hr />
          <p className="Header--contact">Phone: +370 688 88888</p>
          <p className="Header--contact">
            Email:{' '}
            <a
              href="mailto:nerijus.bareikis@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              nerijus.bareikis@gmail.com
            </a>
          </p>
          <p className="Header--summary">
            Pastry pie cotton candy jelly lollipop chocolate bar pastry tootsie
            roll. Brownie soufflé liquorice pudding muffin. Sugar plum toffee
            oat cake gummies lollipop icing. Bonbon chocolate bar chocolate cake
            marzipan candy canes. Gingerbread halvah wafer cotton candy marzipan
            candy canes candy carrot cake. Oat cake carrot cake powder bear claw
            biscuit sweet roll. Muffin topping ice cream soufflé sweet roll oat
            cake chocolate bar pastry.
          </p>
          <img
            className="Header--profile-picture"
            src={require('./NB_pic.PNG')}
            alt="This is me"
          />
        </header>
        <main>
          <section className="Section">
            <div className="Section--left">
              <h3>Education</h3>
            </div>
            <div className="Section--right">
              <h3>Vilnius Gediminas Technical University</h3>
              <p>
                <span>Major: </span>
                Engineer
              </p>
              <p>
                <span>Minor: </span>
                Brave Engineer
              </p>
            </div>
          </section>
          <section className="Section">
            <div className="Section--left">
              <h3>Skills</h3>
            </div>
            <div className="Section--right">
              <div>
                <h3>Office skills</h3>
                <p>
                  Pastry pie cotton candy jelly lollipop chocolate bar pastry
                  tootsie roll. Brownie soufflé liquorice pudding muffin. Sugar
                  plum toffee oat cake gummies lollipop icing.{' '}
                </p>
              </div>
              <div>
                <h3>Computer skills</h3>
                <p>
                  Bonbon chocolate bar chocolate cake marzipan candy canes.
                  Gingerbread halvah wafer cotton candy marzipan candy canes
                  candy carrot cake. Oat cake carrot cake powder bear claw
                  biscuit sweet roll.{' '}
                </p>
              </div>
            </div>
          </section>
          <section className="Section">
            <div className="Section--left">
              <h3>Experience</h3>
            </div>
            <div className="Section--right">
              <div>
                <div className="Section--right-job-title">
                  <h3>Code Academy</h3>
                  <span>Student, 2018.10 - present</span>
                </div>
                <ul>
                  <li>HTML</li>
                  <li>SCC/SCSS</li>
                  <li>JavaScript</li>
                  <li>Node.js</li>
                  <li>React.js</li>
                </ul>
              </div>
              <div>
                <div className="Section--right-job-title">
                  <h3>The School of Life</h3>
                  <span>Human, 1985.12 - present</span>
                </div>
                <ul>
                  <li>Eating</li>
                  <li>Running</li>
                  <li>Smiling</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="Section">
            <div className="Section--left">
              <h3>Hobbies</h3>
            </div>
            <div className="Section--right">
              <p>Traveling, Playing baskelball, Coding...</p>
            </div>
          </section>
          <section className="Section">
            <div className="Section--left">
              <h3>References</h3>
            </div>
            <div className="Section--right">
              <p>Available on request</p>
            </div>
          </section>
        </main>
      </div>
      <footer className="Footer">
        <a
          href="https://github.com/Nerkacode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
        <a
          href="https://lt.linkedin.com/in/nerijus-bareikis-2a63a2129"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </footer>
    </React.Fragment>
  );
}

export default App;
