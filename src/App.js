import React from 'react';
import Emoji from './Emoji';
import ReactFCCtest from 'react-fcctest';
import GenerateMarkdown from './GenerateMarkdown';

const MARKDOWNPLACEHOLDER = `
  # Header H1 Example
  
  ## Header H2 Example
  
  [Link Example](https://example.com)
  
  * List Item #1
  * List Item #2
  
  \` Inline Code Example \`
  
  \`\`\`
  Block
  Code
  Example
  \`\`\`
  
  > Block Quote Example
  > By A N Other
  
  [logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Markdown Logo"
  
  **End of Markdown Example!**
  `



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {textInput: MARKDOWNPLACEHOLDER};

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event) {
    this.setState({textInput: event.target.value});
  }

  

  render() {
  return (
    <div className="container">
      <ReactFCCtest />
      <header className="row">
        <div className="col text-center">
          <h1>#Markdown Previewer <br />
            <small className="text-muted">Free Code Camp Front End Libraries Certification</small>
          </h1>
        </div>
      </header>


      <section className="row">

        <div className="col">
          <textarea id="editor" class="form-control border border-dark rounded shadow p-3 mb-5 bg-white" style={{ height: '70vh', resize: 'none' }} 
          placeHolder="default input" value={this.state.textInput} onChange={this.handleChange}/>
        </div>
        <div id="preview" className="col border rounded border-dark shadow p-3 mb-5 bg-white">
          <GenerateMarkdown textInput={this.state.textInput}/>
        </div>
      </section>


      <footer className="row">
        <div className="col text-center align-items-center">
          <p>Created with <Emoji symbol="❤️" /> by <a href="https://twitter.com/duncanbain" target="_none">Duncan Bain</a> </p>
          <p>View the source on <a href="https://github.com/duncanjbain/fcc_markdown_previewer/" target="_none">Github</a></p>
        </div>
      </footer>
    </div>
  );
}
}

export default App;
