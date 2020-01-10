import React from 'react';
import Emoji from './Emoji';
import ReactFCCtest from 'react-fcctest';
import marked from 'marked';



class GenerateMarkdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markup: MARKDOWNPLACEHOLDER
    };
  }

 
  
  getMarkdownText() {
    var rawMarkup = marked(this.state.markup, {sanitize: true});
    return { __html: rawMarkup };
  }
  render() {
    return <div dangerouslySetInnerHTML={this.getMarkdownText()} />
  }
}

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

function App() {
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
          <textarea id="editor" class="form-control border border-dark rounded shadow p-3 mb-5 bg-white" style={{ height: '70vh', resize: 'none' }} placeHolder="default input" />
        </div>
        <div id="preview" className="col border rounded border-dark shadow p-3 mb-5 bg-white">
          <GenerateMarkdown />
        </div>
      </section>


      <footer className="row">
        <div className="col text-center align-items-center">
          <p>Created with <Emoji symbol="❤️"/> by <a href="https://twitter.com/duncanbain" target="_none">Duncan Bain</a> </p>
          <p>View the source on <a href="https://github.com/duncanjbain/fcc_markdown_previewer/" target="_none">Github</a></p>
        </div>
      </footer>
    </div>

  );
}

export default App;
