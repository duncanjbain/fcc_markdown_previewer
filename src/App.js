import React from 'react';


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
          <textarea id="input" class="form-control" style={{ height: '70vh', resize: 'none' }} placeHolder="default input" />
        </div>
        <div className="col">
          <p>Preview Goes Here</p>
        </div>
      </section>


      <footer className="row">
        <div className="col text-center">
          <p>Footer goes here</p>
        </div>
      </footer>

    </div>

  );
}

export default App;
