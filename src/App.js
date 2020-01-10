import React from 'react';
import Emoji from './Emoji';


function App() {
  return (
    <div className="container">

      <header className="row">
        <div className="col text-center">
          <h1>#Markdown Previewer <br />
            <small className="text-muted">Free Code Camp Front End Libraries Certification</small>
          </h1>
        </div>
      </header>


      <section className="row">

        <div className="col">
          <textarea id="input" class="form-control border border-dark rounded shadow p-3 mb-5 bg-white" style={{ height: '70vh', resize: 'none' }} placeHolder="default input" />
        </div>
        <div className="col border rounded border-dark shadow p-3 mb-5 bg-white">
          <p>Preview Goes Here</p>
        </div>
      </section>


      <footer className="row">
        <div className="col text-center">
          <p>Created with <Emoji symbol="❤️"/> by <a href="https://twitter.com/duncanbain">Duncan Bain</a></p>
        </div>
      </footer>

    </div>

  );
}

export default App;
